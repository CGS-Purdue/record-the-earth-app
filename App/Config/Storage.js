import * as FileSystem from 'expo-file-system';

const _app_temp = FileSystem.cacheDirectory;
const _app_storage = FileSystem.documentDirectory;

const _data_dir = 'data';
const _db_dir = 'sqlite';
const _media_dir = 'media';
const _pending_dir = 'pending';
const _sound_dir = 'soundfiles';
const _uploaded_dir = 'uploaded';

const _storage_media_path = [_app_storage, _media_dir].join('');
const _storage_database_path = [_app_storage, _db_dir].join('');
const _storage_soundfile_path = [_app_storage, _sound_dir].join('');
const _storage_pending_soundfiles = [_storage_soundfile_path,  _pending_dir].join('/');
const _storage_uploaded_soundfiles = [_storage_soundfile_path,  _uploaded_dir].join('/');

const StorageConfig = {
  APP_TEMP: _app_temp,
  APP_STORAGE: _app_storage,
  DIR_DATA: _data_dir,
  DIR_DB: _db_dir,
  DIR_MEDIA: _media_dir,
  DIR_PENDING: _pending_dir,
  DIR_SOUND: _sound_dir,
  DIR_UPLOADED: _uploaded_dir,
  STORAGE_MEDIA_PATH : _storage_media_path,
  STORAGE_DATABASE_PATH : _storage_database_path,
  STORAGE_SOUNDFILE_PATH : _storage_soundfile_path,
  STORAGE_PENDING_SOUNDFILES : _storage_pending_soundfiles,
  STORAGE_UPLOADED_SOUNDFILES : _storage_uploaded_soundfiles,
};

export { StorageConfig };
