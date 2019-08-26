import { SQLite } from 'expo-sqlite';

// The version, description and size arguments are ignored,
// but are accepted by the function for compatibility with the WebSQL specification


function getDbConfig () {
  return {
     name: 'soundscape',
     version: '1.0.0',
     description: 'Record The Earth in-app database',
     size: null
  }
}

function connectDb(config) {
  let db = SQLite.openDatabase(
        config.name,
        config.version,
        config.description,
        config.size
      );

  return db;
}

function checkDb() {
  let config = getDbConfig();
  let db = connectDb(config);

  let onSuccess = (tx, result) => {
    // this.setState({ data: result.rows._array});
    console.log(result)
  };

  let onError = (tx, error) => {
    console.log(error);
  };

  console.log('checking database exists');
  // let checkExistsOrCreate = (() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS HealthCheck (id integer primary key autoincrement, date)'
      ),
      onSuccess,
      onError
    });
  // })()

  // var logHealthCheck = (() => {
    console.log('checking insert action');
    let timestamp = new Date();
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO HealthCheck (date) VALUES (?)',
        [timestamp],
        (tx, result) => {
          console.log(result)
        },
        (error) => {
          console.log(error);
        }
      );
    })
  // })();

  // var checkResults = (() => {
    console.log('checking select action');
    db.transaction((tx)=>{
      tx.executeSql(
        'SELECT * FROM HealthCheck ORDER BY id DESC LIMIT 1',
        null,
        onError,
        onSuccess
      ),
      onSuccess,
      onError
    })
  // })();
  // console.log(checkResults);
}

export { connectDb, getDbConfig, checkDb }
