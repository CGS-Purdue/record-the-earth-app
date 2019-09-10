import React from 'react';
import { checkAppDirectoriesStatus }  from '../Utilities/Filesystem';
// import { CheckDB }  from '../Database/Models/CheckDB';

function initalAppSetup() {
   checkAppDirectoriesStatus();
  // return CheckDB;
}


// console.log(checkResults);
// appVersion
// deviceModel
// osVersion
// AppData.appOwnership                 // Constants.appOwnership,
// AppData.expoVersion                 // Constants.expoVersion,
// AppData.installationId                 // Constants.installationId,
// AppData.deviceName                 // Constants.deviceName,
// AppData.deviceYearClass                 // Constants.deviceYearClass,
// AppData.isDevice                 // Constants.isDevice,
// AppData.nativeAppVersion                 // Constants.nativeAppVersion,
// AppData.nativeBuildVersion                 // Constants.nativeBuildVersion,
// AppData.platform                 // Constants.platform,
// AppData.sessionId                 // Constants.sessionId,
// AppData.statusBarHeight                 // Constants.statusBarHeight,
// AppData.systemFonts                 // Constants.systemFonts,
// AppData.manifest                 // Constants.manifest,
// AppData._platform                 // { Platform },

	// final static String UPLOAD_SERVER_URI = "https://www.recordtheearth.org/soundscape-android.php";


export { initalAppSetup }
