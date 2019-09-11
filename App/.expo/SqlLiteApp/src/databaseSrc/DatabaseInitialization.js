export class DatabaseInitialization {
    updateDatabaseTables(database) {
        let dbVersion = 0;
        console.log("Beginning database updates...");
        return database
            .transaction(this.createTables)
            .then(() => {
            return this.getDatabaseVersion(database);
        })
            .then(version => {
            dbVersion = version;
            console.log("Current database version is: " + dbVersion);
            if (dbVersion < 1) {
            }
            return;
        })
            .then(() => {
            if (dbVersion < 2) {
            }
            return;
        });
    }
    createTables(transaction) {
        const dropAllTables = false;
        if (dropAllTables) {
            transaction.executeSql("DROP TABLE IF EXISTS List;");
            transaction.executeSql("DROP TABLE IF EXISTS ListItem;");
            transaction.executeSql("DROP TABLE IF EXISTS Version;");
        }
        transaction.executeSql(`
      CREATE TABLE IF NOT EXISTS List(
        list_id INTEGER PRIMARY KEY NOT NULL,
        title TEXT
      );
    `);
        transaction.executeSql(`
      CREATE TABLE IF NOT EXISTS ListItem(
        item_id INTEGER PRIMARY KEY NOT NULL,
        list_id INTEGER,
        text TEXT,
        done INTEGER DEFAULT 0,
        FOREIGN KEY ( list_id ) REFERENCES List ( list_id )
      );
    `);
        transaction.executeSql(`
      CREATE TABLE IF NOT EXISTS Version(
        version_id INTEGER PRIMARY KEY NOT NULL,
        version INTEGER
      );
    `);
    }
    getDatabaseVersion(database) {
        return database
            .executeSql("SELECT version FROM Version ORDER BY version DESC LIMIT 1;")
            .then(([results]) => {
            if (results.rows && results.rows.length > 0) {
                const version = results.rows.item(0).version;
                return version;
            }
            else {
                return 0;
            }
        })
            .catch(error => {
            console.log(`No version set. Returning 0. Details: ${error}`);
            return 0;
        });
    }
}
