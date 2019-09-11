import React, { Component, createRef } from 'React';
import { SQLite } from 'expo-sqlite';
  state: {
    isConnected : false,
    isError : false,
  },

pen() {
  let db = connectDb(this.config);
  this.setState({db});
  return db;
}


onConnect(cb) {
  return cb();
}

class Connection {
  constructor(props) {
    super(props);
    autoconnect = false;
    connection: null,
    config = {
      name: null,
      version: null,
      description: null,
      size: null,
    }
    this.state = {
      connected: false,
      isConnected : false,
      isError : false,
    };
  }
  connect(){
    const config = this.config;

  try {
    let db = SQLite.openDatabase(config.name, config.version, config.description, config.size);
  }
  catch (e) {
    console.log('error', error);
    this.setState({
      connected: false,
      connectionError: error
    })
  } finally {
      if (this.connection) {
        this.setState({connected: true});
      }
      this.prob.connection = db;
    }
  }

    disconnect() {


    if (this.db === undef
      ined) {
      return Promise.reject("Database was not open; unable to close.");
    }

    return this.db.close().then(status => {
      console.log("[db] Database closed.");
      this.db = undefined;
    });

    }


  }



export { Connection }
