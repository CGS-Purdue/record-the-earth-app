import { SQLite } from 'expo-sqlite';

function connectDb(config) {
  let db = SQLite.openDatabase(
    config.name,
    config.version,
    config.description,
    config.size,
  );
  return db;
}

export { connectDb }
