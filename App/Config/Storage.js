import * as FileSystem from 'expo-file-system';

// const _storage_media_path =
// const _app_temp ;
// const _storage_database_path =
// const _storage_pending_soundfiles =
// const _storage_uploaded_soundfiles =
// const _data_dir =

const _db_dir = 'sqlite';
const _media_dir = 'media';
const _sound_dir = 'soundfiles';

const _pending_dir = 'pending';
const _uploaded_dir = 'uploaded';

const _app_storage = FileSystem.documentDirectory;
const _storage_soundfile_path = [_app_storage, _sound_dir].join('');


const StorageConfig = {
  APP_STORAGE: _app_storage,
  DIR_DB: _db_dir,
  DIR_MEDIA: _media_dir,
  DIR_PENDING: _pending_dir,
  DIR_SOUND: _sound_dir,
  DIR_UPLOADED: _uploaded_dir,
  STORAGE_SOUNDFILE_PATH : _storage_soundfile_path,
  DIR_DATA: 'data',
  APP_TEMP: FileSystem.cacheDirectory,
  STORAGE_MEDIA_PATH : [_app_storage, _media_dir].join(''),
  STORAGE_DATABASE_PATH : [_app_storage, _db_dir].join(''),
  STORAGE_PENDING_SOUNDFILES : [_storage_soundfile_path, _pending_dir].join('/'),
  STORAGE_UPLOADED_SOUNDFILES : [_storage_soundfile_path, _uploaded_dir].join('/'),
};

export { StorageConfig };
