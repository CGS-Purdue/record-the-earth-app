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

const FILE_NAME = 'recording-f395faf1-ae31-49f2-9a81-214a75560362.m4a.mp4';
const FILE_URI = [ServerConfig.STORAGE_PENDING_SOUNDFILES, FILE_NAME].join('/');
/// try {
///   const filedata = await FileSystem.readAsStringAsync(FILE_URI, {
///   encoding: FileSystem.EncodingType.Base64,
/// })
/// const formData = getFormData();
/// formData.append('file', _data);
/// formData.append('file', ab2str(ab2str(data));
/// formData.append('file', datxa);
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
  formData.append(
    'emotion',
    'Make me curious, Amaze me, Stress me out, Make me happy, Relax me'
  );
  formData.append('filename', FILE_NAME);
  formData.append('geo', 'Wind, Water, Thunder, Rain');
  formData.append('anthro', 'Machines, Vehicles, Sirens Alarms, Talking');
  formData.append('LatLong', '40.422968,-86.922710');
  formData.append('duration', '20');
  formData.append('deviceModel', 'Android');
  formData.append(
    'osVersion',
    'Android OS 4.1.2 / API-16 (JZO54K/S7710XXAND2)'
  );
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
    emotion:
      'Make me curious, Amaze me, Stress me out, Make me happy, Relax me',
    filename: FILE_NAME,
    geo: 'Wind, Water, Thunder, Rain',
    LatLong: '40.422968,-86.922710',
    osVersion: 'Android OS 4.1.2 / API-16 (JZO54K/S7710XXAND2)',
    uploadToken: 'AIzaSyCj-xcU7l0a-Ryh4Hqkgam-cqh7qDQSX7Q',
  };
  return data;
}

function getUploadAddress() {
  if (__DEV__) {
    return 'https://dev.recordtheearth.org/soundscape-android.php';
  } else {
    return 'https://recordtheearth.org/soundscape-android.php';
  }
}

const UPLOAD_SERVER_URL = getUploadAddress();

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

  componentDidMount() {}

  initXMLForm = async () => {
    const formData = await getFormData();
    let uploadOptions = {};
    try {
      await FileSystem.readAsStringAsync(FILE_URI)
        .then((filedata) => {
          uploadOptions.contentLength = filedata.length;
          console.log('file length', filedata.length);
          formData.append('file', {
            uri: FILE_URI,
            type: 'audio/m4a',

            name: FILE_NAME,
          });
        })
        .catch((er) => {
          console.log(er);
        })
        .done(() => {
          xhrPost(formData);
        });
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
