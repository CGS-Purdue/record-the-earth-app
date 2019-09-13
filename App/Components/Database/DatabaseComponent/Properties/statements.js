
export default= const statements = {
    create: `CREATE TABLE
      IF NOT EXISTS Soundscapes (
        id integer primary key autoincrement,
        datetime text not null,
        path text not null,
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
        isUploaded text not null);`,
    drop: `DROP TABLE IF EXISTS Soundscapes;`,
    insert: `INSERT
      INTO Soundscapes (
        anthrophony,
        biophony,
        cultural,
        datetime,
        description,
        duration,
        emotion,
        filename,
        geophony,
        isUploaded
        location,
        path,
        pid)
      VALUES (?);`,
    delete: `DELETE
      FROM Soundscapes
      WHERE id = ?;`,
    select: `SELECT
    schema: {
      id: {
        type: 'integer',
        info: 'primarykey',
      },
      datetime: {
        type: 'text',
        info: 'recording datetime',
      },
      path: {
        type: 'text',
        info: 'sounds file path',
      },
      filename: {
        type: 'text',
        info: 'sound file name',
      },
      description: {
        type: 'text',
        info: 'survey description',
      },
      duration: {
        type: 'text',
        info: 'recording length length',
      },
      location: {
        type: 'not',
        info: 'recording latlong',
      },
      emotion: {
        type: 'text',
        info: ' survey emo tags',
      },
      biophony: {
        type: 'text',
        info: 'survey bio tags',
      },
      geophony: {
        type: 'text',
        info: 'survey geo tags',
      },
      anthrophony: {
        type: 'text',
        info: 'survey man tags',
      },
      cultural: {
        type: 'text',
        info: 'survey culture tags',
      },
      pid: {
        type: 'text',
        info: 'id from recordtheearth website',
104 file changes in working directory
View changes
commit:9dead4
WIP on master
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
      pid,Database objects are returned by calls to SQLite.openDatabase(). Such an object represents a connection to a database on your device. They support one method:
      isuploaded
    FROMT Soundscapes
    WHERE id = ?;`,
    all: `SELECT
      id,
      datetime,
      filepath,
      filename,
      description,
      duration,
      location
    FROM Soundscapes
    SORT BY pid DESC
    LIMIT 20;`,
    pidUpdate: `UPDATE Soundscapes
      SET (rowId, pid, isUploaded)
      VALUES ?
      WHERE id = ?;`,
