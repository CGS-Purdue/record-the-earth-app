import React, { createRef } from 'react';
import { Connection } from '../Connection';
import { _dev } from '../../../Utilities/Log';
import { DBProps } from './Props';

const _config = DBProps.config;
const _schema = DBProps.schema;
const _statements = DBProps.statements;
const _ref = createRef();
const LOG_CTX = 'SoundDb';

const _dbSuccess = () => { console.log('query transaction completed onSuccessfully') }
const _onError = (tx, error) => { console.log(error) }
const _txSuccess = (tx, result) => { console.log('tx resultset', result) }
const _dbError = (err) => { console.log('db error', err) }
const _txError = (tx, err) => { console.log('tx err', tx, err) }

class SoundDB extends React.Component {
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
    this._isMounted = false;

    this._selectSuccess = (tx, result) => {
      this.result.data = result;
      _dev(LOG_CTX, 'Selected', result._array);
      return result;
    };

    this._insertSuccess = (tx, result) => {
      _dev(LOG_CTX, 'tx resultset', result);
      this.queryStoreData.lastResult = result;
      this.queryStoreData.insertId = result.insertId;
      _dev(LOG_CTX,  [
        'Insert Success:',
        ['( id:', result.insertId].join(''),
        ['rowsAffected:', result.rowsAffected, ')'].join(''),
      ].join(' '));
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
    this._isMounted = true;
    _dev(LOG_CTX, 'did mount');
    this.setConnection(this.config, null);
  }

  componentWillMount() {
    this._isMounted = false;
  }

  getConnection() {
    return this.connection;
  }

  setConnection(config, onConnected) {
    if (typeof this.connection === 'object' && this.connectionStatus === 'connected') {
      _dev(LOG_CTX, 'already Connected');
      return false;
    }
    _dev(LOG_CTX, 'setting connection');
    this.connection = new Connection({
      name: config.name,
      version: config.version,
      description: config.description,
      size: config.size,
      onConnect: onConnected,
    });

    // Wait for connection to be set before attempting to auto conect
    if (this.autoconnect) {
      _dev(LOG_CTX, 'autoconnect');
      this.initConnection();
    }
  }

  initConnection() {
    if (this.connectionStatus === 'connected') {
      _dev(LOG_CTX, 'already Connected');
      return false;
    }
    _dev(LOG_CTX, 'initConnection');
    this.connectionStatus = 'connecting';
    this.connection.connect();
  }

  _onConnected(conn) {
    _dev(LOG_CTX, 'connected');
    this.connectionStatus = 'connected';
    this.existsOrCreate();
  }


  existsOrCreate() {
    _dev(LOG_CTX, 'existsOrCreate');
    this.queryStore('create');
  }

  insert(args) {
    _dev(LOG_CTX, 'insert');
    let exists = this.queryStore('checkExists', args);
    _dev(LOG_CTX, 'checkExists result', exists);
    if (exists){ return false; }
    // let selectid = this.queryStore('select', args);
    let inserted = this.queryStore('insert', args);
    _dev(LOG_CTX, 'checkExists result', inserted);
  }

  getAll() {
    let result = this.queryStore('all');
    _dev(LOG_CTX, 'get all local soundcape', result);
    // this.setState({testdata: result});
    return result;
  }

  select() {
    let result = this.queryStore('select');
    _dev(LOG_CTX, 'select local soundcape', result);
    // this.setState({testdata: result});
    return result;
  }



  queryStore(_key, _args) {
    let _store = {
      create: (connection, reporters, statement, args = null) => {
        _dev(LOG_CTX, 'Checking for existing database');
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
        _dev(LOG_CTX, '[SoundDB] getAll', [connection, reporters, statement, args]);
        const dbSuccess = () => {
          _dev(LOG_CTX, '[SoundDB] getAll successful', [connection, reporters, statement, args]);
        };
        const dbError = (tx, err) => { console.log('[SoundDB] getAll error ', tx, err); };
        let all_result = [];
        var all_items = connection.db.transaction(
          (tx) => {
            tx.executeSql(statement, null,
              (tx1, result) => {
                _dev(LOG_CTX, '[SoundDB] getAll results', result);
                if (result.rows.length > 0) {
                  all_result = result.rows;
                  this.queryStoreData.results.push(result.rows);
                  _dev(LOG_CTX, this.queryStoreData.results);
                }
                return result.rows;
              },
              (tx2, err) => { _dev(LOG_CTX, 'tx err', tx2, err); }
            )
           }, dbError, dbSuccess );
           _dev(LOG_CTX, 'all_items', all_items);
           _dev(LOG_CTX, 'all_result', all_result);
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
          tx.executeSql(
            'SELECT * FROM Soundscapes WHERE filename = ? ;',
            [_filename],
            txSuccess,
            txError
          );
          }, dbError, dbSuccess);
          _dev(LOG_CTX, 'check record already exists', exists);
      },

      insert: (connection, reporters, statement, args) => {
        // const dbSuccess = (data) => { console.log('query successful', data); };
        // const dbError = (tx, err) => { console.log('query error ', tx, err); };
        // const txSuccess = (tx, result) => { console.log('insert tx sucess', tx, result); };
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
          connection.db.transaction((tx) => {
            tx.executeSql(
              'SELECT * FROM Soundscapes WHERE filename = ? ;',
              [_filename],
              (tx1, result) => {
                if (result.rows.length > 0) {
                  _dev(LOG_CTX, 'Record Exists', result.rows);
                  recordExists = true;
                }
              },
              txError
            );

            _dev(LOG_CTX, 'recordExists' , recordExists);
            if (recordExists) { return false; }
            else {
              tx.executeSql(
                statement,
                row,
                (_tx, _result) => {
                insert_result = _result;
                _dev(LOG_CTX, 'insert tx sucess', _tx, _result);
              }, txError )
            }
          },
          reporters.dbError,
          reporters.dbSuccess )
        } catch (e) {
          console.log(e);
        } finally {
          _dev(LOG_CTX, 'insert_result', insert_result);
        }
      },

      updatePid(connection, reporters, statement, args) {
        _dev(LOG_CTX, 'updatePid', args, statement);
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
        _dev(LOG_CTX, 'select', args, statement);
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
