import React, { Component, createRef } from 'React';
import { SQLite } from 'expo-sqlite';
import { Connection } from './Connection';


class ConnectionQueryInterface {

let txerr = configHandle( onSuccess(tx, result){
    this.setState({data: result.rows._array});
  }

  let dbSuccess = configHandle(this.onTxResult, _array, callback)
  let dbError = configHandle(this.onSuccess, _array)
  let txResult = configHandle(this.onTxResult, _array, callback)
  let txError = configHandle(this.onSuccess, _array)

  send(query, fata, callback, options) {
    this.db.transaction(
      tx => {
        tx.executeSql(
          query,
          fata,
          ,txError
          this.onError,
        );
      },
      this.onError,
      this.onSuccess,
    )
  }

 name: DB_CONFIG.DATABASE_NAME,
 version: DB_CONFIG.DATABASE_TABLE,
 description: DB_CONFIG.DATABASE_VERSION,
 size: null,
