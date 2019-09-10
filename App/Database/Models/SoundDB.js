import { SQLite } from 'expo-sqlite';
import React, { Component, createRef } from 'React';
import { connectDb } from '../DBConnect';
import { getDbConfig } from '../DBConfig';
import { DB_CONFIG } from '../../Config/Db';

// The version, description and size arguments are ignored,
// but are accepted by the function for compatibility with the WebSQL specification
// 'Record The Earth in-app database',

const db_config = getDbConfig();
const sounddbref = createRef();

const soundDB = () => {
  this.props = {
    ref: sounddbref,
    config: {
      database_name: DATABASE_NAME,
      database_table: DATABASE_TABLE,
      database_version: DATABASE_VERSION,
      tablename: 'Soundscapes',
      size: null,
    },
    defaults: {
      soundscape: {
        datetime: '',           //01
        path: null,             //02
        filename: null,         //03
        description: null,      //04
        duration: 0,            //05
        location: '0,0',        //06
        emotion: '',            //07
        biophony: '',           //08
        geophony: '',           //09
        anthrophony: '',        //10
        cultural: '',           //11
        pid: null,              //12
        isUploaded: false,      //13
      },
      state: {
        isConnected : false,
        isError : false,
      },
      connection: null,
    },
    messages: {
      upgradeVersion: `Upgrading database from version %s to %s which will destroy all old data`,
    },
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
      },
      isUploaded: {
        type: 'bool',
        info: 'is the file uploaded',
      }
    },
  };

  this.onError = this.onError.bind(this);
  this.setConfig = this.setConfig.bind(this);
  this.onConnect = this.onConnect.bind(this);
  this.onSuccess = this.onSuccess.bind(this);
  this.getConnection = this.getConnection.bind(this);
  this.onUpgradeVersion = this.onUpgradeVersion.bind(this);

  onConnect = (cb) => {
    return cb();
  }

  onSuccess = (tx, result) => {
    this.setState({data: result.rows._array});
  }

  onError = (tx, error) => {
    console.log(tx, error);sounddbref
  }

  getConnection = (config) => {
    let db = connectDb(config);
    this.setState({isConnected: true});
    return db;
  }
  setConfig = (config) => {
    let empty = Object.create(null);
    let _config = Object.assign(empty, this.props.config, config);
    this.props.config = _config;
  }
  onUpgradeVersion = (newVersion, curVersion) => {
    console.log(this.messages.upgradeVersion, curVersion, newVersion);
  }

  let config = this.props.config ;

  // private
  const statements = {
    create: `CREATE TABLE
      IF NOT EXISTS Soundscapes (
        id integer primary key autoincrement,
        datetime text not null,
        path text not null,
        filename text not null,
        description text not null,
        duration text not null,
        location not null,
        emotion text not null,
        biophony text not null,
        geophony text not null,
        anthrophony text not null,
        cultural text not null,
        pid text,
        isUploaded text not null);`,
    drop: `DROP TABLE IF EXISTS Soundscapes;`,
    insert: `INSERT
      INTO Soundscapes (
        anthrophony,
        biophony,
        cultural,
        datetime,
        description,
        duration,
        emotion,
        filename,
        geophony,
        isUploaded
        location,
        path,
        pid)
      VALUES (?);`,
    delete: `DELETE
      FROM Soundscapes
      WHERE id = ?;`,
    select: `SELECT
      id,
      datetime,
      filepath,
      filename,
      description,
      duration,
      location,
      emotion,
      biophony,
      geophony,
      anthrophony,
      cultural,
      pid,
      isuploaded
    FROMT Soundscapes
    WHERE id = ?;`,
    all: `SELECT
      id,
      datetime,
      filepath,
      filename,
      description,
      duration,
      location
    FROM Soundscapes
    SORT BY pid DESC
    LIMIT 20;`,
    pidUpdate: `UPDATE Soundscapes
      SET (rowId, pid, isUploaded)
      VALUES ?
      WHERE id = ?;`,
  };

  let _db_name = this.config.name;
  let _db_version = this.config.version;
  let _db_description = this.config.description;
  let _db_size = this.config.size;


  class SoundDB {
    constructor() {
      this.name = _db_name
      this.version = _db_version;
      this.description = _db_description;
      this.size = _db_size;
      this.db = SQLite.openDatabase(_db_name, _db_version, _db_description, _db_size);
    }

    insert(record) { _transact(statements.insert, record, onSuccess, onError)}
    delete(id)     { _transact(statements.delete, id, onSuccess, onError)}
    select(id)     { _transact(statements.select, id, onSuccess, onError)}
    pidUpdate(id)  { _transact(statements.pidUpdate, id, onSuccess, onError)}
    create()       { _transact(statements.create, null, onSuccess, onError)}
    dropTable()    { _transact(statements.drop, null, onSuccess, onError)}
    all()          { _transact(statements.all, null, onSuccess, onError)}

    _transact = (query, args, onDone, onError) => {
      const txwrap = (_tx_) => {
        return _tx_(statements.all, null, onSuccess, onError)
      }
      this.db.transaction(txwrap(tx.executeSql), txerr, txdone)
      const transactions = (tx_function) => {
        this.db.transaction((tx) => {
          tx.executeSql(callback), this.onError, this.onSuccess
        })
      }
    }
  }

  return SoundDB
}

export { soundDB }
