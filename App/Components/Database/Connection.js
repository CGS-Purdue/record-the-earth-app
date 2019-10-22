import React from 'react';
import * as SQLite from 'expo-sqlite';
import { _dev } from '../../Utilities/Log';
// import { ConnectionQuery } from './ConnectionQuery';

const LOG_CTX = 'Database/Connection';

class Connection extends React.Component {
  constructor(props) {
    super(props);
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
        _dev(LOG_CTX, 'on connect',  this.connectionStatus);
      }
      _dev(LOG_CTX, 'connection status changed', this.connectionStatus);
    }
  }

  disconnect() {
    if (this.connection === 'undefined') {
      return Promise.reject('Database was not open; unable to close.');
    }
    return this.connection.close().then((status) => {
      _dev(LOG_CTX, '[connection] Database closed.', status);
      this.connection = undefined;
    });
  }
}

export { Connection };
