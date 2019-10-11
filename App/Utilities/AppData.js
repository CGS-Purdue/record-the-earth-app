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
    IS_DEVICE: Constants.isDevice,
    SESSION_ID: Constants.sessionId,
    EXPO_VERSION: Constants.expoVersion,
    PLATFORM: Constants.platform,
    PLATFORM_VERSION: Platform.Version,
    APP_OWNERSHIP: Constants.appOwnership,
    APP_VERSION: [
      Application.applicationName,
      Application.nativeApplicationVersion,
    ].join(' ver. '),
    NATIVE_APP_VERSION: Constants.nativeAppVersion,
    OS_VERSION: [
      Platform.OS,
      Constants.nativeBuildVersion,
      Constants.AppVersion,
    ].join(', '),
    NATIVE_BUILD_VERSION: Constants.nativeBuildVersion,
    MAJOR_VERSION_IOS: parseInt(Platform.Version, 10),
    DEVICE_MODEL: [
      Constants.deviceName,
      Constants.expoVersion,
      Constants.installationID,
    ].join(', '),
    DEVICE_NAME: Constants.deviceName,
    DEVICE_YEARCLASS: Constants.deviceYearClass,
    INSTALL_ID: Constants.installationId,
    MANIFEST: Constants.manifest,
    SYSTEM_FONTS: Constants.systemFonts,
    STATUS_BAR_HEIGHT: Constants.statusBarHeight,
    _EXPO_CONSTANTS_: JSON.stringify(Constants),
    _EXPO_PLATFORM_: JSON.stringify(Platform),
    _EXPO_APPLICATION_: JSON.stringify(Application),
  };
  if (_map[key]) {
    return _map[key];
  } else {
    return false;
  }
}

export { getAppData };
