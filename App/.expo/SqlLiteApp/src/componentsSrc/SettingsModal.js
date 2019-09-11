import React, { Component } from "react";
import { View, StyleSheet, Modal, Text, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import RNRestart from "react-native-restart";
import { database } from "../database/Database";
import { Header } from "./Header";
import { sharedStyle } from "../style/Shared";
import { DropboxAuthorize } from "../sync/dropbox/DropboxAuthorize";
import { DropboxDatabaseSync } from "../sync/dropbox/DropboxDatabaseSync";
import { LoadingScreen } from "./LoadingScreen";
export class SettingsModal extends Component {
    constructor(props) {
        super(props);
        this.dropboxAuth = new DropboxAuthorize();
        this.dropboxSync = new DropboxDatabaseSync();
        this.state = {
            isDropboxStatusKnown: false,
            hasAuthorizedWithDropbox: false,
            downloading: false
        };
        this.modalOnShow = this.modalOnShow.bind(this);
        this.authorizeWithDropbox = this.authorizeWithDropbox.bind(this);
        this.promptToUnlinkFromDropbox = this.promptToUnlinkFromDropbox.bind(this);
    }
    render() {
        const { visible } = this.props;
        return (<Modal animationType="slide" transparent={false} visible={visible} onRequestClose={() => this.props.back()} onShow={this.modalOnShow}>
        {this.state.downloading ? (<LoadingScreen text="Downloading database..."/>) : (<SafeAreaView style={styles.container} testID="settingsModal">
            <View style={sharedStyle.headerWithButton}>
              <Header title={`Settings`}/>

              <TouchableOpacity style={sharedStyle.headerButton} onPress={() => this.props.back()}>
                <Text>✖️</Text>
              </TouchableOpacity>
            </View>

            {this.state.isDropboxStatusKnown && this.renderDropboxComponents()}
          </SafeAreaView>)}
      </Modal>);
    }
    renderDropboxComponents() {
        if (this.state.hasAuthorizedWithDropbox) {
            return (<View>
          <Text>
            ✅ You have authorized the app to backup and sync your database file
            using Dropbox! Tap below to unlink.
          </Text>

          <TouchableOpacity style={styles.dropboxButton} onPress={this.promptToUnlinkFromDropbox} testID="unlinkButton">
            <Text>Unlink Dropbox</Text>
          </TouchableOpacity>
        </View>);
        }
        else {
            return (<View>
          <Text>
            Tap below to authorize the app to backup and sync your database file
            with Dropbox.
          </Text>

          <TouchableOpacity style={styles.dropboxButton} onPress={this.authorizeWithDropbox} testID="authorizeButton">
            <Text>Authorize with Dropbox</Text>
          </TouchableOpacity>
        </View>);
        }
    }
    authorizeWithDropbox() {
        return this.dropboxAuth
            .authorize()
            .then(() => {
            this.setState({
                hasAuthorizedWithDropbox: true
            });
            return this.dropboxSync.hasRemoteUpdate();
        })
            .then(remoteDatabaseIsNewer => {
            if (remoteDatabaseIsNewer) {
                return new Promise((resolve, reject) => {
                    Alert.alert("Replace local database?", "Would you like to overwrite the app's current database with the version on Dropbox?", [
                        {
                            text: "Yes, replace my local DB",
                            onPress: () => {
                                console.log("User chose to replace local DB.");
                                this.setState({
                                    downloading: true
                                });
                                database
                                    .close()
                                    .then(() => {
                                    return this.dropboxSync.download();
                                })
                                    .then(() => {
                                    console.log("DB download success! Reloading app.");
                                    RNRestart.Restart();
                                })
                                    .catch(reason => {
                                    this.setState({
                                        downloading: false
                                    });
                                    database.open().then(() => {
                                        return reject("Error downloading database from Dropbox. Reason: " +
                                            reason);
                                    });
                                });
                            }
                        },
                        {
                            text: "No, unlink Dropbox",
                            onPress: () => this.unlinkFromDropbox()
                        }
                    ], { cancelable: false });
                });
            }
            else {
                return this.dropboxSync.upload();
            }
        })
            .catch(reason => {
            Alert.alert("Error", `Unable to authorize with Dropbox. Reason: ${reason}`);
        });
    }
    promptToUnlinkFromDropbox() {
        Alert.alert("Unlink Dropbox", "Are you sure you would like to unlink Dropbox? Your data will remain on this device, but it will no longer be backed up or synced.", [
            {
                text: "No",
                onPress: () => {
                    return;
                }
            },
            {
                text: "Yes, unlink",
                onPress: () => this.unlinkFromDropbox(),
                style: "destructive"
            }
        ]);
    }
    unlinkFromDropbox() {
        console.log("Unlinking from Dropbox.");
        this.dropboxAuth.revokeAuthorization().then(() => {
            this.setState({
                hasAuthorizedWithDropbox: false
            });
        });
    }
    modalOnShow() {
        this.dropboxAuth.hasUserAuthorized().then(hasAuthorizedWithDropbox => this.setState({
            isDropboxStatusKnown: true,
            hasAuthorizedWithDropbox
        }));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    dropboxButton: {
        alignItems: "center",
        margin: 10,
        marginTop: 25,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderRadius: 3
    }
});
