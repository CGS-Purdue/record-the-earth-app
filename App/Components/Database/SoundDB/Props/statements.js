// INTERNAL DATABASE QUERY SHOULD BE PRIVATE

const _create = `CREATE TABLE
IF NOT EXISTS Soundscapes (
  id integer primary key autoincrement,
  datetime text not null,
  filepath text not null,
  filename text not null,
  description text not null,
  duration text not null,
  location not null,
  emotion text not null,
  biophony text not null,
  geophony text not null,
  anthrophony text not null,
  cultural text not null,
  pid text,
  isUploaded text not null);`;

const _drop = 'DROP TABLE IF EXISTS Soundscapes;';

const _insert = `INSERT
INTO Soundscapes (
  datetime,
  filepath,
  filename,
  description,
  duration,
  location,
  emotion,
  biophony,
  geophony,
  anthrophony,
  cultural,
  pid,
  isUploaded
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;


const _delete = `DELETE
FROM Soundscapes
WHERE id = ?;`;


const _select = `SELECT
  id,
  datetime,
  filepath,
  filename,
  description,
  duration,
  location,
  emotion,
  biophony,
  geophony,
  anthrophony,
  cultural,
  pid,
  isuploaded
FROMT Soundscapes
ORDER BY id DESC
WHERE id = ?;`;


const _select_all = `SELECT
  id,
  datetime,
  filepath,
  filename,
  description,
  duration,
  location
FROM Soundscapes
ORDER BY id DESC
LIMIT 50;`;


const _select_last = `SELECT
  id,
  datetime,
  filepath,
  filename,
  description,
  duration,
  location
FROM Soundscapes
ORDER BY id DESC
LIMIT 1;`;



const _update_pid = `UPDATE Soundscapes
SET (
  rowId,
  pid,
  isUploaded
) VALUES ?
WHERE id = ?;`;





function StatementCleanString(statement) {
  return statement.trim().replace(/\n/g,' ').replace(/\s\s+/g,' ');
}

const _statements = {
  create: StatementCleanString(_create),
  drop: StatementCleanString(_drop),
  insert: StatementCleanString(_insert),
  delete: StatementCleanString(_delete),
  select: StatementCleanString(_select),
  last: StatementCleanString(_select_last),
  all: StatementCleanString(_select_all),
  updatePid: StatementCleanString(_update_pid),
};

const _arguments = {
  create: { args: 0, type: null , required: false },
  drop: { args: 0, type: null, required: true },
  delete: { args: 1, type: 'id' , required: false },
  insert: { args: 13, type: 'row' , required: true },
  last: { args:0, type: null , required: false },
  select: { args: 1, type: 'id' , required: false },
  updatePid: { args: 0, type: null , required: false },
  all : { args: 0, type: null , required: false },
};

const dbStatements = _statements;
dbStatements._arguments = _arguments;

export { dbStatements };
