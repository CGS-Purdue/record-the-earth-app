import React, { Component } from 'react';

import { Connection } from '../Connection';
import { ConnectionQuery } from '../ConnectionQuery';
import { DBProps } from './Props';

const _config = DBProps.config;
const _schema = DBProps.schema;
const _statements = DBProps.statements;

class SoundDB extends Component {
  constructor(props) {
    super(props);
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

    this.connectionStatus = false;
    this.connection = null;
    this.autoconnect = this.props.autoconnect ? true : false;
    this.onConnected = this.onConnected.bind(this);
    this.queryStore = this.queryStore.bind(this);
    this.insert = this.insert.bind(this);
    this.queryStoreData = {
      results: [],
      lastResult: null,
    };

    this.queryReporters = {
      dbSuccess: (data) => {
        console.log('query transaction completed onSuccessfully');
        if (data) {
          console.log(data);
        }
      },
      txSuccess: (tx, result) => {
        console.log('tx resultset', tx, result);
        this.queryStoreData.results.push(result.rows);
        console.log(this.queryStoreData.results.rows);
      },

      insertSuccess: (tx, result) => {
        this.queryStoreData.lastResult = result;
        this.queryStoreData.insertId = result.insertId;
        console.log(
          [
            ['Insert Success:'],
            ['(', 'id:', result.insertId].join(''),
            ['rowsAffected:', result.rowsAffected, ')'].join(''),
          ].join(' ')
        );
        return result;
      },

      selectSuccess: (tx, result) => {
        console.log('Selected', tx, result);
        if (result.rows.length > 0) {
          this.queryStoreData.results.push(result.rows);
          console.log(this.queryStoreData.results);
        }
        return result.rows;
      },

      dbError: (tx, err) => {
        console.log('error', tx, err);
      },
      txError: (tx, err) => {
        console.log(tx, err);
      },
    };

    this.setConnection(this.config, this.onConnected);
  }

  onComponentDidMount() {
    console.log('[SoundDB] mounted');
    this.setConnection();
  }

  getConnection() {
    return this.connection;
  }

  setConnection(config) {
    console.log('[SoundDB] setting connection');
    this.connection = new Connection({
      name: config.name,
      version: config.version,
      description: config.description,
      size: config.size,
      onConnect: this.onConnected,
    });

    // Wait for connection to be set before attempting
    // to auto conect
    if (this.autoconnect) {
      console.log('[SoundDB] autoconnect');
      this.initConnection();
    }
  }

  initConnection() {
    console.log('[SoundDB] initConnection');
    this.connectionStatus = 'connecting';
    this.connection.connect();
  }

  onConnected(conn) {
    console.log('[SoundDB] connected', conn);
    this.connectionStatus = 'connected';
    this.existsOrCreate();
  }

  onSuccess(tx, result) {
    console.log(tx, result);
    this.setState({ data: result.rows._array });
  }

  onError(tx, error) {
    console.log(error);
  }

  existsOrCreate() {
    console.log('existsOrCreate', this);
    this.queryStore('create');
  }

  insert(args) {
    console.log('checkExists');
    let exists = this.queryStore('checkExists', args);
    console.log('checkExists result', exists);

    // if (exists){ return false; }
    // let selectid = this.queryStore('select', args);
    // let inserted = this.queryStore('insert', args);
  }

  getAll() {
    let result = this.queryStore('all');
    console.log('get all local soundcape', result);
    // this.setState({testdata: result});
    return result;
  }

  select() {
    let result = this.queryStore('select');
    console.log('select local soundcape', result);
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

      all: (connection, reporters, statement, args = null) => {
        console.log('all', connection, reporters, statement);
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

      checkExists: (connection, reporters, statement, args) => {
        const dbSuccess = (data) => {
          console.log('query successfu', data);
        };
        const dbError = (tx, err) => {
          console.log('query error ', tx, err);
        };
        const txSuccess = (tx, result) => {
          console.log('tx sucess', tx, result.rows);
        };
        const txError = (tx, error) => {
          console.log('tx error', tx, error);
        };
        const _filename = args.filename;
        let exists = connection.db.transaction(
          (tx) => {
            console.log('SELECT * FROM Soundscapes WHERE filename = ? ;', [
              _filename,
            ]);
            tx.executeSql(
              'SELECT * FROM Soundscapes WHERE filename = ? ;',
              [_filename],
              txSuccess,
              txError
            );
          },
          dbError,
          dbSuccess
        );
        console.log('end check exists', exists);
      },

      insert: (connection, reporters, statement, args) => {
        const dbSuccess = (data) => {
          console.log('query successfu', data);
        };
        const dbError = (tx, err) => {
          console.log('query error ', tx, err);
        };
        const txSuccess = (tx, result) => {
          console.log('tx sucess', tx, result.rows);
        };
        const txError = (tx, error) => {
          console.log('tx error', tx, error);
        };
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

            if (recordExists) {
              return false;
            } else {
              tx.executeSql(statement, row, txSuccess, txError);
            }
          },
          reporters.dbError,
          reporters.dbSuccess
        );
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
