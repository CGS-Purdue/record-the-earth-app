import React, { Component } from 'React';
import { connectDb } from '../DBConnect';
import { getDbConfig } from '../DBConfig';


class CheckDB extends Component {
  constructor() {
    this.config = getDbConfig();
    this.db = this.getDbConnection(this.config);

    this.state = {
      isConnected : false,
      isError: false,
    };

    this.tablename = 'SystemCheck';

    this.statements = {
      create: `CREATE TABLE
        IF NOT EXISTS SystemCheck (
          id integer primary key autoincrement,
          date);`,
      insert: `INSERT
        INTO SystemCheck (
          date
        ) VALUES (?);`,
      select: `SELECT *
        FROM SystemCheck
        ORDER BY id
        DESC LIMIT 1`,
    };
  }

  onSuccess(tx, result) {
    this.setState({data: result.rows._array});
  };

  onError(tx, error) {
    console.log(error);
  };

  getDbConnection(config){
    let _db = connectDb(config);
    this.setState({ isConnected: true });
    return _db;
  };

  create(){
    this.db.transaction(
      tx => {

    schema: {
      id: {
        type: 'integer',
        info: 'primarykey',
      },
      datetime: {
        type: 'text',
        info: 'recording datetime',
      },
      path: {
        type: 'text',
        info: 'sounds file path',
      },
      filename: {
        type: 'text',
        info: 'sound file name',
      },
      description: {
        type: 'text',
        info: 'survey description',
      },
      duration: {
        type: 'text',
        info: 'recording length length',
      },
      location: {
        type: 'not',
        info: 'recording latlong',
      },
      emotion: {
        type: 'text',
        info: ' survey emo tags',
      },
      biophony: {
        type: 'text',
        info: 'survey bio tags',
      },
      geophony: {
        type: 'text',
        info: 'survey geo tags',
      },
      anthrophony: {
        type: 'text',
        info: 'survey man tags',
      },
      cultural: {
        type: 'text',
        info: 'survey culture tags',
      },
      pid: {
        type: 'text',
        info: 'id from recordtheearth website',
104 file changes in working directory
View changes
commit:9dead4
WIP on master    tx.executeSql(
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
  };
}

export { CheckDB }
