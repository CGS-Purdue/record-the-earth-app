import React from 'react';
import { Audio } from 'expo-av';
import {
  Button,
  Text,
  View,
} from 'react-native';

import { NavigationScreenProp } from 'react-navigation';

import Recorder from '../components/Recorder';


const recorderSettings = {
  recording: null,
  sound : null,
  isSeeking: false,
  shouldPlayAtEndOfSeek: false,
  state: {
    haveRecordingPermissions: false,
    isLoading: false,
    isPlaybackAllowed: false,
    muted: false,
    soundPosition: null,
    soundDuration: null,
    recordingDuration: null,
    shouldPlay: false,
    isPlaying: false,
    isRecording: false,
    fontLoaded: false,
    shouldCorrectPitch: true,
    volume: 1.0,
    rate: 1.0,
  },
  recordingSettings: JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY))
};

const ModalRecordScreen= ({
  navigaion
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <View style={{display:'flex', flex:1, justifyContent:'center', flexDirection: 'column'}}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Recorder</Text>
      <Recorder
       recording={recorderSettings.recording}
       sound={recorderSettings.sound}
       isSeeking={recorderSettings.isSeeking}
       shouldPlayAtEndOfSeek={recorderSettings.shouldPlayAtEndOfSeek}
       recordingSettings={recorderSettings.recordingSettings}
      />
    </View>
  </View>
);
ModalRecordScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};



export { ModalRecordScreen }
