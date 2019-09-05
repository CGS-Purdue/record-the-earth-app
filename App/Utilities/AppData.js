import Constants from 'expo-constants';

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


// let getWebViewUserAgent = Constants.getWebViewUserAgentAsync;

const getAppData = () => {
  const app_data = {
    appOwnership: Constants.appOwnership,
    expoVersion: Constants.expoVersion,
    installationId: Constants.installationId,
    deviceName: Constants.deviceName,
    deviceYearClass: Constants.deviceYearClass,
    isDevice: Constants.isDevice,
    nativeAppVersion: Constants.nativeAppVersion,
    nativeBuildVersion: Constants.nativeBuildVersion,
    platform: Constants.platform,
    sessionId: Constants.sessionId,
    statusBarHeight: Constants.statusBarHeight,
    systemFonts: Constants.systemFonts,
    manifest: Constants.manifest,
  };
  return app_data;
};

export { getAppData }