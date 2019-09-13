
// ResultSet
// {
//   insertId,
//   rowsAffected,
//   rows: {
//     length,
//     item(),
//     _array,
//   },
// }
// insertId (number) -- The row ID of the row that the SQL statement inserted into the database, if a row was inserted.
// rowsAffected (number) -- The number of rows that were changed by the SQL statement.
// rows.length (number) -- The number of rows returned by the query.
// rows.item (function) -- rows.item(index) returns the row with the given index. If there is no such row, returns null.
// rows.array (_number) -- The actual array of rows returned by the query. Can be used directly instead of getting rows through



    // db.transaction(callback = tx.executeSql(sqlStatement, arguments, success, error),
    //    tx.executeSql(sqlStatement, arguments,  success,  error)
    //    error,
    //    success
    // )



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




    setConfig(config) {
      let empty = Object.create(null);
      let _config = Object.assign(empty, this.props.config, config);
      this.props.config = _config;
    }

    _transact = (query, args, onDone, onError) => {
      const txwrap = (_tx_) => {
        return _tx_(statements.all, null, this.onSuccess, this.onError)
      }

      this.db.transaction((tx)=> {
        console.log('tx', tx);
        const { executeSql } = tx;
        if (executeSql) {
          (txwrap(executeSql), this.txError, this.txSuccess)
        } else {
          (txwrap(tx), this.txError, this.txSuccess)
        }
     });
