import React, { Component } from 'react';
import * as Permissions from 'expo-permissions';
import { Platform, Button , View } from 'react-native';

import { CenterView, RootView } from '../Views';
import { MonoText } from '../Text';
import { AudioRecord } from './AudioRecord';

class AudioRecordWithPermission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveRecordingPermissions: false,
    };

    this.shouldCheckPermissions = true;
    this.askForAudioPermissions = this.askForAudioPermissions.bind(this);
  }


  componentDidMount() {
    this.askForAudioPermissions();
  }


  async askForAudioPermissions () {
    console.log('GETTING PERMISSION');
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

      console.log('status', status);

      this.setState({
        haveRecordingPermissions: status,
      });
  }


  // <Button
  //   title={'click to enable permissions'}
  //   onPress={this.askForAudioPermissions()}
  //   />
  render() {
    if (!this.state.haveRecordingPermissions) {
      return (
        <RootView>
          <CenterView>
            <MonoText color={'#ffffff'}>
              {'You must enable audio recorder permissions in order to use this app.'}
            </MonoText>
          </CenterView>
        </RootView>
      );
    } else {
      return (
        <RootView>
          <CenterView>
            <AudioRecord />
          </CenterView>
        </RootView>
      );
    }
  }
}

export { AudioRecordWithPermission };
