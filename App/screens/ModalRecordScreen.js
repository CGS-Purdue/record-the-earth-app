import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

import { createStackNavigator,  NavigationScreenProp } from 'react-navigation';

import { Audio } from 'expo-av';
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
      <Text style={{ fontSize: 30 }}>modal</Text>
      <Recorder recording={recorderSettings.recording}
       sound={recorderSettings.sound}
       isSeeking={recorderSettings.isSeeking}
       shouldPlayAtEndOfSeek={recorderSettings.shouldPlayAtEndOfSeek}
       recordingSettings={recorderSettings.recordingSettings}
      />
    </View>
  </View>
);
ModalRecordScreennavigationOptions = {
  header: null,
  tabBarVisible: false
};


const StartScreen = ({
  navigation
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <View
     style={{display:'flex', flex:1, justifyContent:'center', flexDirection: 'column'}}>
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>start</Text>
      <Button
        onPress={() => navigation.navigate('SurveyScreen1')}
        title="go 1"
      />
    </View>
  </View>
);
StartScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

const ModalStack = createStackNavigator({
    Main: { screen: ModalRecordScreen },
    Start: { screen: StartScreen },
  }, {
    headerMode: 'none',
  }
);
ModalStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return {
    tabBarVisible,
  };
};

export default ModalStack
