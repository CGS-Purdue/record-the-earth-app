import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, View } from 'react-native';

import * as FileSystem from 'expo-file-system';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});


var tagText = {
  tagBird: 'Birds',
  tagInsect: 'Insects',
  tagFrogs: 'Frogs and Reptiles',
  tagMammals: 'Mammals',
  tagWind: 'Wind' ,
  tagWater: 'Water',
  tagThunder: 'Thunder',
  tagRain: 'Rain',
  tagVehicles: 'Vehicles',
  tagSirens: 'Sirens / Alarms',
  tagTalk: 'Talking',
  tagMachines: 'Machines'
};

export default class App extends Component {

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>Upload Test</Text>
        <Text style={Styles.instructions}>To get started, edit App.js</Text>
        <Button
          onPress={xhrUpload}
          title="UPLOAD"
          color="#841584"
          accessibilityLabel="PUSH TO UPLOAD" />
      </View>
    );
  }
}


const FILE_DIR = FileSystem.documentDirectory;
const FILE_NAME = '9B85E8EF-F901-43D5-8E3D-7BD66A9AE653_4_21_2019_08_04_01_45.mp4';
// const FILE_NAME = 'test.mp4';
const UPLOAD_SERVER_URL = "https://recordtheearth.org/soundscape-android.php";

function getFormData(){
  let formData = new FormData();

  formData.append( "uploadToken" , "AIzaSyCj-xcU7l0a-Ryh4Hqkgam-cqh7qDQSX7Q");
  formData.append( "appVersion" , "v3.0.0");
  formData.append( "bio" , "Birds, Insects, Frogs and Reptiles, Mammals");
  formData.append( "description" , "upload from new rte3");
  formData.append( "datetime" , "08/04/2019 01:52");
  formData.append( "emotion" , "Make me curious, Amaze me, Stress me out, Make me happy, Relax me");
  formData.append( "filename" , FILE_NAME);
  formData.append( "geo" , "Wind, Water, Thunder, Rain");
  formData.append( "anthro" , "Machines, Vehicles, Sirens Alarms, Talking");
  formData.append( "LatLong" , "40.422968,-86.922710");
  formData.append( "duration" , "20");
  formData.append( "deviceModel" , "motorola one X");
  formData.append( "osVersion" , "Android OS 4.1.2 / API-16 (JZO54K/S7710XXAND2)");

  var sound_file = `${FILE_DIR}${FILE_NAME}`;
  formData.append('file', sound_file);

  console.log('formData', formData);
  return formData;
}

function staticFormUpload() {

  const formData = getFormData();

  fetch(UPLOAD_SERVER_URL, {
    method: 'post',
    body: formData,
  }).then(res => {
    console.log('done')
    console.log(res)
  }).catch(error => {
    console.error(error)
  });
}

function xhrUpload() {
  const formData = getFormData();
  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }
    if (request.status === 200) {
      console.log('success', request.responseText);
    } else {
      console.warn('error');
    }
  };
  request.open('POST', UPLOAD_SERVER_URL);
  request.send(formData);

}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
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
