
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
};
