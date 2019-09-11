import { AsyncStorage, NetInfo } from "react-native";
import RNFS from "react-native-fs";
import RNFetchBlob from "rn-fetch-blob";
import moment from "moment";
import { DROPBOX } from "./DropboxConstants";
import { DATABASE } from "../../database/Constants";
export class DropboxDatabaseSync {
    constructor() {
        this.backupIsCurrentlyInProgress = false;
    }
    upload() {
        return AsyncStorage.getItem(DROPBOX.ACCESS_TOKEN_STORAGE_KEY)
            .then(accessToken => {
            if (accessToken === null) {
                throw new Error("Cannot perform backup without an access token");
            }
            if (this.backupIsCurrentlyInProgress === true) {
                throw new Error("[Dropbox backup] backup already in progress!");
            }
            console.log("[Dropbox backup] begin!");
            this.backupIsCurrentlyInProgress = true;
            return AsyncStorage.setItem(DROPBOX.LAST_UPDATE_STATUS_KEY, DROPBOX.UPDATE_STATUS_STARTED);
        })
            .then(() => {
            return this.copyDBToBackupFile();
        })
            .then(() => {
            console.log("[Dropbox backup] DB copy complete!");
            this.performBackup().then(() => {
                console.log('[Dropbox backup] "Finally" block. setting backupIsCurrentlyInProgress = false.');
                this.backupIsCurrentlyInProgress = false;
                console.log("[Dropbox backup] BACKUP COMPLETE.");
            });
            return;
        })
            .catch(reason => {
            console.log("[Dropbox backup] Failed prepping for backup!", reason);
            this.backupIsCurrentlyInProgress = false;
        });
    }
    hasRemoteUpdate() {
        return NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected === false) {
                console.log("[Dropbox backup] no internet connection; can't check for update");
                return false;
            }
            return AsyncStorage.getItem(DROPBOX.ACCESS_TOKEN_STORAGE_KEY).then(accessToken => {
                if (accessToken === null) {
                    console.log("[Dropbox backup] no Dropbox access token; can't check for update");
                    return false;
                }
                let lastLocalBackupTimestamp;
                let lastDropboxBackupTimestamp;
                return this.getDatabaseFileMetadataFromDropbox(this.getDropboxFolder() + this.getDatabaseBackupName(), accessToken).then(dropboxMetadataResponse => {
                    if (dropboxMetadataResponse.status === 200) {
                        return dropboxMetadataResponse
                            .json()
                            .then(responseJson => {
                            const clientModifiedString = responseJson[DROPBOX.CLIENT_MODIFIED_TIMESTAMP_KEY];
                            console.log("[Dropbox backup] Client modified timestamp FROM DROPBOX: " +
                                clientModifiedString);
                            lastDropboxBackupTimestamp = moment(clientModifiedString);
                            return AsyncStorage.getItem(DROPBOX.MOST_RECENT_BACKUP_TIMESTAMP_KEY);
                        })
                            .then(lastLocalBackupTimestampString => {
                            console.log("[Dropbox backup] Last recorded LOCAL backup timestamp: " +
                                lastLocalBackupTimestampString);
                            if (lastLocalBackupTimestampString === null) {
                                console.log("[Dropbox backup] lastLocalBackupTimestamp is null, and a DB update exists on Dropbox!");
                                return true;
                            }
                            lastLocalBackupTimestamp = moment(lastLocalBackupTimestampString);
                            if (lastLocalBackupTimestamp.isBefore(lastDropboxBackupTimestamp)) {
                                console.log("[Dropbox backup] DB update exists on Dropbox!");
                                return true;
                            }
                            else {
                                console.log("[Dropbox backup] Local and Dropbox DBs are up to date!");
                                return false;
                            }
                        });
                    }
                    else if (dropboxMetadataResponse.status === 409) {
                        console.log("[Dropbox backup] no Dropbox DB file yet; so no update.");
                        return false;
                    }
                    else {
                        throw new Error("[Dropbox backup] unknown response from Dropbox. HTTP status: " +
                            dropboxMetadataResponse.status);
                    }
                });
            });
        });
    }
    hasLastUploadCompleted() {
        return AsyncStorage.getItem(DROPBOX.LAST_UPDATE_STATUS_KEY).then(lastUpdateStatus => {
            if (lastUpdateStatus === null) {
                console.log("[Dropbox backup] No previous update; wasLastUploadCompleted = true");
                return true;
            }
            else if (lastUpdateStatus === DROPBOX.UPDATE_STATUS_FINISHED) {
                console.log("[Dropbox backup] Previous update finished; wasLastUploadCompleted = true");
                return true;
            }
            else {
                console.log(`[Dropbox backup] Previous update status !== finished (it was: ${lastUpdateStatus}); wasLastUploadCompleted = false`);
                return false;
            }
        });
    }
    download() {
        return AsyncStorage.getItem(DROPBOX.ACCESS_TOKEN_STORAGE_KEY)
            .then(accessToken => {
            if (accessToken === null) {
                throw new Error("[Dropbox backup] no Dropbox access token; can't download update");
            }
            console.log("[Dropbox backup] DOWNLOADING and applying DB from Dropbox: beginning.");
            return RNFetchBlob.config({
                path: this.getLocalDBFilePath()
            }).fetch("POST", DROPBOX.DOWNLOAD_URL, {
                Authorization: `Bearer ${accessToken}`,
                "Dropbox-API-Arg": JSON.stringify({
                    path: this.getDropboxFolder() + this.getDatabaseBackupName()
                })
            });
        })
            .then(response => {
            console.log("[Dropbox backup] DOWNLOAD from Dropbox complete!");
            if (response.respInfo &&
                response.respInfo.headers &&
                response.respInfo.headers[DROPBOX.API_RESULT_HEADER_NAME]) {
                const apiResult = JSON.parse(response.respInfo.headers[DROPBOX.API_RESULT_HEADER_NAME]);
                const clientModifiedString = apiResult[DROPBOX.CLIENT_MODIFIED_TIMESTAMP_KEY];
                console.log("[Dropbox backup] client_modified timestamp: " +
                    clientModifiedString);
                return AsyncStorage.setItem(DROPBOX.MOST_RECENT_BACKUP_TIMESTAMP_KEY, clientModifiedString).then(() => {
                    return AsyncStorage.setItem(DROPBOX.LAST_UPDATE_STATUS_KEY, DROPBOX.UPDATE_STATUS_FINISHED);
                });
            }
            else {
                console.error("[Dropbox backup] client_modified timestamp missing. Response:", response);
                return;
            }
        });
    }
    hasSynced() {
        return AsyncStorage.getItem(DROPBOX.MOST_RECENT_BACKUP_TIMESTAMP_KEY).then(result => {
            if (result === null) {
                return false;
            }
            return true;
        });
    }
    performBackup() {
        return AsyncStorage.getItem(DROPBOX.ACCESS_TOKEN_STORAGE_KEY)
            .then(accessToken => {
            if (accessToken === null) {
                throw new Error("[Dropbox backup] cannot perform backup without an access token");
            }
            console.log("[Dropbox backup] We have a dropbox access token!");
            return this.uploadDBToDropbox(this.getLocalDBBackupFilePath(), this.getDropboxFolder() + this.getDatabaseBackupName(), accessToken);
        })
            .then(() => {
            console.log("[Dropbox backup] DROPBOX UPLOAD COMPLETE!");
            console.log("[Dropbox backup] Setting LAST_UPDATE_STATUS_KEY to UPDATE_STATUS_FINISHED");
            return AsyncStorage.setItem(DROPBOX.LAST_UPDATE_STATUS_KEY, DROPBOX.UPDATE_STATUS_FINISHED);
        })
            .catch(error => {
            console.error("[Dropbox backup] DROPBOX UPLOAD ERROR!", error);
        });
    }
    copyDBToBackupFile() {
        const databaseBackupFilePath = this.getLocalDBBackupFilePath();
        return RNFS.stat(databaseBackupFilePath)
            .then(statResult => {
            console.log("RNFS statResult:", statResult);
            return RNFS.unlink(databaseBackupFilePath);
        })
            .catch(reason => {
            if (reason &&
                reason.toString().includes(DROPBOX.NO_SUCH_FILE_ERROR_SUBSTRING)) {
                return;
            }
            console.error("[Dropbox backup] Stat reject reason", reason);
            throw new Error(reason);
        })
            .then(() => {
            console.log("[Dropbox backup] DB backup file is now gone; continue with backup.");
            return RNFS.copyFile(this.getLocalDBFilePath(), databaseBackupFilePath);
        })
            .then(() => {
            console.log("[Dropbox backup] Backup file created successfully!");
            return;
        });
    }
    getDatabaseFileMetadataFromDropbox(dropboxFilePath, dropboxAccessToken) {
        return fetch(DROPBOX.GET_METADATA_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${dropboxAccessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                path: dropboxFilePath
            })
        }).then(response => {
            console.log("[Dropbox backup] response!", response);
            if (response.status === 200 || response.status === 409) {
                return response;
            }
            throw new Error(`[Dropbox backup] failed to get metadata from dropbox for file ${dropboxFilePath}. status: ${response.status} and response: ${JSON.stringify(response)}`);
        });
    }
    uploadDBToDropbox(localFilePath, dropboxFilePath, dropboxAccessToken) {
        console.log(`[Dropbox backup] UPLOADING local file [${localFilePath}] to remote file [${dropboxFilePath}]!`);
        return RNFetchBlob.fetch("POST", DROPBOX.UPLOAD_URL, {
            Authorization: `Bearer ${dropboxAccessToken}`,
            "Content-Type": "application/octet-stream",
            "Dropbox-API-Arg": JSON.stringify({
                path: dropboxFilePath,
                mode: "overwrite"
            })
        }, RNFetchBlob.wrap(localFilePath)).then((fetchBlobResponse) => {
            console.log("[Dropbox backup] UPLOAD response!", fetchBlobResponse);
            if (fetchBlobResponse.data &&
                fetchBlobResponse.respInfo &&
                fetchBlobResponse.respInfo.status === 200) {
                console.log("[Dropbox backup] UPLOAD SUCCESS!");
                const responseData = JSON.parse(fetchBlobResponse.data);
                const clientModifiedTimestamp = responseData[DROPBOX.CLIENT_MODIFIED_TIMESTAMP_KEY];
                console.log("[Dropbox backup] logging most recent backup timestamp as: " +
                    clientModifiedTimestamp);
                return AsyncStorage.setItem(DROPBOX.MOST_RECENT_BACKUP_TIMESTAMP_KEY, clientModifiedTimestamp);
            }
            else {
                throw new Error("[Dropbox backup] Upload failure! HTTP status: " +
                    fetchBlobResponse.respInfo.status);
            }
        });
    }
    getDatabaseName() {
        return DATABASE.FILE_NAME;
    }
    getDatabaseBackupName() {
        return DATABASE.BACKUP_FILE_NAME;
    }
    getDropboxFolder() {
        return "/";
    }
    getLocalDBFilePath() {
        return (RNFS.LibraryDirectoryPath + "/LocalDatabase/" + this.getDatabaseName());
    }
    getLocalDBBackupFilePath() {
        return (RNFS.LibraryDirectoryPath +
            "/LocalDatabase/" +
            this.getDatabaseBackupName());
    }
}
