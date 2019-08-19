import React from 'react';
import { Audio } from 'expo-av';
import { StyleSheet, Button, Text, View, } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Recorder from '../../Components/Recorder';
import { CenterView, CenterColView } from '../../Views/CenterView';
import { RootView } from '../../Views/RootView';

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
  <RootView>
    <CenterView>
      <Recorder recording={recorderSettings.recording}
       recordingSettings={recorderSettings.recordingSettings}
       sound={recorderSettings.sound}
       isSeeking={recorderSettings.isSeeking}
       shouldPlayAtEndOfSeek={recorderSettings.shouldPlayAtEndOfSeek}
      />
    </CenterView>
  </RootView>
);
ModalRecordScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};



export { ModalRecordScreen }
