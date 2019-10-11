import * as Permissions from 'expo-permissions';

// Top-level status and expires keys stores combined info of each component permission that is asked for. If any permission resulted in a negative result, then that negative result is propagated here; that means top-level values are positive only if all component values are positive.
// Examples [...componentsValues] => topLevelStatus:
//   [granted, denied, granted] => denied
//   [granted, granted, granted] => granted
// {
//   status, // combined status of all component permissions being asked for, if any of has status !== 'granted' then that status is propagated here
//   expires, // combined expires of all permissions being asked for, same as status
//   permissions: { // an object with an entry for each permission requested
//     [Permissions.TYPE]: {
//       status,
//       expires,
//       ... // any additional permission-specific fields
//     },
//     ...
//   },
// }

// Permissions.askAsync(...types)
const APP_PERMISSION = {
  AUDIO_RECORDING: Permissions.AUDIO_RECORDING,
  CALENDAR: Permissions.CALENDAR,
  CAMERA_ROLL: Permissions.CAMERA_ROLL,
  CAMERA: Permissions.CAMERA,
  CONTACTS: Permissions.CONTACTS,
  LOCATION: Permissions.LOCATION,
  REMINDERS: Permissions.REMINDERS,
  SYSTEM_BRIGHTNESS: Permissions.SYSTEM_BRIGHTNESS,
  ANDROID_ACCESS_COARSE_LOCATION: Permissions.LOCATION,
  ANDROID_ACCESS_FINE_LOCATION: Permissions.LOCATION,
  ANDROID_RECORD_AUDIO: Permissions.AUDIO_RECORDING,
  ANDROID_READ_CONTACTS: Permissions.CONTACTS,
  ANDROID_READ_EXTERNAL_STORAGE: Permissions.CAMERA_ROLL,
  ANDROID_WRITE_EXTERNAL_STORAGE: Permissions.CAMERA_ROLL,
};

async function requestPermissions() {
  const { status, expires, permissions } = await Permissions.getAsync(
    Permissions.CALENDAR,
    Permissions.CONTACTS
  );
  if (status !== 'granted') {
    alert(`You heve not enabled location permissions.
    Your upload will proceeed but you will not be able to find you recording on the map.`);
  }
}

// LOOK UP ONE PERM STATUS
async function checkPermission(permKey) {
  let permType = APP_PERMISSION[permKey];
  const { status, expires, permissions } = await Permissions.getAsync(permType);
  if (status !== 'granted') {
    console.log('Hey! You heve not enabled selected permissions');
  }
}

async function checkPermissions(permKeyArray) {
  // let permTypeArray = [];
  // for (let perm of permKeyArray){
  //   let permType = APP_PERMISSION[perm];
  //   permTypeArray.push(permType);
  // }
  let permTypeArray = permKeyArray.map((key) => {
    return APP_PERMISSION[key];
  });
  const { status, expires, permissions } = await Permissions.getAsync(
    ...permTypeArray
  );

  if (status !== 'granted') {
    console.log('You heve not enabled selected permissions');
    console.log(permissions);
  } else {
    console.log('Permissions granted', status, permissions);
  }
}

async function alertIfRemoteNotificationsDisabledAsync() {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') {
    alert(
      'Hey! You might want to enable notifications for my app, they are good.'
    );
  }
}

export { checkPermissions, checkPermission };
