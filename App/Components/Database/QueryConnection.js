import React, { Component, createRef } from 'React';
import { SQLite } from 'expo-sqlite';
// import { Connection } from './Connection';


const DbQuery = (params) => {
  let dbSuccess = configQuery(onResult, params.callbackDb);
  let dbError = configQuery(onSuccess, params.callbackDb);
  let txResult = configQuery(onTxResult, params.callbackTx);
  let txError = configQuery(onSuccess, params.callbackDb);


  // PROVIDES ACCESS TO MODIFY DEFAULT QUERY CALLBACK AND
  // ERROR FUNCTIONS WITHOUT REQUIRING IT FOR EACH STATEMENT
  const configQuery = (callbackFn, params) => {
    if (!params) { return callbackFn; }

    if (params.wrapCb) {
      let _preQuery = params.preQuery;
      return () => {
        return _preQuery(callbackFn)
      };
    }
    if (params.returnCb) {
      let _returnCb = params.preQuery;
      return ()=>{
        return callbackFn(_returnCb)
      }
    } else {
      return callbackFn;
    }
  };

  query(query, data, callback, options){
    this.connection.transaction(
      tx => {
        tx.executeSql(
          query,
          data,
          txError,
          this.onError,
        );
      },
      this.onError,
      this.onSuccess,
    )
  }
}


// commmand           QueryStatement                      database    cb
insert(record) {this._transact(statements.insert      , record,  this.txSuccess, this.txError); }
delete(id)     {this._transact(statements.delete      , id,      this.txSuccess, this.txError); }
select(id)     {this._transact(statements.select      , id,      this.txSuccess, this.txError); }
pidUpdate(id)  {this._transact(statements.pidUpdate   , id,      this.txSuccess, this.txError); }
create()       {this._transact(statements.create      , null,    this.txSuccess, this.txError); }
dropTable()    {this._transact(statements.drop        , null,    this.txSuccess, this.txError); }
all()          {this._transact(statements.all         , null,    this.txSuccess, this.txError); }
