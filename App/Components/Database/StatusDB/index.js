import React, { Component, createRef, useState } from 'react';

import { Connection } from '../Connection';
import { ConnectionQuery } from '../ConnectionQuery';
import { DBProps } from './Props';

const _config = DBProps.config;
const _schema = DBProps.schema;
const _statements = DBProps.statements;
const _ref = createRef();

class StatusDB extends Component {
  constructor(props) {
    super(props);
    this.ref = _ref;
    this.config = _config;
    this.schema = _schema;
    this.statements =  _statements;
    this.state = {
      isConnected : false,
      isError: false,
    };
    this.connectionStatus = {
      isConnecting: false,
      isLoaded: false,
      connected: false,
    };

    this.connection = null;
    this.setConnection = this.setConnection.bind(this);

    this.autoconnect = this.props.autoconnect ? true : false;
    this.connect = this.connect.bind(this);

    this.onConnected = this.onConnected.bind(this);
    this.onError = this.onError.bind(this);
    this.onSuccess = this.onSuccess.bind(this);

    this.queryStore = this.queryStore.bind(this);


    this.queryReporters = {
      dbSuccess: (data) => {
        console.log('query transaction completed onSuccessfully');
        if (data){ console.log(data); }
      },
      txSuccess: (tx, result) => {
        // { insertId, rowsAffected, rows: { length, item(), _array, }, }
        console.log('tx resultset', tx, result);
      },
      insertSuccess: (tx, result) => {
        console.log(
          'Insert Successful',
          `id: ${result.insertId}, rowsAffected: ${result.rowsAffected}`
        );
      },
      selectSuccess: (tx, result) => {
        this.result.data = result;
        console.log('Selected', result._array);
        return result;
      },
      dbError: (tx, err) => { console.log('error', tx, err); },
      txError: (tx, err ) => { console.log(tx, err); },
    };

    this.setConnection(this.config, this.onConnected);
  }

  setConnection(config) {
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
    // console.log('\n\nconnected\n\n' ,conn);
    this.connectionStatus.isConnecting = false;
    this.connectionStatus.connected = true;
    this.checkStatus();
  }

  connect(){
    // console.log(this.connection);
    this.connection.connect();
    this.connectionStatus.isConnecting = true;
  }

  onComponentDidMount () {
    // console.log('mounted');
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

  checkStatus(){
    // console.log('checkStatus', this);
    this.queryStore('create');
    this.queryStore('insert');
    this.queryStore('last');
  }

  queryStore(key, args) {

    let _store = {
      create: (connection, reporters, statement) => {
        connection.db.transaction(
          tx => {
            tx.executeSql(
              statement,
              null,
              null,
              reporters.txError,
            );
          },
          reporters.dbError,
          null,
        );
      },
      insert: (connection, reporters, statement, args = null) => {
        let timestamp = new Date();
        connection.db.transaction(
          tx => {
            tx.executeSql(
              statement,
              [ timestamp ],
              reporters.insertSuccess,
              reporters.txError,
            );
          }
        );
      },
      last: (connection, reporters, statement, args = null) => {
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
    };
    let timestamp = new Date();
    let _connection = this.connection;
    let _statements = this.statements;
    let _arguments = _statements._arguments;
    let _reporters = this.queryReporters;
    let resultData = this.queryStoreData;
    let result =  _store[key](_connection, _reporters, _statements[key], args);
    // console.log('query\n\n',_statements[key], _arguments[key], args);
    console.log('result', result, this);
    return result;
  }
}

export { StatusDB };
