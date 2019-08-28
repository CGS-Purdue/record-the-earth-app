
function getFiles() {
  this.state = {}
  this.state.selectedImages.forEach((item, i) => {
    data.append("doc[]", {
      uri: item.uri,
      type: "image/jpeg",
      name: item.filename || `filename${i}.jpg`,
    })
  })
}

function uploadForm() {
  fetch(`${config.apiBase}/load/${this.props.id}/uploadconfirmation`, {
    method: "post",
    headers: {
      Accept: "application/x-www-form-urlencoded",
      Authorization: `Bearer ${this.props.user.token}`,
    },
    body: data,
  }).then(res => res.json())
  .then(res => {
    Alert.alert(
      "Success",
      "Bill of Loading Uploaded Successfully!",
      [{ text: "OK", onPress: () => that.props.close() }],
      { cancelable: false }
    );
  })
  .catch(err => {ThemeColors
    console.error("error uploading images: ", err);
  });
}

function rnfs() {
  // require the module
  var RNFS = require('react-native-fs');

  // get a list of files and directories in the main bundle
  // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  RNFS.readDir(RNFS.MainBundlePath)
    .then((result) => {
      console.log('GOT RESULT', result);

      // stat the first file
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .then((statResult) => {
      if (statResult[0].isFile()) {
        // if we have a file, read it
        return RNFS.readFile(statResult[1], 'utf8');
      }

      return 'no file';
    })
    .then((contents) => {
      // log the file contents
      console.log(contents);
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
}
