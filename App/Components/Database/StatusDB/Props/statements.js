// INTERNAL DATABASE QUERY SHOULD BE PRIVATE

const _create = `CREATE TABLE
IF NOT EXISTS Status (
  id integer primary key autoincrement,
  date
);`;

const _insert = `INSERT INTO Status (
date
) VALUES (?);`;

const _last = `
SELECT *
FROM Status
ORDER BY id
DESC LIMIT 1;`;

const _all = `SELECT * FROM Status;`;

const _statements = {
  create: _create.trim().replace(/\n/g,' ').replace(/\s\s+/g,' '),
  insert: _insert.trim().replace(/\n/g,' ').replace(/\s\s+/g,' '),
  last: _last.trim().replace(/\n/g,' ').replace(/\s\s+/g,' '),
  all: _all.replace(/\n/g,' '),
};

const _arguments = {
  create : { args: 0, type: null , required: false },
  insert : { args: 1, type: 'timestamp' , required: false },
  last : { args: 0, type: null , required: false },
  all : { args: 0, type: null , required: false },
}

const dbStatements = _statements;
dbStatements._arguments = _arguments;

export { dbStatements };
