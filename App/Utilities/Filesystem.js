import * as FileSystem from 'expo-file-system';

const APP_STORAGE = FileSystem.documentDirectory;
const APP_TEMP = FileSystem.cacheDirectory;
const MEDIA_DIR = 'media';
const DATA_DIR = 'data';
const DB_DIR = 'SQLite';
const prefix = 'file://';

async function saveAudioRecordingFile (file_uri) {
  // const storage_path = [APP_STORAGE, MEDIA_DIR].join('');
  const storage_path = [APP_STORAGE, MEDIA_DIR].join('');
  const file_name = file_uri.split('/').slice(-1);
  const new_uri = [storage_path,file_name].join('/');
  // console.log("trying save audio file", file_uri);
  // console.log("\n\ntolocation\t", new_uri);

  try {
    // await FileSystem.moveAsync({
    //   from: file_uri,
    //   to: storage_path
    // })
    await FileSystem.copyAsync({
      from: file_uri,
      to: new_uri
    })
  } catch (error) {
    console.log(error)
  }

  let file_info = await FileSystem.getInfoAsync(new_uri, {md5: true});
  console.log("info", file_info);
}

async function createAppStorageDirectory(dirName) {
  await FileSystem.makeDirectoryAsync([
    APP_STORAGE,
    dirName
  ].join(''));
}


async function checkAppDirectoriesStatus() {
  // await FileSystem.getInfoAsync(APP_STORAGE).then((result) => {)
  await FileSystem.getInfoAsync([APP_STORAGE, MEDIA_DIR].join(''))
  .then((result)=>{
    if(!result.exists){
      console.log('media storage does not exist, creating folder');
      createAppStorageDirectory(MEDIA_DIR);
    }
  })
}

export { checkAppDirectoriesStatus, saveAudioRecordingFile };

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
