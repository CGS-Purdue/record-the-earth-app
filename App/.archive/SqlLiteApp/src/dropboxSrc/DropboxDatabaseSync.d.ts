import { DatabaseSync } from "../DatabaseSync";
export declare class DropboxDatabaseSync implements DatabaseSync {
    private backupIsCurrentlyInProgress;
    upload(): Promise<void>;
    hasRemoteUpdate(): Promise<boolean>;
    hasLastUploadCompleted(): Promise<boolean>;
    download(): Promise<void>;
    hasSynced(): Promise<boolean>;
    private performBackup;
    private copyDBToBackupFile;
    private getDatabaseFileMetadataFromDropbox;
    private uploadDBToDropbox;
    private getDatabaseName;
    private getDatabaseBackupName;
    private getDropboxFolder;
    private getLocalDBFilePath;
    private getLocalDBBackupFilePath;
}
