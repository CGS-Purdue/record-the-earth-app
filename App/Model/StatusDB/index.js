import React, { Component, createRef } from 'React';
import { ConfigName, ConfigDescription, ConfigVersion, ConfigSize } from './Props/StatusConfig';
import { StatusStatements } from './Props/StatusStatements';
import { StatusSchema } from './Props/StatusSchema';


class StatusDB extends Component {
  constructor() {
    this.config.name = ConfigName;
    this.config.description = ConfigDescription;
    this.config.version = ConfigVersion;
    this.config.size = ConfigSize;

    this.connection = this.getDbConnection(this.config);
    this.schema = StatusSchema;
    this.state = {
      isConnected : false,
      isError: false,
    };

    this.tablename = 'SystemCheck';
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
  };
}

export { CheckDB }
