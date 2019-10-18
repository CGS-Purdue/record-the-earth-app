import React, { Component } from 'react';
import * as SQLite from 'expo-sqlite';
// import { ConnectionQuery } from './ConnectionQuery';

class Connection extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   connected: false,
    //   isConnected: false,
    //   isError: false,
    //   connectionStatus: 'disconnected',
    //   connectionError: false,
    // };

    this.connectionStatus = 'disconnected';
    this.connectionError = false;
    this.connect = this.connect.bind(this);
    this.exitOnResult = false;
    this._isMounted = false;
    this.disconnect = this.disconnect.bind(this);
    this.transaction = false;
  }

  connect() {
    let _name = this.props.name;
    let _version = this.props.version;
    let _description = this.props.description;
    let _size = this.props.size;
    try {
      const _dbConn = SQLite.openDatabase(_name, _version, _description, _size);
      this.db = _dbConn;

      if (this.db) {
        this.connectionStatus = 'connected';
      }


    } catch (error) {
      this.connectionStatus = false;
      this.connectionError = error;
    } finally {
      if (this.props.onConnect) {
        this.props.onConnect(this.db);
        console.log('on connect', this.connectionStatus);
      }
      console.log('connection status changed', this.connectionStatus);
    }
  }

  onSuccess(tx, result) {
    console.log('onSuccess', tx, result);
    this.resultCache.lastResult = result.rows._array;
    this.resultCache.results.push(result);
    if (this.exitOnResult) {
      this.disconnect();
    }
  }

  disconnect() {
    if (this.connection === 'undefined') {
      return Promise.reject('Database was not open; unable to close.');
    }
    return this.connection.close().then((status) => {
      console.log('[connection] Database closed.', status);
      this.connection = undefined;
    });
  }

  // onError(tx, error) {
  //   console.log('onError', tx, error);
  // }
  //
  // dbSuccess(data, options) {
  //   console.log('query transaction success', data, options);
  //   this.querystate.data = data.result.rows._array;
  // }
  //
  // txSuccess(tx, result, options) {
  //   // { insertId, rowsAffected, rows: { length, item(), _array, }, }
  //   console.log('result set', tx, result, options);
  //   this.querystate.data = result.rows._array;
  // }
  //
  // txError(tx, error) {
  //   console.log(tx, error);
  // }

  // configQuery(statement, args, options) {
  //   return new ConnectionQuery({
  //     statement: statement,
  //     args: args,
  //     options: options
  //   });
  // }
}

export { Connection };
