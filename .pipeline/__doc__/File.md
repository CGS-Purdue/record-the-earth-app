
FileSystem.getInfoAsync()

Arguments

`fileUri` (string) -- file:// URI to the file or directory, or a URI returned by CameraRoll.getPhotos().
`options` (object) -- A map of options:
`md5` (boolean) -- Whether to return the MD5 hash of the file. false by default.
`size` (boolean) -- Whether to include the size of the file if operating on a source from CameraRoll.getPhotos() (skipping this can prevent downloading the file if it's stored in iCloud, for example). The size is always returned for file:// locations.

Returns

If no item exists at this URI, returns a Promise that resolves to `{ exists: false, isDirectory: false }`.

Else returns an object with the following fields:

`exists` (boolean) -- true.
`isDirectory` (boolean) -- true if this is a directory, false if it is a file
`modificationTime` (number) -- The last modification time of the file expressed in seconds since epoch.
`size` (number) -- The size of the file in bytes. If operating on a source from CameraRoll.getPhotos(), only present if the size option was truthy.
`uri` (string) -- A file:// URI pointing to the file. This is the same as the fileUri input parameter.
`md5` (string) -- Present if the md5 option was truthy. Contains the MD5 hash of the file.



FileSystem.readAsStringAsync(fileUri, options)

Read the entire contents of a file as a string. Binary will be returned in raw format, you will need to append data:image/png;base64, to use it as Base64.


__Arguments__

  - fileUri (string) -- file:// URI to the file or directory.
  - options (object) -- Optional props that define how a file must be read.
  - encoding (EncodingType) -- The encoding format to use when reading the file. Options: FileSystem.EncodingType.UTF8, FileSystem.EncodingType.Base64. Default is FileSystem.EncodingType.UTF8.
  - length (number) -- Optional number of bytes to read. This option is only used when encoding: FileSystem.EncodingType.Base64 and position is defined.
  - position (number) -- Optional number of bytes to skip. This option is only used when encoding: FileSystem.EncodingType.Base64 and length is defined.


__Returns__

A Promise that resolves to a string containing the entire contents of the file.
FileSystem.writeAsStringAsync(fileUri, contents, options)
Write the entire contents of a file as a string.


__Arguments__

  - fileUri (string) -- file:// URI to the file or directory.
  - contents (string) -- The string to replace the contents of the file with.
  - options (object) -- Optional props that define how a file must be written.
  - encoding (string) -- The encoding format to use when writing the file. Options: FileSystem.EncodingType.UTF8, FileSystem.EncodingType.Base64. Default is FileSystem.EncodingType.UTF8
FileSystem.deleteAsync(fileUri, options)
Delete a file or directory. If the URI points to a directory, the directory and all its contents are recursively deleted.


__Arguments__

  - fileUri (string) -- file:// URI to the file or directory.
  - options (object) -- A map of options:
  - idempotent (boolean) -- If true, don't throw an error if there is no file or directory at this URI. false by default.
FileSystem.moveAsync(options)
Move a file or directory to a new location.


__Arguments__

  - options (object) -- A map of options:
  - from (string) -- file:// URI to the file or directory at its original location.
  - to (string) -- file:// URI to the file or directory at what should be its new location.
FileSystem.copyAsync(options)
Create a copy of a file or directory. Directories are recursively copied with all of their contents.


__Arguments__

  - options (object) -- A map of options:
  - from (string) -- file:// URI to the file or directory to copy, or a URI returned by CameraRoll.getPhotos().
  - to (string) -- The file:// URI to the new copy to create.
FileSystem.makeDirectoryAsync(fileUri, options)
Create a new empty directory.


__Arguments__

  - fileUri (string) -- file:// URI to the new directory to create.
  - options (object) -- A map of options:
  - intermediates (boolean) -- If true, create any non-existent parent directories when creating the directory at fileUri. If false, raises an error if any of the intermediate parent directories does not exist or if the child directory already exists. false by default.
FileSystem.readDirectoryAsync(fileUri)
Enumerate the contents of a directory.


__Arguments__

  - fileUri (string) -- file:// URI to the directory.


__Returns__
A Promise that resolves to an array of strings, each containing the name of a file or directory contained in the directory at fileUri.
FileSystem.downloadAsync(uri, fileUri, options)
Download the contents at a remote URI to a file in the app's file system. The directory for a local file uri must exist prior to calling this function.

__Example__

```
FileSystem.downloadAsync(
  'http://techslides.com/demos/sample-videos/small.mp4',
  FileSystem.documentDirectory + 'small.mp4'
)
  .then(({ uri }) => {
    console.log('Finished downloading to ', uri);
  })
  .catch(error => {
    console.error(error);
  });
```

__Arguments__

  - url (string) -- The remote URI to download from.
  - fileUri (string) -- The local URI of the file to download to. If there is no file at this URI, a new one is created. If there is a file at this URI, its contents are replaced. The directory for the file must exist.
  - options (object) -- A map of options:
  - headers (object) -- An object containing all the HTTP header fields and their values for the download network request. The keys and values of the object are the header names and values respectively.
  - md5 (boolean) -- If true, include the MD5 hash of the file in the returned object. false by default. Provided for convenience since it is common to check the integrity of a file immediately after downloading.


__Returns__


    Returns a Promise that resolves to an object with the following fields:

  - uri (string) -- A file:// URI pointing to the file. This is the same as the fileUri input parameter.
  - status (number) -- The HTTP status code for the download network request.
  - headers (object) -- An object containing all the HTTP header fields and their values for the download network request. The keys and values of the object are the header names and values respectively.
  - md5 (string) -- Present if the md5 option was truthy. Contains the MD5 hash of the file.
FileSystem.createDownloadResumable(uri, fileUri, options, callback, resumeData)
Create a DownloadResumable object which can start, pause, and resume a download of contents at a remote URI to a file in the app's file system. Please note: You need to call downloadAsync(), on a DownloadResumable instance to initiate the download. The DownloadResumable object has a callback that provides download progress updates. Downloads can be resumed across app restarts by using AsyncStorage to store the DownloadResumable.savable() object for later retrieval. The savable object contains the arguments required to initialize a new DownloadResumable object to resume the download after an app restart. The directory for a local file uri must exist prior to calling this function.


__Arguments__

  - url (string) -- The remote URI to download from.
  - fileUri (string) -- The local URI of the file to download to. If there is no file at this URI, a new one is created. If there is a file at this URI, its contents are replaced. The directory for the file must exist.
  - options (object) -- A map of options:
  - md5 (boolean) -- If true, include the MD5 hash of the file in the returned object. false by default. Provided for convenience since it is common to check the integrity of a file immediately after downloading.
  - headers (object) -- An object containing any additional HTTP header fields required for the request. The keys and values of the object are the header names and values respectively.
  - callback (function) -- This function is called on each data write to update the download progress. An object with the following fields are passed:
  - totalBytesWritten (number) -- The total bytes written by the download operation.
  - totalBytesExpectedToWrite (number) -- The total bytes expected to be written by the download operation.
  - resumeData (string) -- The string which allows the api to resume a paused download. This is set on the DownloadResumable object automatically when a download is paused. When initializing a new DownloadResumable this should be null.
FileSystem.DownloadResumable.downloadAsync()
Download the contents at a remote URI to a file in the app's file system.


__Returns__


    Returns a Promise that resolves to an object with the following fields:

  - uri (string) -- A file:// URI pointing to the file. This is the same as the fileUri input parameter.
  - status (number) -- The HTTP status code for the download network request.
  - headers (object) -- An object containing all the HTTP header fields and their values for the download network request. The keys and values of the object are the header names and values respectively.
  - md5 (string) -- Present if the md5 option was truthy. Contains the MD5 hash of the file.
FileSystem.DownloadResumable.pauseAsync()
Pause the current download operation. resumeData is added to the DownloadResumable object after a successful pause

__operation. Returns an object that can be saved with AsyncStorage for future retrieval (the same object that is__ returned from calling FileSystem.DownloadResumable.savable(). Please see the example below.


__Returns__


    Returns a Promise that resolves to an object with the following fields:

  - url (string) -- The remote URI to download from.
  - fileUri (string) -- The local URI of the file to download to. If there is no file at this URI, a new one is created. If there is a file at this URI, its contents are replaced.
  - options (object) -- A map of options:
  - md5 (boolean) -- If true, include the MD5 hash of the file in the returned object. false by default. Provided for convenience since it is common to check the integrity of a file immediately after downloading.
  - resumeData (string) -- The string which allows the API to resume a paused download.
FileSystem.DownloadResumable.resumeAsync()
Resume a paused download operation.


__Returns__


    Returns a Promise that resolves to an object with the following fields:

  - uri (string) -- A file:// URI pointing to the file. This is the same as the fileUri input parameter.
  - status (number) -- The HTTP status code for the download network request.
  - headers (object) -- An object containing all the HTTP header fields and their values for the download network request. The keys and values of the object are the header names and values respectively.
  - md5 (string) -- Present if the md5 option was truthy. Contains the MD5 hash of the file.
FileSystem.DownloadResumable.savable()


    Returns an object which can be saved with AsyncStorage for future retrieval.



__Returns__


    Returns an object with the following fields:

  - url (string) -- The remote URI to download from.
  - fileUri (string) -- The local URI of the file to download to. If there is no file at this URI, a new one is created. If there is a file at this URI, its contents are replaced.
  - options (object) -- A map of options:
  - md5 (boolean) -- If true, include the MD5 hash of the file in the returned object. false by default. Provided for convenience since it is common to check the integrity of a file immediately after downloading.
  - resumeData (string) -- The string which allows the api to resume a paused download.
FileSystem.getContentUriAsync(fileUri)
Take a file:// URI and convert it into content URI (content://) so that it can be access by other applications outside of Expo.


Example

```
FileSystem.getContentUriAsync(uri).then(cUri => {
  console.log(cUri);
  IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
    data: cUri.uri,
    flags: 1
  });
});
```

__Arguments__

  - fileUri (string) -- The local URI of the file. If there is no file at this URI, an exception will be thrown.


__Returns__


    Returns a Promise that resolves to an object with the following fields:

  - uri (string) -- A content:// URI pointing to the file. This is the same as the fileUri input parameter but in different format.
