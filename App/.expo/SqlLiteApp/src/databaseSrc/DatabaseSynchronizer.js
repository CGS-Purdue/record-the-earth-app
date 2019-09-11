import { NetInfo, Alert } from "react-native";
import RNRestart from "react-native-restart";
import { DropboxDatabaseSync } from "../sync/dropbox/DropboxDatabaseSync";
import { DropboxAuthorize } from "../sync/dropbox/DropboxAuthorize";
export class DatabaseSynchronizer {
    constructor(prepareForDatabaseUpdate) {
        this.prepareForDatabaseUpdate = prepareForDatabaseUpdate;
        this.dropboxSync = new DropboxDatabaseSync();
        this.dropboxAuth = new DropboxAuthorize();
    }
    syncDatabase() {
        return NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                console.log("[DatabaseSynchronizer] App is online! Check for an update.");
                return this.reconcileDatabaseChanges();
            }
        });
    }
    reconcileDatabaseChanges() {
        let anUpdateToTheDatabaseExists;
        this.dropboxSync.hasSynced().then(hasBeenSynced => {
            if (hasBeenSynced === true) {
                this.dropboxSync
                    .hasRemoteUpdate()
                    .then(updateExists => {
                    anUpdateToTheDatabaseExists = updateExists;
                    return this.dropboxSync.hasLastUploadCompleted();
                })
                    .then(wasLastUploadCompleted => {
                    console.log(`[DatabaseSynchronizer] Checking for an update to the database! wasLastUploadCompleted = ${wasLastUploadCompleted} and anUpdateToTheDatabaseExists = ${anUpdateToTheDatabaseExists}`);
                    if (wasLastUploadCompleted === false &&
                        anUpdateToTheDatabaseExists === false) {
                        console.log("[DatabaseSynchronizer] the local DB needs to be uploaded! Queuing an upload now.");
                        return this.dropboxSync.upload();
                    }
                    else if (wasLastUploadCompleted &&
                        anUpdateToTheDatabaseExists === false) {
                        console.log("[DatabaseSynchronizer] the local DB is up-to-date with the Dropbox backup.");
                        return Promise.resolve();
                    }
                    else if (wasLastUploadCompleted && anUpdateToTheDatabaseExists) {
                        console.log("[DatabaseSynchronizer] Update alert! There has been an update made to the DB file by another device.");
                        this.promptToUpdateDatabase();
                        return Promise.resolve();
                    }
                    else if (wasLastUploadCompleted === false &&
                        anUpdateToTheDatabaseExists) {
                        console.log("[DatabaseSynchronizer] last backup WAS NOT completed AND there IS an update on Dropbox! Prompt to replace DB.");
                        this.promptToReplaceDatabase();
                        return Promise.resolve();
                    }
                    else {
                        console.error(`[DatabaseSynchronizer] ERROR: what state is this? wasLastUploadCompleted = ${wasLastUploadCompleted} anUpdateToTheDatabaseExists = ${anUpdateToTheDatabaseExists}`);
                        return Promise.resolve();
                    }
                })
                    .catch(reason => {
                    console.error("[DatabaseSynchronizer] error in reconcileDatabaseChanges():", reason);
                });
            }
        });
    }
    promptToUpdateDatabase() {
        Alert.alert("Update database?", "The synced database on Dropbox has changed since you last ran the app on this device.", [
            {
                text: "Apply update from Dropbox",
                onPress: () => this.downloadAndApplyUpdate()
            },
            {
                text: "Cancel (unlink Dropbox)",
                onPress: () => this.dropboxAuth.revokeAuthorization()
            }
        ], { cancelable: false });
    }
    promptToReplaceDatabase() {
        Alert.alert("Replace local database?", "The synced database on Dropbox has changed since you last ran the app on this device. Would you like to overwrite the current database with the version on Dropbox?", [
            {
                text: "Yes, replace the current database",
                onPress: () => this.downloadAndApplyUpdate()
            },
            {
                text: "Cancel (unlink Dropbox)",
                onPress: () => this.dropboxAuth.revokeAuthorization()
            }
        ], { cancelable: false });
    }
    downloadAndApplyUpdate() {
        console.log("[DatabaseSynchronizer] User chose to apply the remote update.");
        this.prepareForDatabaseUpdate()
            .then(() => {
            return this.dropboxSync.download();
        })
            .then(() => {
            console.log("[DatabaseSynchronizer] DB download success! Reloading app.");
            RNRestart.Restart();
        })
            .catch(reason => {
            console.error("[DatabaseSynchronizer] Error downloading Dropbox database copy. Reason:", reason);
            RNRestart.Restart();
        });
    }
}
