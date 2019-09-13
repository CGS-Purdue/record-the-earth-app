
// INTERNAL DATABASE QUERY SHOULD BE PRIVATE

const StatusDbStatements = {
  create: `CREATE TABLE
    IF NOT EXISTS SystemCheck (
     id integer primary key autoincrement,
     date);`,
  insert: `INSERT
     INTO SystemCheck (
       date
     ) VALUES (?);`,
  select: `SELECT *
     FROM SystemCheck
     ORDER BY id
     DESC LIMIT ?`,
  all: `SELECT *
     FROM SystemCheck;`,
};


export { StatusDbStatements }