import * as FileSystem from 'expo-file-system';
import { StorageConfig } from '../Config/Storage';

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
  try {
    const file_info = await FileSystem.getInfoAsync(target_uri, {
      md5: true,
    }).then(({ uri }) => {
      console.log(uri);
      return uri;
    });

    return file_info;
    // await FileSystem.moveAsync({
    //   from: file_path,
    //   to: storage_path
    // })
    // await FileSystem.copyAsync({
    //   from: file_path,
    //   to: new_uri,
    // });
  } catch (error) {
    console.log(error);
  }
}

const saveTempAudioFile = async (file_path) => {
  console.log('[saveTempAudioFile]');
  const file_name = file_path.split('/').slice(-1);
  const temp_path = [PENDING_SOUNDFILES, file_name].join('/');
  try {
    // await FileSystem.moveAsync({
    //   from: file_path,
    //   to: storage_path
    // })
    console.log('[saveTempAudioFile] from', file_path);
    console.log('[saveTempAudioFile] to', temp_path);
    const result = await FileSystem.copyAsync({
      from: file_path,
      to: temp_path,
    });
    console.log('result', result);
  } catch (error) {
    console.log(error);
    return false;
  }
};

const updatePendingtToUploaded = async (filename) => {
  const src_path = [PENDING_SOUNDFILES, filename].join('/');
  const dest_path = [UPLOADED_SOUNDFILES, filename].join('/');
  try {
    console.log('moving pending file to complete', filename);
    let result = await FileSystem.moveAsync({
      from: src_path,
      to: dest_path,
    });
    console.log('[updatePendingtToUploaded]', result);
    // await FileSystem.copyAsync({ from: src_path, to: dest_path, });
    return result;
  } catch (error) {
    console.log('[updatePendingtToUploaded]', error);
    return false;
  }
};

const getFileInfo = async (fileUri) => {
  try {
    const _info = await FileSystem.getInfoAsync(fileUri);
    console.log('fileinfo', _info, this);
    // this.setState({ fileinfo: _info.uri });
  } catch (er) {
    console.error(er);
    return false;
  }
};

const asyncGetFileFromTemp = async (name) => {
  let fileInfo = {};
  try {
    fileInfo = await getAudioFileFromTemp(name)
      .then((response) => {
        return response.uri;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
  return fileInfo;
};

const inspectSoundfile = async (fileUri) => {
  console.log('Inspecting Sound File', fileUri);
  await FileSystem.readAsStringAsync(fileUri, {
    // encoding: FileSystem.EncodingType.Base64,
  })
    .then((filedata) => {
      try {
        console.log(filedata.trim().slice(0, 1000));
        console.log('File length:', filedata.length);
        console.log('File uri: ', fileUri);
      } catch (e) {
        console.log('error', e);
      }
    })
    .catch((er) => {
      console.log(er);
    })
    .done(() => {
      console.log('file data received');
    });
};

async function saveAudioRecordingFile(file_uri) {
  const file_name = file_uri.split('/').slice(-1);
  const new_uri = [PENDING_SOUNDFILES, file_name].join('/');
  try {
    // await FileSystem.moveAsync({ from: file_uri, to: storage_path })
    let result = await FileSystem.copyAsync({ from: file_uri, to: new_uri });
    console.log('copying audio to pending files', result);
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
    let contents = await FileSystem.readDirectoryAsync(
      [APP_STORAGE, path].join('')
    );
    if (!contents) {
      console.log(`no content found at '${path}'`);
      return false;
    } else {
      console.log(`Contents at '${path}':`);
      console.log(contents);
      return contents;
    }
  } catch (error) {
    console.log(error);
  }
}

async function setupFirstLoadAppStorageDirectories() {
  let result0 = await existOrCreateAppDirectory(DIR_SOUND);
  let result1 = await existOrCreateAppDirectory(DIR_DB);
  let result2 = await existOrCreateAppDirectory(
    [DIR_SOUND, DIR_PENDING].join('/')
  );
  let result3 = await existOrCreateAppDirectory(
    [DIR_SOUND, DIR_UPLOADED].join('/')
  );
  console.log('setupFirstLoadAppStorageDirectories', [
    result0,
    result1,
    result2,
    result3,
  ]);
}

async function createAppStorageDirectory(dirName) {
  let result;
  try {
    result = await FileSystem.makeDirectoryAsync(
      [APP_STORAGE, dirName].join('')
    );
    return result;
  } catch (e) {
    console.log(e);
    return e;
  } finally {
    return result;
  }
}

async function existOrCreateAppDirectory(dirName, options) {
  try {
    let dirInfo = await FileSystem.getInfoAsync(
      [APP_STORAGE, dirName].join('')
    );
    if (!dirInfo.exists) {
      console.log(dirName + ' does not exist, creating...', dirInfo);
      return createAppStorageDirectory(dirName);
    } else {
      return true;
    }
  } catch (e) {
    console.log(e);
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
    let exists = await existOrCreateAppDirectory(paths.soundfiles, {
      final: false,
    });
    if (!exists) {
      console.log(
        'Soundfile storage directories do not exist, creating folder',
        exists
      );
      console.log('exists', DIR_SOUND, exists);
      await existOrCreateAppDirectory(paths.pendingSoundfiles, {
        final: false,
      });
      await existOrCreateAppDirectory(paths.uploadedSoundfiles, {
        final: false,
      });
    }
    return true;
  } catch (e) {
    console.log(e);
    return false;
  } finally {
    return true;
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
