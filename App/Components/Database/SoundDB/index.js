import React, { Component, createRef } from 'react';
import { Connection } from '../Connection';
// import { ConnectionQuery } from '../ConnectionQuery';
import { DBProps } from './Props';

const _config = DBProps.config;
const _schema = DBProps.schema;
const _statements = DBProps.statements;
const _ref = createRef();

const _dbSuccess = () => {
  console.log('query transaction completed onSuccessfully');
};

const _onError = (tx, error) => { console.log(error); }
// { insertId, rowsAffected, rows: { length, item(), _array, }, }
const _txSuccess = (tx, result) => {
  console.log('tx resultset', result);
};

const _dbError = (err) => { console.log('db error', err) };
const _txError = (tx, err) => { console.log('tx err', tx, err) };

class SoundDB extends Component {
  constructor(props) {
    super(props);
    this.ref = _ref;
    this.config = _config;
    this.schema = _schema;
    this.statements = _statements;

    this.state = {
      isConnecting: false,
      isConnected: false,
      isError: false,
      isLoaded: false,
      dataStore: false,
      connected: false,
      connectionStatus: 'disconnected',
      queryStoreData: {
        results: [],
        lastResult: null,
      },
    };
    this.queryStoreData = {
      results: [],
      lastResult: null,
    };

    this.autoconnect = this.props.autoconnect ? true : false;
    this.onConnected = this.props.onConnected ? this.props.onConnected : this._onConnected;
    this.connectionStatus = false;
    this.connection = null;

    this.onConnected = this.onConnected.bind(this);
    this.queryStore = this.queryStore.bind(this);
    this.insert = this.insert.bind(this);

    this._selectSuccess = (tx, result) => {
      this.result.data = result;
      console.log('Selected', result._array);
      return result;
    };

    this._insertSuccess = (tx, result) => {
        console.log('tx resultset', result);
        this.queryStoreData.lastResult = result;
        this.queryStoreData.insertId = result.insertId;
        console.log(['Insert Success:',
            ['( id:', result.insertId].join(''),
            ['rowsAffected:', result.rowsAffected, ')'].join(''),
          ].join(' ')
        );
        return result;
    };

    this.queryReporters = {
      dbSuccess: _dbSuccess,
      txSuccess: _txError,
      insertSuccess: this._insertSuccess,
      selectSuccess: this._selectSuccess,
      dbError: (err) => { console.log('db error', err); },
      txError: (tx, err) => { console.log('tx error' ,tx, err); },
    };
    this.setConnection(this.config, this.onConnected);
    // this.setConnection(this.config, null);
  }

  onComponentDidMount() {
    console.log('[SoundDB] mounted');
    this.setConnection(this.config, null);
  }

  getConnection() {
    return this.connection;
  }

  setConnection(config, onConnected) {
    if (typeof this.connection === 'object' && this.connectionStatus === 'connected') {
      console.log('[SoundDB] already Connected');
      return false;
    }
    console.log('[SoundDB] setting connection');
    this.connection = new Connection({
      name: config.name,
      version: config.version,
      description: config.description,
      size: config.size,
      onConnect: onConnected,
    });

    // Wait for connection to be set before attempting to auto conect
    if (this.autoconnect) {
      console.log('[SoundDB] autoconnect');
      this.initConnection();
    }
  }

  initConnection() {
    if (this.connectionStatus === 'connected') {
      console.log('[SoundDB] already Connected');
      return false;
    }
    console.log('[SoundDB] initConnection');
    this.connectionStatus = 'connecting';
    this.connection.connect();
  }

  _onConnected(conn) {
    console.log('[SoundDB] connected');
    this.connectionStatus = 'connected';
    this.existsOrCreate();
  }


  existsOrCreate() {
    console.log('[SoundDB] existsOrCreate');
    this.queryStore('create');
  }

  insert(args) {
    console.log('[SoundDB] insert');
    let exists = this.queryStore('checkExists', args);
    console.log('[SoundDB] checkExists result', exists);
    if (exists){ return false; }
    // let selectid = this.queryStore('select', args);
    let inserted = this.queryStore('insert', args);
    console.log('[SoundDB] checkExists result', inserted);
  }

  getAll() {
    let result = this.queryStore('all');
    console.log('get all local soundcape', result);
    // this.setState({testdata: result});
    return result;
  }

  select() {
    let result = this.queryStore('select');
    console.log('[SoundDB] select local soundcape', result);
    // this.setState({testdata: result});
    return result;
  }

  queryStore(_key, _args) {
    let _store = {
      create: (connection, reporters, statement, args = null) => {
        console.log('create', reporters);
        connection.db.transaction(
          (tx) => {
            tx.executeSql(
              statement,
              null,
              reporters.txSuccess,
              reporters.txError
            );
          },
          reporters.dbError,
          reporters.dbSuccess
        );
      },
      /// =====================================================
      /// select all
      /// - args [ OFSSET, LIMIT, ORDER ] (PAGER FUNCTION)
      /// =====================================================
      all: (connection, reporters, statement, args) => {
        console.log('[SoundDB] getAll', [connection, reporters, statement, args]);
        const dbSuccess = () => { console.log('[SoundDB] getAll successful'); };
        const dbError = (tx, err) => { console.log('[SoundDB] getAll error ', tx, err); };
        let all_result = [];
        var all_items = connection.db.transaction(
          (tx) => {
            tx.executeSql(
              statement,
              null,
              (tx1, result) => {
                console.log('[SoundDB] getAll results', result);
                if (result.rows.length > 0) {
                  all_result = result.rows;
                  this.queryStoreData.results.push(result.rows);
                  console.log(this.queryStoreData.results);
                }
                return result.rows;
              },
              (tx2, err) => { console.log('tx err', tx2, err) }
            )
           }, dbError, dbSuccess );
           console.log('all_items', all_items);
           console.log('all_result', all_result);
           return all_items;
      },


      /// =====================================================
      /// FILE Exists IN DB?
      /// =====================================================
      checkExists: (connection, reporters, statement, args) => {
        const dbSuccess = (data) => { console.log('query successfu', data); };
        const dbError = (tx, err) => { console.log('query error ', tx, err); };
        const txSuccess = (tx, result) => { console.log('tx sucess', tx, result.rows); };
        const txError = (tx, error) => { console.log('tx error', tx, error); };
        const _filename = args.filename;
        let exists = connection.db.transaction((tx)=>{
          tx.executeSql('SELECT * FROM Soundscapes WHERE filename = ? ;',
            [_filename],
            txSuccess,
            txError
          );
          }, dbError, dbSuccess);
        console.log('check exists', exists);
      },

      insert: (connection, reporters, statement, args) => {
        const dbSuccess = (data) => { console.log('query successful', data); };
        const dbError = (tx, err) => { console.log('query error ', tx, err); };
        const txSuccess = (tx, result) => { console.log('insert tx sucess', tx, result); };
        const txError = (tx, error) => { console.log('tx error', tx, error); };
        const row = [
          args.datetime,
          args.filepath,
          args.filename,
          args.description,
          args.duration,
          args.LatLong,
          args.emotion,
          args.bio,
          args.geo,
          args.anthro,
          args.cultural,
          args.pid,
          args.isUploaded,
        ];
        const _filename = args.filename;
        var recordExists = false;
        var insert_result = '';
        try {
          connection.db.transaction(
            (tx) => {
              tx.executeSql(
                'SELECT * FROM Soundscapes WHERE filename = ? ;',
                [_filename],
                (tx1, result) => {
                  if (result.rows.length > 0) {
                    console.log('Record Exists', result.rows);
                    recordExists = true;
                  }
                },
                txError
              );

              console.log('recordExists' , recordExists);
              if (recordExists) { return false; }
              else {
                tx.executeSql(
                  statement,
                  row,
                  (_tx, _result) => {
                    insert_result = _result;
                    console.log('insert tx sucess', _tx, _result)
                  },
                  txError
                );
              }
            },
            reporters.dbError,
            reporters.dbSuccess
          );
        } catch (e) {
            console.log(e);
        } finally {
          console.log('insert_result', insert_result);
        }
      },

      updatePid(connection, reporters, statement, args) {
        console.log('updatePid', args, statement);
        connection.db.transaction(
          (tx) => {
            tx.executeSql(
              statement,
              [args.localId, args.pid],
              reporters.selectSuccess,
              reporters.txError
            );
          },
          reporters.dbError,
          reporters.dbSuccess
        );
      },

      select(connection, reporters, statement, args) {
        console.log('select', args, statement);
        connection.db.transaction(
          (tx) => {
            tx.executeSql(
              statement,
              [args.id],
              reporters.selectSuccess,
              reporters.txError
            );
          },
          reporters.dbError,
          reporters.dbSuccess
        );
      },

      last: (connection, reporters, statement, args = null) => {
        connection.db.transaction(
          (tx) => {
            tx.executeSql(
              statement,
              null,
              reporters.selectSuccess,
              reporters.txError
            );
          },
          reporters.dbError,
          reporters.dbSuccess
        );
      },
    };

    let connection = this.connection;
    let qStatements = this.statements;
    let qReporters = this.queryReporters;
    let query = qStatements[_key];
    let action = _store[_key];
    let result = action(connection, qReporters, query, _args);
    this.queryStoreData.lastResult = result;
    return result;
  }
}

export { SoundDB };
