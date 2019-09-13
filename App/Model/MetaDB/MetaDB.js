import React, { Component } from 'React';
import { connectDb } from '../DBConnect';
import { getDbConfig } from '../DBConfig';


class MetaDB  extends Component {
  constructor() {
    this.config = getDbConfig();
    this.db = this.getDbConnection(this.config);
    this.tablename = 'Meta';
    this.state = {
      isConnected : false,
      isError : false,
    };



  getDbConnection(config){
    let _db = connectDb(config);
    this.setState({ isConnected: true })
    return _db;
  }

  create() {
    this.db.transaction(
      tx => {
        tx.executeSql(
          this.statements.create,
          null,
          this.onSuccess,
          this.onError,
        );
      },
      this.onError,
      this.onSuccess,
    );
  }

  insert(key, val) {
    let timestamp = new Date();
      this.db.transaction(
        tx => {
          tx.executeSql(
            this.statements.insert,
            [key, val, timestamp],
            this.onSuccess,
            this.onError,
          );
        },
        this.onError,
        this.onSuccess,
      );
    }

  insertMany(keyData) {
    let timestamp = new Date();
    let rows = Object.entries(keyData);
    let rowsData = rows.map(function (item, i, arr) {
      return [item[0], item[1], timestamp];
    });

    this.db.transaction(
      tx => {
        tx.executeSql(
          this.statements.insertMany,
          rowsData,
          this.onSuccess,
          this.onError,
        );
      },
      this.onError,
      this.onSuccess,
    );
  }

  select(key){
    this.db.transaction(
      tx => {
        tx.executeSql(
          this.statements.select,
          [ key ],
          this.onSuccess,
          this.onError,
        );
      },
      this.onError,
      this.onSuccess,
    );
  }


  all() {
    this.db.transaction(
      tx => {
        tx.executeSql(
          this.statements.all,
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

export { MetaDB }
