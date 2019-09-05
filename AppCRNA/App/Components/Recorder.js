import React from 'react';
import { Dimensions, Image, Slider, StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import { Asset } from 'expo-asset';
import { Audio } from 'expo-av';
import * as Font from 'expo-font';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

import { RecorderStylesheet } from './Recorderstylesheet';
import { ThemeFonts } from '../Theme/Fonts';
import { debug_outline } from '../Theme/StyleSheet';
import { ThemeColors, Colors } from '../Theme/Colors';
import { ThemeIcons } from '../Theme/Icons';
import { ThemeVariables } from '../Theme/Variables';

import { CenterColView, CenterView } from '../Views/CenterView';
import { RootView } from '../Views/RootView';
import MonoText from './StyledText';
import TouchButton from './StyledText';

export default class Recorder extends React.Component {

  constructor(props) {
    super(props);
    this.recording = null;
    this.sound = null;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.state = {
      haveRecordingPermissions: false,
      error: null,
      isLoading: false,
      isPlaybackAllowed: false,
      muted: false,
      soundPosition: null,
      soundDuration: null,
      recordingDuration: null,
      shouldPlay: false,
      isPlaying: false,
      fontLoaded: false,
      shouldCorrectPitch: true,
      volume: 1.0,
      disabled: false,
      rate: 1.0,
    };
    this.text = false,
    this.color = ThemeColors.BACKGROUND_COLOR,
    this.highlight = false,
    this.action = this.toggleState,
    this.image = false,

    this.recordingSettings = JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY));
    // // UNCOMMENT THIS TO TEST maxFileSize:
    // this.recordingSettings.android['maxFileSize'] = 12000;
  }

  componentDidMount() {
    this._askForPermissions();
  }

  _askForPermissions = async () => {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({
      haveRecordingPermissions: response.status === 'granted',
    });
  };

  _updateScreenForSoundStatus = status => {
    if (status.isLoaded) {
      this.setState({
        soundDuration: status.durationMillis,
        soundPosition: status.positionMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        shouldCorrectPitch: status.shouldCorrectPitch,
        isPlaybackAllowed: true,
      });
    } else {
      this.setState({
        soundDuration: null,
        soundPosition: null,
        isPlaybackAllowed: false,
      });
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  _updateScreenForRecordingStatus = status => {
    if (status.canRecord) {
      this.setState({ isRecording: status.isRecording,
        recordingDuration: status.durationMillis,
      });
    } else if (status.isDoneRecording) {
      this.setState({ isRecording: false,
        recordingDuration: status.durationMillis,
      });
      if (!this.state.isLoading) {
        this._stopRecordingAndEnablePlayback();
      }
    }
  };

  async _stopPlaybackAndBeginRecording() {
    this.setState({
      isLoading: true,
    });
    if (this.sound !== null) {
      await this.sound.unloadAsync();
      this.sound.setOnPlaybackStatusUpdate(null);
      this.sound = null;
    }
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });
    if (this.recording !== null) {
      this.recording.setOnRecordingStatusUpdate(null);
      this.recording = null;
    }

    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync(this.recordingSettings);
    recording.setOnRecordingStatusUpdate(this._updateScreenForRecordingStatus);

    this.recording = recording;
    // Will call this._updateScreenForRecordingStatus to update the screen.
    await this.recording.startAsync();
    this.setState({
      isLoading: false,
    });
  }

  async _stopRecordingAndEnablePlayback() {
    this.setState({
      isLoading: true,
    });
    try {
      await this.recording.stopAndUnloadAsync();
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }
    const info = await FileSystem.getInfoAsync(this.recording.getURI());
    console.log(`FILE INFO: ${JSON.stringify(info)}`);
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });
    const { sound, status } = await this.recording.createNewLoadedSoundAsync({
        isLooping: true,
        isMuted: this.state.muted,
        volume: this.state.volume,
        rate: this.state.rate,
        shouldCorrectPitch: this.state.shouldCorrectPitch,
      },
      this._updateScreenForSoundStatus
    );
    this.sound = sound;
    this.setState({
      isLoading: false,
    });
  }

  _onRecordPressed = () => {
    if (this.state.isRecording) {
      this._stopRecordingAndEnablePlayback();
    } else {
      this._stopPlaybackAndBeginRecording();
    }
  };

  _onPlayPausePressed = () => {
    if (this.sound != null) {
      if (this.state.isPlaying) {
        this.sound.pauseAsync();
      } else {
        this.sound.playAsync();
      }
    }
  };

  _onStopPressed = () => {
    if (this.sound != null) {
      this.sound.stopAsync();
    }
  };

  _trySetRate = async (rate, shouldCorrectPitch) => {
    if (this.sound != null) {
      try {
        await this.sound.setRateAsync(rate, shouldCorrectPitch);
      } catch (error) {
        // Rate changing could not be performed, possibly because the client's Android API is too old.
      }
    }
  };

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return '0' + string;
      }
      return string;
    };
    return padWithZero(minutes) + ':' + padWithZero(seconds);
  }

  _getPlaybackTimestamp() {
    if (
      this.sound != null &&
      this.state.soundPosition != null &&
      this.state.soundDuration != null
    ) {
      return `${this._getMMSSFromMillis(this.state.soundPosition)} / ${this._getMMSSFromMillis(
        this.state.soundDuration
      )}`;
    }
    return '';
  }

  _getRecordingTimestamp() {
    if (this.state.recordingDuration != null) {
      return `${this._getMMSSFromMillis(this.state.recordingDuration)}`;
    }
    return `${this._getMMSSFromMillis(0)}`;
  }

  render() {
    if (!this.state.haveRecordingPermissions){
      return (
      <RootView>
        <CenterView>
          <MonoText style={[{textAlign: 'center'}]}>
            You must enable audio recording permissions in order to use this app.
          </MonoText>
        </CenterView>
      </RootView>
      )
    } else {
      console.log('TouchButton', this);
      return (
        <RootView>
          <CenterView style={{backgroundColor : Colors.GRN_300}}>
            <View style={{backgroundColor : Colors.BLU_300}}>
              <TouchButton
                underlayColor={Colors.GRN_500}
                onPress={this._onRecordPressed}
                disabled={this.state.isLoading}
                hightlight="true">

                <Image style={{backgroundColor:'red',}}
                  source={ThemeIcons.record.module}
                  height={ThemeIcons.record.height}
                  width={ThemeIcons.record.width}
                />
                <MonoText style={[{color: ThemeColors.MESSAGE_DANGER}]}>
                {this.state.isRecording ? 'LIVE' : ''}
                </MonoText>
                </TouchButton>

                <Image style={[ RecorderStylesheet.image,
                   {opacity: this.state.isRecording ? 1.0 : 0.0 } ]}
                   source={ThemeIcons.recording.module}
                />
                <MonoText>{this._getRecordingTimestamp()}</MonoText>
              </View>
          </CenterView>
        </RootView>
      );
    }
  }
}

// <View style={RecorderStylesheet.recordingContainer}>
  // <View style={[RecorderStylesheet.halfScreenContainer, {
  //   opacity: this.state.isLoading ? ThemeVariables.DISABLED_OPACITY : 1.0 }]}>

Recorder.defaultProps = {
  recordingSettings: JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)),

};

export { Recorder }
