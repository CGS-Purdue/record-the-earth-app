import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import * as FileSystem from 'expo-file-system';
// import Constants from 'expo-constants';
import ServerConfig from '../../Config/Server';
import { Base64 } from '../../Utilities/Base64';

// formData.append( "uploadToken"
// formData.append( "appVersion"   , "v3.0.0"
// formData.append( "bio"          , "Birds, Insects, Frogs and Reptiles, Mammals"
// formData.append( "description"  , "upload from new rte3"
// formData.append( "datetime"     , "08/04/2019 01:52"
// formData.append( "emotion"      , "Make me curious, Amaze me, Stress me out, Make me happy, Relax me"
// formData.append( "filename"     , 'FILE_NAME'
// formData.append( "geo"          , "Wind, Water, Thunder, Rain"
// formData.append( "anthro"       , "Machines, Vehicles, Sirens Alarms, Talking"
// formData.append( "LatLong"      , "40.422968,-86.922710"
// formData.append( "duration"     , "20"
// formData.append( "deviceModel"  , "motorola one X"
// formData.append( 'file'         , sound_file);
// formData.append( "osVersion"    , "Android OS 4.1.2 / API-16 (JZO54K/S7710XXAND2)"
// const FILE_DIR = FileSystem.documentDirectory;
// const FILE_NAME ='9B85E8EF-F901-43D5-8E3D-7BD66A9AE653_4_21_2019_08_04_01_45.mp4';
// const UPLOAD_SERVER_URL = 'https://recordtheearth.org/soundscape-android.php';
const _ServerConfig = ServerConfig;

class HttpsUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failedAttempts: 0,
      response: null,
      processing: false,
      upload_started: false,
      upload_ready: false,
      disabled: false,
      form_data: false,
      pending_data: this.props.dataBus ? this.props.dataBus : false,
    };
    this.uploadMode = 'xhr';
  }

  getFormData() {
    return this.state.form_data;
  }

  startUpload = () => {
    if (this.props.uploadMode === 'fetch') {
      this._fetchFormUpload();
    }

    if (this.props.uploadMode === 'xhr') {
      this._xhrFormUpload();
    }
    this.setState({
      upload_started: true,
    });
  };

  validateUploaderStatus = () => {
    if (this.state.processing) {
      return false;
    }
    if (!this.state.disabled && this.state.pending_data) {
      this._processFormData();
    }

    if (!this.state.disabled && this.state.upload_ready) {
      this.startUpload();
    }
  };

  _onPressHandler = () => {
    this.validateUploaderStatus();
    if (this.props.onPress) {
      return this.props.onPress();
    }
  };

  componentDidUpdate(prevProps) {
    if (!this.state.processing) {
      this.validateUploaderStatus();
    }
  }

  componentDidMount() {
    this.validateUploaderStatus();
  }

  // SHOULD COMAPRE FOR CHANGES BUT COULD GET COMPLICATED
  // IN THE GENERAL CASE, WE ONLY NEED THIS FOR ONE USE.
  // if(this.state.pendingFormData === this.state.uploadData) {
  //   return false,
  // }

  // dataEntries
  // xhrUpload
  // ADD LIKE
  // - [DATA[0][0], DATA[0][1]];
  // - [DATA[1][0], DATA[1][1]];


  _processFormData = () => {
    console.log('_processFormData');
    if (!this.state.pending_data) {
      return false;
    }
    this.setState({ processing: true });
    console.log('processing', true);

    const { data } = JSON.parse(Base64.decode(ServerConfig));

    console.log('data', data);
    console.log('data', typeof data, data);
    console.log('data', data.data);
    let formData = new FormData();

    if (!data) {
      let failedAttempts = this.state.failedAttempts;
      this.setState({ failedAttempts: failedAttempts + 1 });
      console.log('no form key - upload failed', failedAttempts);
      return false;
    } else {

      formData.append(
        'uploadToken',
        `${data[2]}-${data[0]}-${data[1]}-${data[3]}`
      );
      for (let entry of this.props.pending_data) {
        formData.append(entry[0], entry[1]);
        console.log('formData', formData);
      }
    }

    this.setState({
      processing: false,
      pending_data: false,
      form_data: formData,
      upload_ready: true,
    });
  };

  _fetchFormUpload = () => {
    console.log('ServerConfig', ServerConfig);
    const { hostname, pathname } = JSON.parse(Base64.decode(ServerConfig));
    let address = ['https:/', hostname, pathname].join('/');
    const formData = this.getFormData();
    console.log('formData', formData);
    fetch(address, {
      method: 'post',
      body: formData,
    })
      .then((res) => {
        console.log('done');
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  _xhrFormUpload = () => {
    const { hostname, pathname } = JSON.parse(Base64.decode(ServerConfig));
    let address = ['https:/', hostname, pathname].join('/');
    const formData = this.getFormData();
    console.log('formData', formData);

    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        console.warn(e);
        return;
      }
      if (request.status === 200) {
        console.log('success', request.responseText);
      } else {
        console.warn('error', e);
      }
      request.open('POST', address);
      request.send(formData);
    };
  };

  render() {
    return (
      <View style={Styles.container}>
        <Button
          title={'UPLOAD'}
          color={this.state.upload_ready ? '#841584' : '#777777'}
          onPress={this._onPressHandler}
          onReady={this.props.onReady}
          dataBus={this.props.dataBus}
          onSuccess={this.props.onSuccess}
          onFail={this.props.onFail}
          disabled={this.state.disabled}
        />
        <Text style={Styles.instructions}>{'Progress bar here'}</Text>
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

export { HttpsUpload };
