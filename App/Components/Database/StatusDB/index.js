import React, { Component, createRef } from 'React';
import { DBProps } from './Props';
import { Connection } from '../Connection';
import { ConnectionQuery } from '../ConnectionQuery';

const _config = DBProps.config;
const _schema = DBProps.schema;
const _statements = DBProps.statements;



class StatusDB extends Component {
  constructor(props) {
    super(props)
    this.config = _config;
    this.schema = _schema;
    this.state = {
      isConnected : false,
      isError: false,
    }
    this.statements =  _statements;
    this.connection = null;
    this.autoconnect = this.props.autoconnect ? true : false;
    this.setConnection = this.setConnection.bind(this);
    this.onConnected = this.onConnected.bind(this);
    this.connect = this.connect.bind(this);
    console.log(this);
    this.setConnection(this.config, this.onConnected);

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
  }

  connect(){
    console.log('conecting');
    console.log(this.connection);
    this.connection.connect();
  }

  onComponentDidMount () {
    console.log('mounted');

    this.setConnection();

    if (this.autoconnect) {
      this.connection.connect();
    }
  }


  onSuccess(tx, result) {
    this.setState({data: result.rows._array});
  }

  onError(tx, error) {
    console.log(error);
  }

  dbSuccess(data, options){
    console.log('query transaction completed onSuccessfully');
    console.log('data', data);
    this.querystate.data = data.result.rows._array;
  };

  txSuccess(tx, result, options){
     // { insertId, rowsAffected, rows: { length, item(), _array, }, }
    console.log('resultset', result);
    console.log('tx resultset', result);
    this.querystate.data = result.rows._array;
  }

  txError(tx, error){
    console.log(tx, error);
  }

  checkStatus(){
    this.create();
  }

  create(options){
    this.connection.transaction(
      tx => {
        tx.executeSql(
          this.statements.create,
          null,
          this.onSuccess,
          this.onError
        );
      },
      this.onError,
      this.onSuccess,
    );
  }

  insert() {
    let timestamp = new Date();
    this.db.transaction(
      tx => {
        tx.executeSql(
          this.statements.insert,
          [ timestamp ],
          this.onSuccess,
          this.onError,
        );
      }
    );
  }
  select() {
    this.db.transaction(
      tx => {
        tx.executeSql(
          this.statements.select,
          null,
          this.onSuccess,
          this.onError,
        );
      },
      this.onError,
      this.onSuccess,
    );
  }
}

export { StatusDB }
