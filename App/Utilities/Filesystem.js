import * as FileSystem from 'expo-file-system';
import { StorageConfig } from '../Config/Storage';
import { _dev } from './Log';
import { Platform } from 'react-native';

const LOG_CTX = 'FileSystem';


// FileSystem.EncodingType.UTF8
// FileSystem.EncodingType.Base64
// FileSystem.readAsStringAsync(fileUri, options)
// FileSystem.deleteAsync(fileUri, options)
// FileSystem.moveAsync(options)
// FileSystem.copyAsync(options)
// FileSystem.makeDirectoryAsync(fileUri, options)
// FileSystem.downloadAsync(uri, fileUri, options)
// FileSystem.createDownloadResumable(uri, fileUri, options, callback, resumeData)
// FileSystem.DownloadResumable.downloadAsync()
// FileSystem.getContentUriAsync(fileUri)
// FileSystem.getInfoAsync

const APP_STORAGE = StorageConfig.APP_STORAGE;
// const APP_TEMP = StorageConfig.APP_TEMP;
const PENDING_SOUNDFILES = StorageConfig.STORAGE_PENDING_SOUNDFILES;
const UPLOADED_SOUNDFILES = StorageConfig.STORAGE_UPLOADED_SOUNDFILES;
const MEDIA_PATH = StorageConfig.STORAGE_MEDIA_PATH;
const DATABASE_PATH = StorageConfig.STORAGE_DATABASE_PATH;
const SOUNDFILE_PATH = StorageConfig.STORAGE_SOUNDFILE_PATH;
const DIR_DATA = StorageConfig.DIR_DATA;
const DIR_DB = StorageConfig.DIR_DB;
const DIR_PENDING = StorageConfig.DIR_PENDING;
const DIR_SOUND = StorageConfig.DIR_SOUND;
const DIR_UPLOADED = StorageConfig.DIR_UPLOADED;

async function getAudioFileFromTemp(file_name) {
  const target_uri = [PENDING_SOUNDFILES, file_name].join('/');
  if (Platform.os === 'web') {
    return true;
  }
  try {
    const file_info = await FileSystem.getInfoAsync(target_uri, { md5: true, });
    _dev([LOG_CTX, 'inspectSoundfile'],'file data received', file_info);
    return file_info.uri;
    // await FileSystem.moveAsync({ from: file_path, to: storage_path })
    // await FileSystem.copyAsync({ from: file_path, to: new_uri });
  } catch (error) {
    console.log(error);
  }
}


const saveTempAudioFile = async (file_path) => {
  const file_name = file_path.split('/').slice(-1);
  const temp_path = [PENDING_SOUNDFILES, file_name].join('/');
  try {
    // await FileSystem.moveAsync({ from: file_path, to: storage_path })
    const result = await FileSystem.copyAsync({ from: file_path, to: temp_path});
    // _dev('[saveTempAudioFile] result', result);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};


const updatePendingtToUploaded = async (filename) => {
  const src_path = [PENDING_SOUNDFILES, filename].join('/');
  const dest_path = [UPLOADED_SOUNDFILES, filename].join('/');
  try {
    let result = await FileSystem.moveAsync({
      from: src_path,
      to: dest_path,
    });
    _dev([LOG_CTX, 'updatePendingtToUploaded'], result);
    // await FileSystem.copyAsync({ from: src_path, to: dest_path, });
    return result;
  } catch (error) {
    console.log('Update Pendingt To Uploaded', error);
    return false;
  }
};


const getFileInfo = async (fileUri) => {
  if (Platform.os === 'web') { return true }
  try {
    const _info = await FileSystem.getInfoAsync(fileUri);
    return _info;
  } catch (er) {
    console.error(er);
    return false;
  }
};


const asyncGetFileFromTemp = async (name) => {
  let fileInfo = {};
  try {
    fileInfo = await getAudioFileFromTemp(name)
    .then((response) => { return response.uri })
    .catch((error) => { console.error(error) })
  } catch (error) {
    console.error(error);
  }
  return fileInfo;
};


const inspectSoundfile = async (fileUri) => {
  _dev([LOG_CTX, 'inspectSoundfile'], fileUri);
  try {
  let filedata = await FileSystem.readAsStringAsync(fileUri, {encoding: FileSystem.EncodingType.Base64 });
    _dev([LOG_CTX, 'inspectSoundfile'],'file data received');
    _dev([LOG_CTX, 'inspectSoundfile'], 'file data received', {'Filelength' : filedata.length, 'Fileuri': fileUri});
    _dev([LOG_CTX, 'inspectSoundfile'], 'file data received', filedata.trim().slice(0, 400));
    return filedata;
  } catch (e) {
    console.log('error', e);
  }
  // await FileSystem.readAsStringAsync(fileUri, {
  //   // encoding: FileSystem.EncodingType.Base64,
  // })
  //   .then((filedata) => {
  //     try {
  //       // _dev(filedata.trim().slice(0, 1000));
  //       // _dev('File length:', filedata.length);
  //       // _dev('File uri: ', fileUri);
  //     } catch (e) {
  //       console.log('error', e);
  //     }
  //   })
  //   .catch((er) => {
  //     console.log(er);
  //   })
  //   .done(() => {
  //     _dev([LOG_CTX, 'inspectSoundfile'],'file data received');
  //   });
};


async function saveAudioRecordingFile(file_uri) {
  const file_name = file_uri.split('/').slice(-1);
  const new_uri = [PENDING_SOUNDFILES, file_name].join('/');
  try {
    // await FileSystem.moveAsync({ from: file_uri, to: storage_path })
    let result = await FileSystem.copyAsync({ from: file_uri, to: new_uri });
    _dev([LOG_CTX, 'saveAudioRecordingFile'], 'copying audio to pending files', result);

    return result;
  } catch (error) {
    console.log(error);
  }
}


async function discardUploadedSoundfile(filename) {
  const filepath = [UPLOADED_SOUNDFILES, filename].join('');
  try {
    let result = await FileSystem.deleteAsync(filepath);
    return result;
  } catch (error) {
    console.log(error);
  }
}


async function discardPendingSoundfile(filename) {
  const filepath = [PENDING_SOUNDFILES, filename].join('');
  try {
    let result = await FileSystem.deleteAsync(filepath);
    return result;
  } catch (error) {
    console.log(error);
  }
}


async function discardAudioRecording(filepath) {
  try {
    let result = await FileSystem.deleteAsync(filepath);
    return result;
  } catch (error) {
    console.log(error);
  }
}


async function getAppStorageContent(path) {
  try {
    let contents = await FileSystem.readDirectoryAsync([APP_STORAGE, path].join(''));

    if (!contents) {
      _dev([LOG_CTX, 'getAppStorageContent'], `no content found at '${path}'`);
      return false;
    } else {
      return contents;
    }
  } catch (error) {
    console.log(error);
  }
}


async function setupFirstLoadAppStorageDirectories() {
  // CHECK DEPTH FIRST WITH INTERMEDIATES ENABLED
  let result0 = await existOrCreateAppDirectory([DIR_SOUND, DIR_UPLOADED].join('/'),{ intermediates: true });
  let result1 = await existOrCreateAppDirectory(DIR_DB, { intermediates: false });
  let result2 = await existOrCreateAppDirectory([DIR_SOUND, DIR_PENDING].join('/'), { intermediates: false });
  if (!result0) {
    await existOrCreateAppDirectory(DIR_SOUND, { intermediates: false });
  }
  _dev([LOG_CTX, 'setup First Load App Storage Directories'], [ result0, result1, result2])
  return (result0 && result1 && result2)
}


async function createAppStorageDirectory(dirName) {
  let result;
  try {
    result = await FileSystem.makeDirectoryAsync([APP_STORAGE, dirName].join(''));
    _dev([LOG_CTX, 'createAppStorageDirectory', dirName], result);
    return result;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function existOrCreateAppDirectory(dirName, options) {
  if (Platform.os === 'web') { return true; }
  try {
    let result = await FileSystem.getInfoAsync([APP_STORAGE, dirName].join(''));
    _dev([LOG_CTX, 'existOrCreateAppDirectory'], dirName, result.exists);
    if (!result.exists) {
      _dev([LOG_CTX, 'existOrCreateAppDirectory'], dirName, ' does not exist, creating...', result);
      let created = createAppStorageDirectory(dirName);
      _dev([LOG_CTX, 'existOrCreateAppDirectory'], dirName, ' create result', created);
      return
    } else {
      return true;
    }
  } catch (e) {
    _dev(e);
    return false;
  }
}


async function checkAppDirectoriesStatus() {
  let paths = {
    pendingSoundfiles: [DIR_SOUND, DIR_PENDING].join('/'),
    uploadedSoundfiles: [DIR_SOUND, DIR_UPLOADED].join('/'),
    soundfiles: DIR_SOUND,
  };
  try {
    let exists = await existOrCreateAppDirectory(paths.soundfiles, { final: false });
    if (!exists) {
      _dev([LOG_CTX, 'checkAppDirectoriesStatus'], 'Soundfile directories do not exist, creating folder',  exists);
      let created0 = await existOrCreateAppDirectory(paths.pendingSoundfiles, { imtermediates: true, final: false });
      let created1 = await existOrCreateAppDirectory(paths.uploadedSoundfiles, { imtermediates: true, final: false });
      _dev([LOG_CTX, 'checkAppDirectoriesStatus'], 'exists', DIR_SOUND, created0, created1);
    }
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}


export {
  setupFirstLoadAppStorageDirectories,
  saveAudioRecordingFile,
  discardUploadedSoundfile,
  discardPendingSoundfile,
  discardAudioRecording,
  getAppStorageContent,
  createAppStorageDirectory,
  existOrCreateAppDirectory,
  checkAppDirectoriesStatus,
  saveTempAudioFile,
  inspectSoundfile,
  updatePendingtToUploaded,
  getAudioFileFromTemp,
  MEDIA_PATH,
  DATABASE_PATH,
  SOUNDFILE_PATH,
  DIR_DATA,
  DIR_DB,
  asyncGetFileFromTemp,
  getFileInfo,
};
