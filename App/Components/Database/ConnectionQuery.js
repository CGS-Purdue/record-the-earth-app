import React, { Component } from 'react';

class ConnectionQuery extends Component {
  constructor(props) {
    if (!this.props.cbOptions) {
      return this.callbackFn;
    }

    if (this.props.cbOptions.disabled) {
      return false;
    }

    if (this.props.cbOptions.wrapCb) {
      let _preQuery = this.props.cbOptions.preQuery;
      return () => {
        return _preQuery(this.callbackFn);
      };
    }

    if (this.props.cbOptions.returnCb) {
      let _returnCb = this.props.cbOptions.preQuery;
      return () => {
        return this.callbackFn(_returnCb);
      };
    } else {
      return this.callbackFn(this.querystate);
    }
  }

  // PROVIDES ACCESS TO MODIFY DEFAULT QUERY CALLBACK AND
  // ERROR FUNCTIONS WITHOUT REQUIRING IT FOR EACH STATEMENT
  setQuery(conn, query, args, options) {
    // query outline
    this.statement = query;

    // argument count
    this.arguments = args;

    this.options = options;
    const _db_success = (data, options) => { console.log('transaction completed successfully'); this.querystate.data = data.result.rows._array; }; const _db_error = (tx, error) => {
       console.log('db_error', tx, error);
    };

    const _tx_success = (tx, result, options) => {
      console.log('tx_success', tx, result);
      this.querystate.data = result.rows._array;
    };

    const _tx_error = (tx, error) => {
      console.log(tx, error);
    };

    const _tx_result = (tx, data, options) => {
      if (data) {
        if (data.insertId) {
          console.log(
            data.insertId,
            data.rowsAffected,
            data.rows,
            data.length,
            data.item,
            data._array
          );
        }
      }

      console.log('tx resultset', data);
      this.querystate.data = data.rows._array;
      if (this.options.callback) {
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

    const execute = () => {
      conn.transaction(
        (tx) => {
          tx.executeSql(query, args, txResult, txError);
        },
        dbError,
        dbSuccess
      );
      if (options.callback) {
        return options.callback();
      }
    };

    this.execute = execute;
  }
}

export { ConnectionQuery };
