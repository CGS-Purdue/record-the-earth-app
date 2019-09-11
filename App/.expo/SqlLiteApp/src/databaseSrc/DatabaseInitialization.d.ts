import SQLite from "react-native-sqlite-storage";
export declare class DatabaseInitialization {
    updateDatabaseTables(database: SQLite.SQLiteDatabase): Promise<void>;
    private createTables;
    private getDatabaseVersion;
}
