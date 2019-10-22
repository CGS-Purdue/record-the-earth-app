import { Platform } from 'react-native';
import * as Font from 'expo-font';
import * as Location from 'expo-location';
import { Asset } from 'expo-asset';
import { AppConfig } from '../Config/Application';
import { _dev } from './Log';
import { getKey, setKey } from './AsyncStorage';
import { checkAppDirectoriesStatus, setupFirstLoadAppStorageDirectories } from './Filesystem';
// import { setLocationReference }  from './LocationFunctions';
// import { Theme } from '../Theme';

const LOG_CTX = 'InitialSetup';
const storageKey = AppConfig.StorageKey;

async function preLoadImageCache(images) {
  var mod, _asset;
  const cacheImages = {};

  for (var imgKey of Object.keys(images)) {
    mod = images[imgKey];
    _asset = await Asset.fromModule(mod);
    cacheImages[imgKey] = _asset;
  }

  _dev([LOG_CTX, 'preLoadImageCache'], JSON.stringify(cacheImages));
  return JSON.stringify(cacheImages);
}


async function preLoadFontCache(fonts) {
  var fontArray = [];
  try {
    for (var key of Object.keys(fonts)) {
      var font = fonts[key];
      var name = font.name ? font.name : key;
      var mod = font.module;
      var src = await Font.loadAsync({ [name] : mod });
      var _font = Object.create(null);
      _font.name = name;
      Promise.resolve(src).then((fontSrc) => {
        _font.src = fontSrc;
        _font.isLoaded = true;
        fontArray.push(_font);
      });
    }
    return fontArray;

  } catch (e) {
    console.log('ExpoFont.loadAsync error', e);
  }
}


function onAppLoaded() {
  // App Has First Time Load - Will be undefined on the first time the app loads
  let dir_status = checkAppDirectoriesStatus();
    // console.log('[InitalAppSetup] dir_status', dir_status);
    // const ionicFont = Font.loadAsync({
    //   ionicons: require('../Assets/fonts/ionicons.ttf'),
    // });
    // console.log('ionicFont', ionicFont);
    // let fsData = getAppStorageContent('/');
    // fsData = getAppStorageContent('/soundfiles');
    // console.log('getAppStorageContent', fsData);
    // const _db_StatusTests == () => {
    // }]
  _dev([LOG_CTX, 'onAppLoaded'], 'dir_status', dir_status);
  return dir_status;
}



async function onAppFirstTimeLoad() {
  if (Platform.OS === 'web') {
    Location.installWebGeolocationPolyfill();
  }

  let dirs = await setupFirstLoadAppStorageDirectories();
  _dev([LOG_CTX, 'onAppFirstTimeLoad', 'Creating Directories'], dirs);

  let dir_status = checkAppDirectoriesStatus();
  _dev([LOG_CTX, 'onAppFirstTimeLoad'], 'dir_status', dir_status );

  // _dev([LOG_CTX, 'onAppFirstTimeLoad'], 'loading font icons');
  // let fsData = getAppStorageContent('/');
  // fsData = getAppStorageContent('/soundfiles');
  // console.log('getAppStorageContent', fsData);
  // const _db_StatusTests == () => { }]

  let isFirstLoad = setKey(`${storageKey}:AppHasFirstTimeLoad`, '1');
  _dev([LOG_CTX, 'onAppFirstTimeLoad'], 'set isFirstLoad', (dirs && dir_status && isFirstLoad));

  // TODO: HANDLE PERMISSIONS AT FRONT FIRST LOAD
  // Permissions.LOCATION
  // Permissions.CAMERA_ROLL
  // Permissions.NOTIFICATIONS
  // Permissions.AUDIO_RECORDING,
  return true;
}


function initalAppSetup() {
  let isFirstTime = getKey(`${storageKey}:AppHasFirstTimeLoad`);
  if (!isFirstTime) {
    let firstSetup = onAppFirstTimeLoad();
    _dev([LOG_CTX, 'initalAppSetup'], 'isFirstTime', isFirstTime);
    return firstSetup;
  } else {
    let apploaded = onAppLoaded();
    _dev([LOG_CTX, 'initalAppSetup'], 'dir_status', apploaded);
  }


  // * NEEDS PERMISSION *
  // // USE THIS INSTEAD OF 0,0 VALUE ON ERROR OR BAD CONNECTION
  // // UPDATES ONE TIME ON EACH INITIAL APP LOAD,
  // // OVERWRITES (VS stores) THE PREVIOUS VALUE
  // // WAIT FOR COMPLETE LOAD ON MAIN SCREEN
  // let refLocation = setLocationReference();

  // console.log('[InitalAppSetup] dir_status', dir_status);
  // const ionicFont = Font.loadAsync({'ionicons':require('../Assets/fonts/ionicons.ttf')});
  // let fsData = getAppStorageContent('/');
  // fsData = getAppStorageContent('/soundfiles');
  // const _db_StatusTests == () => {}
  return true;
}

export { initalAppSetup, preLoadImageCache, preLoadFontCache };
