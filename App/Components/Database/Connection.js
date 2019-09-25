import { SQLite } from 'expo-sqlite';
import { Component } from 'react';
// import { ConnectionQuery } from './ConnectionQuery';

class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      isConnected : false,
      isError : false,
    };
    this.connectionStatus = 'disconnected';
    this.connectionError = false;
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    // this.configQuery = this.configQuery.bind(this);
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

      if (this.props.onConnect) {
        console.log('Getting Database Connection;');
        console.log('Connection Details: ', _dbConn);
        this.props.onConnect(this);
      }
    }

    catch (error) {
      console.log('error', error);
      this.connectionStatus = false;
      this.connectionError = error;
    } finally {
      console.log('connection status changed');
    }
  }

  onSuccess(tx, result) {
    console.log(tx, result);
    this.setState({data: result.rows._array});
  }

  onError(tx, error) {
    console.log(error);
  }

  dbSuccess(data, options){
    console.log('query transaction completed onSuccessfully');
    console.log('data', data);
    this.querystate.data = data.result.rows._array;
  }

  txSuccess(tx, result, options){
     // { insertId, rowsAffected, rows: { length, item(), _array, }, }
    console.log('result set', result);
    console.log('tx resultset', result);
    this.querystate.data = result.rows._array;
  }
  txError(tx, error){
    console.log(tx, error);
  }

  disconnect() {
    if (this.connection === 'undefined') {
      return Promise.reject('Database was not open; unable to close.');
    }
    return this.connection.close().then(status => {
      console.log('[connection] Database closed.');
      this.connection = undefined;
    });
  }
  //
  // configQuery(statement, args, options) {
  //   return new ConnectionQuery({
  //     statement: statement,
  //     args: args,
  //     options: options
  //   });
  // }
}



export { Connection };
