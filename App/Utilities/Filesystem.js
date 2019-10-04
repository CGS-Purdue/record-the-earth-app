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
const MEDIA_PATH = StorageConfig.STORAGE_MEDIA_PATH;
const DATABASE_PATH = StorageConfig.STORAGE_DATABASE_PATH;
const SOUNDFILE_PATH = StorageConfig.STORAGE_SOUNDFILE_PATH;
const PENDING_SOUNDFILES = StorageConfig.STORAGE_PENDING_SOUNDFILES;
const UPLOADED_SOUNDFILES = StorageConfig.STORAGE_UPLOADED_SOUNDFILES;
const DIR_DATA = StorageConfig.DIR_DATA;
const DIR_DB = StorageConfig.DIR_DB;
const DIR_MEDIA = StorageConfig.DIR_MEDIA;
const DIR_PENDING = StorageConfig.DIR_PENDING;
const DIR_SOUND = StorageConfig.DIR_SOUND;
const DIR_UPLOADED = StorageConfig.DIR_UPLOADED;



async function getAudioFileFromTemp(file_name) {
    const target_uri = [PENDING_SOUNDFILES, file_name].join('/');
    try {
      const file_info = await FileSystem.getInfoAsync(target_uri, { md5: true })
          .then(({ uri }) => {
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
  const file_name = file_path.split('/').slice(-1);
  const temp_path = [PENDING_SOUNDFILES, file_name].join('/');
  try {
    // await FileSystem.moveAsync({
    //   from: file_path,
    //   to: storage_path
    // })
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
    console.log('[updatePendingtToUploaded]',result);
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
      console.log(filedata.trim().slice(0,1000));
      console.log('File length:', filedata.length);
      console.log('File uri: ', fileUri);

    } catch (e) {console.log('error', e);}
  })
  .catch((er) => {console.log(er);})
  .done(() => {
    console.log('file data received');
  });
};


async function saveAudioRecordingFile(file_uri) {
  const storage_path = [APP_STORAGE, DIR_MEDIA].join('');
  const file_name = file_uri.split('/').slice(-1);
  const new_uri = [storage_path, file_name].join('/');
  // console.log("trying save audio file", file_uri);
  // console.log("\n\ntolocation\t", new_uri);

  try {
    // await FileSystem.moveAsync({
    //   from: file_uri,
    //   to: storage_path
    // })
    await FileSystem.copyAsync({
      from: file_uri,
      to: new_uri,
    });
  } catch (error) {
    console.log(error);
  }

  let file_info = await FileSystem.getInfoAsync(new_uri, { md5: true });
}


async function discardAudioRecordingFile(_file) {
  const storage_path = [APP_STORAGE, DIR_MEDIA].join('');
  const file_name = _file.split('/').slice(-1);
  try {
    await FileSystem.deleteAsync(_file);
  } catch (error) {
    console.log(error);
  }
}


async function createAppStorageDirectory(dirName) {
  let result = await FileSystem.makeDirectoryAsync([APP_STORAGE, dirName].join(''));
  return result;
}


async function existOrCreateAppDirectory(dirName, options) {
  let status_check = false;

  try {
    status_check = await FileSystem.getInfoAsync([APP_STORAGE, dirName].join(''))
     .then((result) => {
        if (!result.exists) {
          console.log(dirName + ' does not exist, creating folder...');
          return createAppStorageDirectory(dirName);
        } else {
          return true;
        }
      }).catch((err) => { console.log(err);
      }).done(()=>{
        if (options.final){
          return false;
        }

        existOrCreateAppDirectory(dirName, { final: true });
      });

  } catch (e) {
    console.log(e);
    return false;
  } finally {
    console.log(status_check);
    return true;
  }
}


async function getAppStorageContent(path) {
  try {
    await FileSystem.readDirectoryAsync([APP_STORAGE, path].join('')).then(
      (result) => {
        if (!result) {
          console.log(`no content found at '${path}'`);
        }
        console.log(`Contents at '${path}':`);
        console.log(result);
      });
  } catch (error) {
    console.log(error);
  }
}

async function checkAppDirectoriesStatus() {
  try {
    await existOrCreateAppDirectory(DIR_SOUND,  {final: false})
    .then((result) => {
      if (!result.exists) {
          console.log('Soundfile storage directories do not exist, creating folder', result);
          console.log('result', DIR_SOUND, result);
          existOrCreateAppDirectory([DIR_SOUND, DIR_PENDING].join('/'), {final: false});
          existOrCreateAppDirectory([DIR_SOUND, DIR_UPLOADED].join('/'), {final: false});
        }
    });
  } catch (e) {
      console.log(e);
    return false;
  } finally {
    return true;
  }
}



export {
  checkAppDirectoriesStatus,
  saveAudioRecordingFile,
  saveTempAudioFile,
  getAppStorageContent,
  inspectSoundfile,
  updatePendingtToUploaded,
  getAudioFileFromTemp,
  discardAudioRecordingFile,
};
