import React, { Component } from 'react';
import * as Permissions from 'expo-permissions';
import { View } from 'react-native';
import { Platform } from 'react-native';
import { CenterView, RootView } from '../Views';
import { MonoText } from '../Text';
import { AudioRecord } from './AudioRecord';

async function askForAudioPermissions () {
  if (__DEV__ && Platform.OS === 'web') {
    let response = { status: 'granted' };
    this.setState({
      haveRecordingPermissions: response.status === 'granted',
    });
  } else {
    let response = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING,
      Permissions.CAMERA_ROLL
    );
    this.setState({
      haveRecordingPermissions: response.status === 'granted',
    });
  }
}

class AudioRecordWithPermission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveRecordingPermissions: false,
    }
    this.askForAudioPermissions = askForAudioPermissions;
  }

  componentDidMount() {
    this.askForAudioPermissions();
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

export { AudioRecordWithPermission };
