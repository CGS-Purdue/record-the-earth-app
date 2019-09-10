export declare class DatabaseSynchronizer {
    private prepareForDatabaseUpdate;
    private dropboxSync;
    private dropboxAuth;
    constructor(prepareForDatabaseUpdate: () => Promise<void>);
    syncDatabase(): Promise<void>;
    private reconcileDatabaseChanges;
    private promptToUpdateDatabase;
    private promptToReplaceDatabase;
    private downloadAndApplyUpdate;
}
