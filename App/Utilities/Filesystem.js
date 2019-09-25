import * as FileSystem from 'expo-file-system';

export const APP_STORAGE = FileSystem.documentDirectory;
export const APP_TEMP = FileSystem.cacheDirectory;
export const MEDIA_DIR = 'media';
export const TEMP_DIR = 'soundscape_temp';
export const DATA_DIR = 'data';
export const DB_DIR = 'SQLite';
export const prefix = 'file://';


// FileSystem.EncodingType.UTF8
// FileSystem.EncodingType.Base64
// FileSystem.readAsStringAsync(fileUri, options)
// FileSystem.deleteAsync(fileUri, options)
// FileSystem.moveAsync(options)
// FileSystem.copyAsync(options)
// FileSystem.makeDirectoryAsync(fileUri, options)
// FileSystem.readDirectoryAsync(fileUri)
// FileSystem.downloadAsync(uri, fileUri, options)
// FileSystem.createDownloadResumable(uri, fileUri, options, callback, resumeData)
// FileSystem.DownloadResumable.downloadAsync()
// FileSystem.getContentUriAsync(fileUri)


async function getAudioFileFromTemp(file_name) {
  const storage_path = [APP_STORAGE, TEMP_DIR].join('');
  const target_uri = [storage_path, file_name].join('/');
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

async function saveTempAudioFile(file_path) {
  const storage_path = [APP_STORAGE, TEMP_DIR].join('');
  const file_name = file_path.split('/').slice(-1);
  const temp_path = [storage_path, file_name].join('/');
  console.log(temp_path);
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

  let file_info = await FileSystem.getInfoAsync(temp_path, { md5: true });
}



async function saveAudioRecordingFile(file_uri) {
  const storage_path = [APP_STORAGE, MEDIA_DIR].join('');
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
  const storage_path = [APP_STORAGE, MEDIA_DIR].join('');
  const file_name = _file.split('/').slice(-1);
  try {
    await FileSystem.deleteAsync(_file);
  } catch (error) {
    console.log(error);
  }
  let status_check = await FileSystem.getInfoAsync(_file, { md5: true });
}



async function createAppStorageDirectory(dirName) {
  await FileSystem.makeDirectoryAsync([APP_STORAGE, dirName].join(''));
}


async function checkAppDirectoriesStatus() {
  let fsStatus = {
    appDir: false,
    mediaDir: false,
    tempDir: false,
  };
  this.fsStatus = fsStatus;
  await FileSystem.getInfoAsync(APP_STORAGE).then((result) => {
    this.fsStatus.appDir  = true;
  });

  await FileSystem.getInfoAsync([APP_STORAGE, MEDIA_DIR].join('')).then(
    (result) => {
      if (!result.exists) {
        console.log('media storage does not exist, creating folder');
        createAppStorageDirectory(MEDIA_DIR);
        this.fsStatus.mediaDir = true;
      }
    }
  );
  await FileSystem.getInfoAsync([APP_STORAGE, TEMP_DIR].join('')).then(
    (result) => {
      if (!result.exists) {
        console.log('temp storage does not exist, creating folder');
        createAppStorageDirectory(TEMP_DIR);
        this.fsStatus.tempDir = true;
      }
    }
  );
  return this.fsStatus;
}



export {
  checkAppDirectoriesStatus,
  saveAudioRecordingFile,
  saveTempAudioFile,
  getAudioFileFromTemp,
  discardAudioRecordingFile,
};
