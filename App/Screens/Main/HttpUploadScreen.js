import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Base64 } from '../../Utilities/Base64';
import { getAppData } from '../../Utilities/AppData';
import { json2FormData, xhrPost } from '../../Utilities/Networking';
import { object_keys_checksum } from '../../Utilities/Functions';
import { getAudioFileFromTemp } from '../../Utilities/Filesystem';
import { StorageConfig } from '../../Config/Storage';
import ServerConfig from '../../Config/Server';

// const FILE_PATH = 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540matt.harris%252Frecord-the-earth-3/soundfiles/uploaded';
// const FILE_PATH = 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540matt.harris%252Frecord-the-earth-3/soundfiles';
const FILE_PATH = 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540matt.harris%252Frecord-the-earth-3/soundfiles/pending';
const FILE_NAME = 'recording-6894eb96-4785-4605-bd63-cdea2eec4c02.m4a';
const FILE_URI = [FILE_PATH, FILE_NAME].join('/');

function getUploadAddress() {
  if (__DEV__) {
    return 'https://dev.recordtheearth.org/soundscape-android.php';
    // return 'http://localhost:5000/api/soundscape/upload-android.php';
    // return 'http://localhost:5000/soundscape-android.php';
  } else {
    return 'https://recordtheearth.org/soundscape-android.php';
  }
}

const UPLOAD_SERVER_URL = getUploadAddress();



// const FILE_URI = [ServerConfig.STORAGE_PENDING_SOUNDFILES, FILE_NAME].join('/');
/// try {
///   const filedata = await FileSystem.readAsStringAsync(FILE_URI, {
///   encoding: FileSystem.EncodingType.Base64,
/// })
/// const formData = getFormData();
/// formData.append('file', _data);
/// formData.append('file', ab2str(ab2str(data));
/// formData.append('file', data);
/// let transport = new Blob([data]);
/// formData.append('file', encodeURI(data), 'filename.mp4');
/// formData.append('file', {
///  uri: FILE_URI,
///  type: 'audio/m4a',
///  name: FILE_NAME
/// });
function getFormData() {
  let formData = new FormData();
  formData.append('uploadToken', 'AIzaSyCj-xcU7l0a-Ryh4Hqkgam-cqh7qDQSX7Q');
  formData.append('securityID', 'B064ds6l5and6c9J6rhfC325ZSP4dZbX');
  formData.append('appVersion', 'v3.0.0');
  formData.append('bio', 'Birds, Insects, Frogs and Reptiles, Mammals');
  formData.append('description', 'upload from new rte3');
  formData.append('datetime', '08/04/2019 01:52');
  formData.append('emotion', 'Make me curious, Amaze me, Stress me out, Make me happy, Relax me' );
  formData.append('geo', 'Wind, Water, Thunder, Rain');
  formData.append('anthro', 'Machines, Vehicles, Sirens Alarms, Talking');
  formData.append('LatLong', '40.422968,-86.922710');
  formData.append('duration', '20');
  formData.append('deviceModel', 'Android');
  formData.append('osVersion', 'Android OS 4.1.2 / API-16 (JZO54K/S7710XXAND2)');
  formData.append('filename', FILE_NAME);
  return formData;
}


function getJsonData() {
  var data = {
    anthro: 'Machines, Vehicles, Sirens Alarms, Talking',
    appVersion: 'v3.0.0',
    securityID: 'B064ds6l5and6c9J6rhfC325ZSP4dZbX',
    bio: 'Birds, Insects, Frogs and Reptiles, Mammals',
    datetime: '08/04/2019 01:52',
    description: 'upload from new rte3',
    deviceModel: 'motorola one X',
    duration: '20',
    emotion: 'Make me curious, Amaze me, Stress me out, Make me happy, Relax me',
    "filename": `"${FILE_NAME}"`,
    geo: 'Wind, Water, Thunder, Rain',
    LatLong: '40.422968,-86.922710',
    osVersion: 'Android OS 4.1.2 / API-16 (JZO54K/S7710XXAND2)',
    uploadToken: 'AIzaSyCj-xcU7l0a-Ryh4Hqkgam-cqh7qDQSX7Q',
  };
  return data;
}



class HttpUploadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileinfo: false,
      filedata_size: null,
      filesize: null,
      fileuri: null,
    };

  }

  componentDidMount() {

  }

  initXMLForm = async () => {
    try {
      const jsonData = getJsonData();
      const formData = getFormData();
      let filedata = await FileSystem.readAsStringAsync(FILE_URI)
      formData.append("file", { uri: FILE_URI, type: 'audio/m4a', name: FILE_NAME });
      // formData.append("file", { uri: FILE_URI, type: 'audio/m4a', name: FILE_NAME });
      //   // uri: FILE_URI
      // });

      // console.log('file length', filedata, filedata.length);
      //
      // var sendData = new Blob([
      //   JSON.stringify(jsonData, null, 2)
      //   ], {type : 'application/json'}
      // );
      let uploadOptions = {
        // contentType: 'text/plain',
        contentType: 'multipart/form-data',
        // contentType: 'application/x-www-form-urlencoded',
        // contentType: 'application/json',
        // contentLength: filedata.length,
      };
      // jsonData.file = filedata;

      // Display the key/value pairs
      // let data = [];
      // for(var pair of formData.entries()) {
      //   console.log(pair[0]+ ', '+ encodeURI(pair[1]));
      //   data.push(pair[0] + '='+ encodeURI(pair[1]));
      // }
      // xhrPost(UPLOAD_SERVER_URL, data.join("&"),  uploadOptions);
      // xhrPost(UPLOAD_SERVER_URL, sendData,  uploadOptions);
      xhrPost(UPLOAD_SERVER_URL, formData,  uploadOptions);
      // xhrPost(UPLOAD_SERVER_URL, jsonData, uploadOptions);
      // xhrPost(UPLOAD_SERVER_URL, JSON.stringify([jsonData, filedata]), uploadOptions);

    } catch (e) {
      console.log(e);
      return false;
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>Upload Test</Text>

        <Text style={Styles.instructions}>{'File Info:'}</Text>

        <Button
          onPress={() => this.initXMLForm()}
          title="XML HTTL FormUpload"
          color="#841584"
        />

        <Text style={Styles.instructions}>{'File Info:'}</Text>
        <Text style={Styles.instructions}>{this.state.fileinfo}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export { HttpUploadScreen };
