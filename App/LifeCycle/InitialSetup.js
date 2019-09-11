
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
