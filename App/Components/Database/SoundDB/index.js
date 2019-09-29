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
    this.statements =  _statements;
    this.state = {
      isConnecting: false,
      isConnected : false,
      isError: false,
      isLoaded: false,
      dataStore: false,
      connected: false,
      connectionStatus: 'disconnected',
    };
    this.connectionStatus = false;
    this.connection = null;
    this.autoconnect = this.props.autoconnect ? true : false;
    // this.setConnection = this.setConnection.bind(this);
    // this.connect = this.connect.bind(this);
    this.onConnected = this.onConnected.bind(this);
    // this.onError = this.onError.bind(this);
    // this.onSuccess = this.onSuccess.bind(this);
    this.queryStore = this.queryStore.bind(this);
    this.insert = this.insert.bind(this);
    // this.onConnect = this.onConnect.bind(this);
    // this.onUpgradeVersion = this.onUpgradeVersion.bind(this);
    // this.setConfig = this.setConfig.bind(this);
    // this._transact = this._transact.bind(this);
    // this.db = SQLite.openDatabase(_db_name, _db_ver, _db_desc, _db_size);
    this.queryStoreData = false;

    this.queryReporters = {
      dbSuccess: (data) => {
        console.log('query transaction completed onSuccessfully');
        if (data){ console.log(data); }
      },
      txSuccess: (tx, result) => {
        console.log('tx resultset', tx, result);
      },
      // { insertId, rowsAffected, rows: { length, item(), _array, }, }
      insertSuccess: (tx, result) => {
        console.log(
          [
            ['Insert Success:'],
            ['(','id:', result.insertId].join(''),
            ['rowsAffected:', result.rowsAffected,')'].join(''),
          ].join(' '),
        );
      },
      selectSuccess: (tx, result) => {
        console.log('Selected', tx, result);
        this.queryStoreData.all = result;
        return result;
      },
      dbError: (tx, err) => { console.log('error', tx, err); },
      txError: (tx, err ) => { console.log(tx, err); },
    };

    this.setConnection(this.config, this.onConnected);
  }

  getConnection(){
    return this.connection;
  }

  setConnection(config) {
    console.log('setting connection');
    this.connection = new Connection({
      name: config.name,
      version : config.version,
      description : config.description,
      size : config.size,
      onConnect: this.onConnected,
    });

    if (this.autoconnect) {
      this.connection.connect();
    }
  }

  onConnected(conn) {
    console.log('\n\nconnected\n\n' ,conn);
    this.connectionStatus = 'connected';
    this.existsOrCreate();
  }

  connect(){
    console.log('conecting');
    console.log(this.connection);
    this.connection.connect();
    this.connectionStatus = 'connecting';
  }

  onComponentDidMount () {
    console.log('mounted');
    this.setConnection();
    if (this.autoconnect) {
      this.connection.connect();
    }
  }

  onSuccess(tx, result) {
    console.log(tx, result);
    this.setState({data: result.rows._array});
  }

  onError(tx, error) {
    console.log(error);
  }

  existsOrCreate(){
    console.log('existsOrCreate', this);
    this.queryStore('create');
  }

  insert(args){
    console.log('insert local soundcape');
    this.queryStore('insert', args);
  }

  getAll(){
    let result = this.queryStore('all');
    console.log('get all local soundcape', result);
    // this.setState({testdata: result});
    return result;
  }

  _resetDb(){
    // todo: cache a backup before doing this
    // ${FileSystem.documentDirectory}/SQLite/${name}
    this.queryStore('drop');
    this.queryStore('create');
  }
  queryStore(key, args) {
    let _store = {
      create: (connection, reporters, statement, args = null) => {
        console.log('create', reporters);
        connection.db.transaction(
          tx => {
            tx.executeSql(
              statement,
              null,
              reporters.txSuccess,
              reporters.txError,
            );
          },
          reporters.dbError,
          reporters.dbSuccess,
        );
      },
      drop: (connection, reporters, statement, args = null) => {
        console.log('drop', reporters);
        connection.db.transaction(
          tx => {
            tx.executeSql(
              statement,
              null,
              reporters.txSuccess,
              reporters.txError,
            );
          },
          reporters.dbError,
          reporters.dbSuccess,
        );
      },
      all: (connection, reporters, statement, args = null) => {
        console.log('all', connection, reporters, statement);
        connection.db.transaction(
          tx => {
            tx.executeSql(
              statement,
              null,
              reporters.selectSuccess,
              reporters.txError,
            );
          },
          reporters.dbError,
          reporters.dbSuccess,
      _create  );
      },
      insert: (connection, reporters, statement, args) => {
          console.log(this, connection);
          console.log(this.connection);
          console.log(args);

          connection.db.transaction(
          tx => {
            console.log('statement', statement, args);
            tx.executeSql(
              statement,
               [ args.datetime,
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
              ],
              reporters.insertSuccess,
              reporters.txError,
            );
          },
          reporters.dbError,
          reporters.dbSuccess,
        );
      },
      last: (connection, reporters, statement, args = null) => {
        connection.db.transaction(
          tx => {
            tx.executeSql(
              statement,
              null,
              reporters.selectSuccess,
              reporters.txError,
            );
          },
          reporters.dbError,
          reporters.dbSuccess,
        );
      },
    };
    let timestamp = new Date();
    let _connection = this.connection;
    let _statements = this.statements;
    let _arguments = _statements._arguments;
    let _reporters = this.queryReporters;
    let resultData = this.queryStoreData;
    let result =  _store[key](_connection, _reporters, _statements[key], args);
    console.log('query\n\n',_statements[key], _arguments[key], args);
    console.log('result', result, this);
    return result;
  }
}


export { SoundDB };
