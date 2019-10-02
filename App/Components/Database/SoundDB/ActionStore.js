import React, { Component } from 'react';

import { Connection } from '../Connection';
import { ConnectionQuery } from '../ConnectionQuery';
import { DBProps } from './Props';

const _config = DBProps.config;
const _schema = DBProps.schema;
const _statements = DBProps.statements;

class SoundDBActions extends Component {

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

  // TEMPLATE ACTIONS

  exists(){
    console.log('exists or create soundcape');
    this.queryStore('create');
  }

  // TEMPLATE ACTIONS
  insert(args){
    console.log('insert local soundcape');
    this.queryStore('insert', args);
  }

  getAll(){
    let result = this.queryStore('all');
    console.log('get all local soundcape', result);
    this.setState({testdata: result});
    return result;
  }

  _resetDb(){
    console.log('get all local soundcape', result);
    // todo: cache a backup before doing this
    // ${FileSystem.documentDirectory}/SQLite/${name}
    this.queryStore('drop');
    this.queryStore('create');
  }




 fconst) {= () => {
  let _store = {
   create: (connection, reporters, statement, args = null) => {
        console.log('create', reporters);
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


    drop:(connection, reporters, statement, args = null) => {
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

  all:(connection, reporters, statement, args = null) => {
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
      );
  },

  insert:(connection, reporters, statement, args) => {
          console.log(this, connection);
          console.log(this.connection);

          connection.db.transaction(
          tx => {
            console.log('args', args);
            console.log('statement', statement);
            tx.executeSql(
              statement,
              args,
              reporters.insertSuccess,
              reporters.txError,
            );
          },
          reporters.dbError,
          reporters.dbSuccess,
        );
    },


    last:(connection, reporters, statement, args = null) => {
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
    },
  }

  const ActionStore = (key) =>{
    let timestamp = new Date();
    let _connection = this.connection;
    let _statements = this.statements;
    let _arguments = _statements._arguments;
    let _reporters = this.queryReporters;
    let resultData = this.queryStoreData;
    let result =  _store[key](_connection, _reporters, _statements[key], args);
    // console.log('query\n\n',_statements[key], _arguments[key], args);
    // console.log('result', result, this);
    return prepared_action;
  }
}

export { SoundDB, ActionStore, TxManager }
