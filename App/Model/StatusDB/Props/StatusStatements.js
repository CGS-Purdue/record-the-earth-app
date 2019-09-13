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

const _all = `SELECT * FROM Status;`

const StatusStatements = {
  create: _create,
  insert: _insert,
  select: _select,
  all: _all,
};

export { StatusStatements }


// data: NULL,
// options: { }
