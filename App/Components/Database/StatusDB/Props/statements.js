// INTERNAL DATABASE QUERY SHOULD BE PRIVATE

const _create = `CREATE TABLE
IF NOT EXISTS Status (
  id integer primary key autoincrement,
  date
);`;

const _insert = `INSERT INTO Status (
date
) VALUES (?);`;

const _select = `
SELECT *
FROM Status
ORDER BY id
DESC LIMIT ?;`;

const _all = `SELECT * FROM Status;`;

const dbStatements = {
  create: _create.trim().replace(/\n/g,' ').replace(/\s\s+/g,' '),
  insert: _insert.trim().replace(/\n/g,' ').replace(/\s\s+/g,' '),
  select: _select.trim().replace(/\n/g,' ').replace(/\s\s+/g,' '),
  all: _all.replace(/\n/g,' '),
};

export { dbStatements };
