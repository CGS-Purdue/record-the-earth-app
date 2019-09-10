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

    this.schema = {
      id: {
        type: 'integer',
        info: 'primary_key',
      },
      key: {
        type: 'string',
        info: 'meta-property-key-name',
      },
      value: {
        type: 'string',
        info: 'meta-property-key-value',
      },
      lastUpdated: {
        type: 'date',
        info: 'date entry was updated',
      },
    };

    this.statements = {
      create: `CREATE TABLE
        IF NOT EXISTS Meta (
          id integer primary key autoincrement,
          key text,
          value text,
          lastUpdated date );`,
      insert: `INSERT
        INTO Meta (
          key,
          value,
          lastUpdated)
         VALUES (?);`,
      insertMany: `INSERT
        INTO Meta (
          key,
          value,
          date )
        VALUES (?);`,
      select: `SELECT *
          FROM Meta
          WHERE key = ?
          LIMIT 1;`,
      all: `SELECT * FROM Meta;`,
    };
  }

  onSuccess(tx, result) {
    this.setState({data: result.rows._array});
  }

  onError(tx, error) {
    console.log(tx, error);
  }
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
