import { AsyncStorage, Linking } from "react-native";
import shittyQs from "shitty-qs";
import { DROPBOX } from "./DropboxConstants";
import { OAUTH_CONFIG } from "./OAuthConfig";
export class DropboxAuthorize {
    constructor() {
        this._handleOpenURL = this._handleOpenURL.bind(this);
    }
    authorize() {
        console.log("Authorization starting...");
        const stateValue = Math.random().toString();
        return Linking.openURL([
            DROPBOX.AUTHORIZE_URL,
            "?response_type=token",
            `&client_id=${OAUTH_CONFIG.OAUTH_CLIENT_ID}`,
            `&redirect_uri=${OAUTH_CONFIG.OAUTH_REDIRECT_URI}`,
            `&state=${stateValue}`
        ].join(""))
            .catch(err => console.error("An error occurred trying to open the browser to authorize with Dropbox:", err))
            .then(() => {
            return new Promise((resolve, reject) => {
                const handleOpenURL = (event) => {
                    this._handleOpenURL(event, stateValue)
                        .then(() => {
                        resolve();
                    })
                        .catch(reason => {
                        reject(reason);
                    })
                        .then(() => {
                        Linking.removeEventListener("url", handleOpenURL);
                        return;
                    });
                };
                Linking.addEventListener("url", handleOpenURL);
            });
        });
    }
    hasUserAuthorized() {
        return AsyncStorage.getItem(DROPBOX.ACCESS_TOKEN_STORAGE_KEY).then(accessToken => {
            if (accessToken !== null) {
                return true;
            }
            return false;
        });
    }
    revokeAuthorization() {
        return AsyncStorage.getItem(DROPBOX.ACCESS_TOKEN_STORAGE_KEY)
            .then(accessToken => {
            if (accessToken === null) {
                throw new Error("Cannot unlink without an access token");
            }
            return fetch(DROPBOX.REVOKE_TOKEN_URL, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        })
            .then(response => {
            console.log("Unlink response:", response);
            if (response.status === 200) {
                return;
            }
            throw new Error(`Failed to revoke Dropbox token. status: ${response.status} and response: ${JSON.stringify(response)}`);
        })
            .then(() => AsyncStorage.removeItem(DROPBOX.ACCESS_TOKEN_STORAGE_KEY))
            .then(() => AsyncStorage.removeItem(DROPBOX.LAST_UPDATE_STATUS_KEY))
            .then(() => AsyncStorage.removeItem(DROPBOX.MOST_RECENT_BACKUP_TIMESTAMP_KEY));
    }
    _handleOpenURL(event, stateValue) {
        console.log("Deep link event!", event);
        const queryStringResult = event.url.match(/\#(.*)/);
        if (queryStringResult === null || queryStringResult.length < 2) {
            return Promise.reject("Did not receive a query string as part of this deep link!");
        }
        const [, queryString] = queryStringResult;
        const parsedQueryString = shittyQs(queryString);
        if (parsedQueryString.error) {
            const errorCode = parsedQueryString.error;
            const errorDescription = parsedQueryString.error_description;
            console.error("Dropbox OAuth error! code:", errorCode);
            console.error("Error description:", errorDescription);
            return Promise.reject(`Could not authorize with Dropbox. Code: ${errorCode}`);
        }
        if (stateValue !== parsedQueryString.state) {
            return Promise.reject("State parameter DID NOT MATCH!");
        }
        const accessToken = parsedQueryString.access_token;
        const accountId = parsedQueryString.account_id;
        return AsyncStorage.setItem(DROPBOX.ACCESS_TOKEN_STORAGE_KEY, accessToken)
            .then(() => {
            return AsyncStorage.setItem(DROPBOX.ACCOUNT_ID_STORAGE_KEY, accountId);
        })
            .then(() => {
            console.log("Dropbox OAuth authorization success! Account ID:", accountId);
            return;
        });
    }
}
