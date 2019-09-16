import React, { Component } from 'react';

class ConnectionQuery extends Component {
  constructor(props) {
    super(props);
    this.querystate = {
      hasError: false,
      hasResult: false,
      isError: false,
      hasNewResult: false,
      resultCache : [],
      lastError: null,
    };

    // this.dbSuccess = this.onConnect.bind(this);
    // this.dbError = this.onSuccess.bind(this);
    // this.txResult = this.onTxResult.bind(this);
    // this.txError = this.txError.bind(this);
    console.log('query', this);

    // this.setQuery()
  }

  configCb(callbackFn, cbOptions){
    if (!cbOptions) { return callbackFn; }
    if (cbOptions.disabled) {
      return false;
    }

    if (cbOptions.wrapCb) {
      let _preQuery = cbOptions.preQuery;
      return () => { return _preQuery(callbackFn); };
    }

    if (cbOptions.returnCb) {
      let _returnCb = cbOptions.preQuery;
      return ()=>{ return callbackFn(_returnCb); };

    } else {
      return callbackFn(this.querystate);
    }
  }

  // PROVIDES ACCESS TO MODIFY DEFAULT QUERY CALLBACK AND
  // ERROR FUNCTIONS WITHOUT REQUIRING IT FOR EACH STATEMENT
  setQuery(conn, query, args, options){

    // query outline
    this.statement = query;

    // argument count
    this.arguments = args;

    this.options = options;

    console.log('setting query');

    const _db_success = (data, options) => {
      console.log('query transaction completed onSuccessfully');
      console.log('data', data);
      this.querystate.data = data.result.rows._array;
    };

    const _tx_success = (tx, result, options) => {
       // { insertId, rowsAffected, rows: { length, item(), _array, }, }
      console.log('resultset', result);
      console.log('tx resultset', result);
      this.querystate.data = result.rows._array;
    };

    const _db_error = (tx, error) => {
      console.log(tx, error);
    };

    const _tx_error = (tx, error) => {
      console.log(tx, error);
    };

    // insertId,
    // rowsAffected,
    // rows: {
    // length,
    // item(),
    // _array,
    const _tx_result = (tx, data, options) => {
      if (data) {
        if (data.insertId){
           console.log(data.insertId + 'iwas inserted',
           data.insertId,
           data.rowsAffected,
           data.rows,
           data.length,
           data.item,
           data._array,
         );
        }
      }

      console.log('tx resultset', data);
      this.querystate.data = data.rows._array;
      if (this.options.callback){
        return this.options.callback(data);
      }
    };


    let dbSuccess = this.configCb(dbSuccess, options.callbackDb);
    let dbError = this.configCb(dbError, options.callbackDb);
    let txResult = this.configCb(txResult, options.callbackTx);
    let txError = this.configCb(txResult, options.callbackTx);

    this.dbSuccess = dbSuccess;
    this.dbError = dbError;
    this.txResult = txResult;
    this.txError = txError;

    console.log('result');

    const execute = () => {
      conn.transaction(
        tx => {
          tx.executeSql(
            query,
            args,
            txResult,
            txError,
          );
        },
        dbError,
        dbSuccess,
      );
      if (options.callback) {
        return options.callback();
      }
    };

    this.execute = execute;

  }

}

export { ConnectionQuery };
