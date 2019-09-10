import SQLite from "react-native-sqlite-storage";
import { connectDb } from '../DBConnect';
import { getDbConfig } from '../getDbConfig';
import { CheckDB } from  './Models/CheckDB';
import { MetaDB } from './Models/MetaDB';
import { SoundDB } from './Models/SoundDB';



class DbMan {
  constructor() {
    this.config = getDbConfig();
    this.db = null;
    this.state = {
      isConnected: false,
      isError: false,
    };
  }

  open() {
    let db = connectDb(this.config);
    this.setState({db});
    return db;
  }

  close() {
    if (this.db === undefined) {
      return Promise.reject("Database was not open; unable to close.");
    }

    return this.db.close().then(status => {
      console.log("[db] Database closed.");
      this.db = undefined;
    });
  }

  getVersion(database) {
    return database
        .executeSql(`SELECT * FROM Meta WHERE key = 'version';`)
        .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
            const version = results.rows.item(0).version;
            return version;
        }
        else {
            return 0;
        }
    })
    .catch(error => {
      console.log(`No version set. Returning 0. Details: ${error}`);
      return 0;
    });
  }

  upgrade(database) {
    let dbVersion = 0;
    console.log("Beginning database updates...");
    return database
      .transaction(this.createTables)
      .then(() => {
        return this.getDatabaseVersion(database);
      })
      .then(version => {
        dbVersion = version;
        console.log("Current database version is: " + dbVersion);
        if (dbVersion < 1) {  }
        return;
      })
      .then(() => {
        if (dbVersion < 2) { }
        return;
      });
  }

  init () {
    const dropAllTables = false;
    let checktbl =  CheckDB;
    let metatbl = MetaDB;
    let sndtbl = SoundDB;

    // if (dropAllTables) {
    //    transaction.executeSql("DROP TABLE IF EXISTS List;");
    //    transaction.executeSql("DROP TABLE IF EXISTS ListItem;");
    //    transaction.executeSql("DROP TABLE IF EXISTS Version;");
    // }      pid: null,              //12
    // //     transaction.executeSql(`
    //   CREATE TABLE IF NOT EXISTS List(
    //     list_id INTEGER PRIMARY KEY NOT NULL,
    //     title TEXT
    //   );
    // `);
    //     transaction.executeSql(`
    //   CREATE TABLE IF NOT EXISTS ListItem(
    //     item_id INTEGER PRIMARY KEY NOT NULL,
    //     list_id INTEGER,
    //     text TEXT,
    //     done INTEGER DEFAULT 0,
    //     FOREIGN KEY ( list_id ) REFERENCES List ( list_id )
    //   );
    // `);
    //     transaction.executeSql(`
    //   CREATE TABLE IF NOT EXISTS Version(
    //     version_id INTEGER PRIMARY KEY NOT NULL,
    //     version INTEGER
    //   );
    // `);
    // }
  }

  getDatabase() {
    if (this.db !== undefined) {
      return Promise.resolve(this.db);
    }
    return this.open();
  }
}


export const db = new DbMan();
