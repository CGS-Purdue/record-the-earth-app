import React, { Component } from 'react';
import * as Permissions from 'expo-permissions';
import { View } from 'react-native';
import { Platform } from 'react-native';
import { CenterView, RootView } from '../Views';
import { MonoText } from '../Text';
import { AudioRecord } from './AudioRecord';

class AudioRecorderPermission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveRecordingPermissions: false,
    }
    this.askForAudioPermissions = this.askForAudioPermissions.bind(this);
  }

  componentDidMount() {
    this.askForAudioPermissions();
  }


  async askForAudioPermissions () {

    console.log("GETTING PERMISSION");
    if (__DEV__ && Platform.OS === 'web') {
       { status: 'granted' };
       console.log('skipping perms on web for development');
      this.setState({
        haveRecordingPermissions: 'granted',
      });
    }

    else {
      const { status, expires, permissions } = await Permissions.getAsync(
        Permissions.AUDIO_RECORDING,
        Permissions.CAMERA_ROLL
      );
      if (status !== 'granted') {
        alert('Hey! You might want to enable notifications for my app, they are good.');
      }
      if (status !== 'granted') {
        alert('Hey! You heve not enabled selected permissions');
      }
      this.setState({
        haveRecordingPermissions: status
      });
    }
  }

  render() {
    if (!this.state.haveRecordingPermissions) {
      return (
        <RootView>
          <CenterView>
            <MonoText>
            {'You must enable audio recorder permissions in order to use this app.'}
            </MonoText>
          </CenterView>
        </RootView>
      );
    } else {
      return (
        <View>
          <AudioRecord />
        </View>
      );
    }
  }
}

export { AudioRecorderPermission };
