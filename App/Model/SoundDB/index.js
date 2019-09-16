import { SQLite } from 'expo-sqlite';

import React, { Component, createRef } from 'React';

import { Connection } from '../../../Database/Connection';
import { Database } from '../../Database/Model/SoundDB';
import { SoundscapeDBConfig as DBConfig } from './Props/SoundscapeConfig';
import { SoundscapeSchema } from './Props/SoundscapeSchema';
import { StatusStatements } from './Props/SoundscapeStatements';

const _config = DBConfig;
const _db_name = _config.name;
const _db_size = _config.size;
const _db_ver = _config.version;
const _db_desc = _config.description;
const dbRef = createRef;

class SoundDB extends Component {
  constructor(props) {
    super(props);

    this.ref = dbRef;
    this.config = {
      name: DBConfig.name,
      version: DBConfig.version,
      description: DBConfig.description,
      size: DBConfig.size,
    };
    this.connection = Connection;

    this.db = SQLite.openDatabase(_db_name, _db_ver, _db_desc, _db_size);
    this.onConnect = this.onConnect.bind(this);
    this.onUpgradeVersion = this.onUpgradeVersion.bind(this);
    this.setConfig = this.setConfig.bind(this);
    this._transact = this._transact.bind(this);
  }

  onSuccess(tx, result) {
    this.setState({data: result.rows._array});
  }

  onError(tx, error) {
    console.log(error);
  }


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

}


export { SoundDB };
