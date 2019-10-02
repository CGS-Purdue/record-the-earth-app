import Constants from 'expo-constants';
import { Platform } from 'react-native';
import * as Application from 'expo-application';


// -----------------
// Constants - Expo Documentation
// url: https://docs.expo.io/versions/v34.0.0/sdk/constants/
// =================
// Constants.appOwnership - expo, standalone, guest
// Constants.expoVersion
// Constants.installationId
// Constants.deviceName
// Constants.deviceYearClass
// Constants.getWebViewUserAgentAsync()
// Constants.isDevice
// Constants.nativeAppVersion
// Constants.nativeBuildVersion - ios.buildNumber - android.versionCode
// Constants.platform
//  - ios - buildNumber - platform - model - userInterfaceIdiom - systemVersion
//  - android - versionCode - android.versionCode - null
// Constants.sessionId
// Constants.statusBarHeight
// Constants.systemFonts
// Constants.manifest


// On iOS, the Version is a result of -[UIDevice systemVersion], which is a string with the current version of the operating system.
//  An example of the system version is "10.3". For example, to detect the major version number on iOS:

// let getWebViewUserAgent = Constants.getWebViewUserAgentAsync;

function getAppData(key) {
  let _map = {
    EXPO_VERSION: Constants.expoVersion,
    PLATFORM: Constants.platform,
    PLATFORM_VERSION: Platform.Version,
    appVersion: [Application.applicationName, Application.nativeApplicationVersion].join(' ver. '),
    osVersion: [
      Platform.OS,
      Constants.nativeBuildVersion,
      Constants.AppVersion,
      ].join(', '),
    deviceModel: [
      Constants.deviceName,
      Constants.expoVersion,
      Constants.installationID,
      ].join(', '),
    appOwnership: Constants.appOwnership,
    deviceName: Constants.deviceName,
    deviceYearClass: Constants.deviceYearClass,
    installationId: Constants.installationId,
    isDevice: Constants.isDevice,
    majorVersionIOS: parseInt(Platform.Version, 10),
    manifest: Constants.manifest,
    nativeAppVersion: Constants.nativeAppVersion,
    nativeBuildVersion: Constants.nativeBuildVersion,
    sessionId: Constants.sessionId,
    statusBarHeight: Constants.statusBarHeight,
    systemFonts: Constants.systemFonts,
    _EXPO_CONSTANTS_: JSON.stringify(Constants),
    _EXPO_PLATFORM_: JSON.stringify(Platform) ,
    _EXPO_APPLICATION_: JSON.stringify(Application),
  };
  if ( _map[key] ){
    return _map[key];
  } else {
    return false;
  }
}

export { getAppData };
