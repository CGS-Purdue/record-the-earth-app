import { Image, Platform } from 'react-native';
import * as Font from 'expo-font';
import * as Location from 'expo-location';
import { Asset } from 'expo-asset';
import { AppConfig } from '../Config/Application';
import { getKey, setKey } from './AsyncStorage';
import { checkAppDirectoriesStatus, setupFirstLoadAppStorageDirectories } from './Filesystem';
// import { setLocationReference }  from './LocationFunctions';
// import { Theme } from '../Theme';

const storageKey = AppConfig.StorageKey;

async function preLoadImageCache(images) {
  var mod, _asset;
  const cacheImages = {};
  for (var imgKey of Object.keys(images)) {
    mod = images[imgKey];
    _asset = await Asset.fromModule(mod);
    cacheImages[imgKey] = _asset;
  }
  return JSON.stringify(cacheImages);
}

async function preLoadFontCache(fonts) {
  var cacheFonts = {};
  var fontArray = [];
  var font;
  var name;
  var mod;
  for (var key of Object.keys(fonts)) {
    font = fonts[key];
    // name = font.name ? font.name : key;
    mod = font.module;
    var src = await Font.loadAsync(font);

    Promise.resolve(src).then((fontSrc) => {
      font.src1 = fontSrc;
      cacheFonts[key] = font;
    });

    var src2 = await Asset.fromModule(font);
    font.src2 = src2;
    fontArray.push({ [key]: font });
  }

  // console.log('ExpoFont.loadAsync', cacheFonts, fontArray);
  return [cacheFonts, fontArray];

  // try {
  // } catch (e) {
  //   console.log('ExpoFont.loadAsync error', e);
  //   return e;
  // }
}

function onAppLoaded() {
  // App Has First Time Load - Will be undefined on the first time the app loads
  let isFirstLoad = getKey(`${storageKey}:AppHasFirstTimeLoad`);
  if (!isFirstLoad) {
    onAppFirstTimeLoad();
    return true;
  } else {
    let dir_status = checkAppDirectoriesStatus();
    // console.log('[InitalAppSetup] dir_status', dir_status);
    // const ionicFont = Font.loadAsync({
    //   ionicons: require('../Assets/fonts/ionicons.ttf'),
    // });
    return dir_status;
    // console.log('ionicFont', ionicFont);
    // let fsData = getAppStorageContent('/');
    // fsData = getAppStorageContent('/soundfiles');
    // console.log('getAppStorageContent', fsData);

    // const _db_StatusTests == () => {
    // }]
  }
}

async function onAppFirstTimeLoad() {
  let dirs = await setupFirstLoadAppStorageDirectories();
  console.log('[AppFirstTimeSetup] Creating Directories');
  // console.log('[AppFirstTimeSetup] dirs', dirs);

  if (Platform.OS === 'web') {
    Location.installWebGeolocationPolyfill();
  }

  // Permissions.LOCATION
  // Permissions.CAMERA_ROLL
  // Permissions.NOTIFICATIONS
  // Permissions.AUDIO_RECORDING,

  let dir_status = checkAppDirectoriesStatus();
  // console.log('[InitalAppSetup] dir_status', dir_status);
  console.log('[InitalAppSetup] loading font icons');
  // let fsData = getAppStorageContent('/');
  // fsData = getAppStorageContent('/soundfiles');
  // console.log('getAppStorageContent', fsData);

  // const _db_StatusTests == () => { }]
  return true;
}

// * NEEDS PERMISSION *
// // USE THIS INSTEAD OF 0,0 VALUE ON ERROR OR BAD CONNECTION
// // UPDATES ONE TIME ON EACH INITIAL APP LOAD,
// // OVERWRITES (VS stores) THE PREVIOUS VALUE
// // WAIT FOR COMPLETE LOAD ON MAIN SCREEN
// let refLocation = setLocationReference();
function initalAppSetup() {
  let isFirstTime = getKey(`${storageKey}:AppHasFirstTimeLoad`);
  if (isFirstTime) {
    console.log('[InitalAppSetup] Is First Time Load');
    onAppFirstTimeLoad();
  }

  let dir_status = checkAppDirectoriesStatus();
  // console.log('[InitalAppSetup] dir_status', dir_status);
  // const ionicFont = Font.loadAsync({'ionicons':require('../Assets/fonts/ionicons.ttf')});
  // let fsData = getAppStorageContent('/');
  // fsData = getAppStorageContent('/soundfiles');
  // const _db_StatusTests == () => {}
  return true;
}

export { initalAppSetup, preLoadImageCache, preLoadFontCache };
