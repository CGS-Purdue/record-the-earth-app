import React from 'react';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Audio } from 'expo-av';
import { Image, Alert, Slider, Text, TouchableHighlight, View } from 'react-native';
import { saveAudioRecordingFile } from '../Utilities/Filesystem';
import { ThemeIcons, ThemeColors, Theme } from '../Theme';
import { CenterColView, CenterView, RootView } from './Views';
import { MonoText } from './Text';

const _styles = Theme.Styles;

let _ic_record = ThemeIcons.Icons.icon_record;
let _ic_recording = ThemeIcons.Icons.icon_recording;
const RecordIcon = ThemeIcons.createIcon(_ic_record.name, _ic_record.module, _ic_record.width, _ic_record.height);
const IsRecordingIcon = ThemeIcons.createIcon(_ic_recording.name, _ic_recording.module, _ic_recording.width, _ic_recording.height);

const recordStyles = {
  recordButton: {
    width: RecordIcon.width,
    height: RecordIcon.height,
    resizeMode: 'contain',
    margin: 5,
  },
};

const touchButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  margin: 0,
};

export default class Recorder extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.recorder = null;
    this.sound = null;
    this.recording_info = null;
    this.isRecording = null;
    this.onRecordEnd = null;
    this.state = {
      syncing: false,
      disabled: false,
      error: null,
      haveRecordingPermissions: false,
      isRecording: false,
      isLoading: false,
      muted: false,
      rate: 1.0,
      recordingState: false,
      durationMillis: null,
      recordingStarted: false,
      stopRequested: false,
      soundPosition: null,
      volume: 1.0,
    };
    this.profile = {
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    };
    this.format = Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY;
    this.MAX_DURATION = 6000;
  }

  componentDidMount() {
    this._askForPermissions();
  }

  componentWillUnmount(){
    this.recordStop();
  }

  _askForPermissions = async () => {
    const response = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING,
      Permissions.CAMERA_ROLL
    );
    this.setState({
      haveRecordingPermissions: response.status === 'granted',
    });
  };

  updateRecorderState(){
    let emptyState = {
      canRecord: null,
      isRecording: null,
      isDoneRecording: null,
      durationMillis: null,
    };

    let status = Object.assign(emptyState,this.state.recordingState);

    this.setState({
      canRecord: status.canRecord,
      isRecording: status.isRecording,
      isDoneRecording: status.isDoneRecording,
      durationMillis: status.durationMillis,
    });
  }

  async _saveRecording() {
    let sound_file = this.recording_info.uri;
    let success = await saveAudioRecordingFile(sound_file);
    console.log(success);
  }

  _cancelRecording(){}

  _resetRecorder(){}

  _onRecordEnd(){
    console.log('ended');
    Alert.alert(
      'Recording Done',
      'Would you like to save this Soundscape',
      [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
      },{
          text: 'OK',
          onPress: () => this._saveRecording()
      }],
      {cancelable: false},
    );
  }

  getAudioProfile() {
    return this.profile;
  }

  getAudioFormat() {
    return JSON.parse(JSON.stringify(this.format))
  }

  async prepareAudio() {
    if (this.sound !== null) {
      await this.sound.unloadAsync();
      this.sound.setOnPlaybackStatusUpdate(null);
      this.sound = null;
    }
    if (this.recorder !== null) {
      await this.recorder.stopAndUnloadAsync();
      this.recorder.setOnRecordingStatusUpdate(null);
      this.recorder = null;
    }
  }

  async recordStart() {
    if (this.state.syncing){return false}
    this.setState({syncing:true});

    await this.prepareAudio();

    const AUDIO_PROFILE = this.getAudioProfile();
    const RECORDING_FORMAT = this.getAudioFormat();
    const MAX_DURATION = this.MAX_DURATION;

    await Audio.setAudioModeAsync(AUDIO_PROFILE);
    this.recorder = new Audio.Recording();

    try {
      await this.recorder.prepareToRecordAsync(RECORDING_FORMAT);

      const statusUpdater = (status) => {
        this.setState({recordingState:status});
        if (status.durationMillis >= MAX_DURATION) {
          this.recordStop()
        } else if (this.state.stopRequested) {
          this.recordStop()
        }
        this.updateRecorderState();
      };

      this.recorder.setProgressUpdateInterval(2000);
      this.recorder.setOnRecordingStatusUpdate((status)=>{statusUpdater(status)});
      await this.startAsyncRecord()

    } catch (error) {
      console.log(error)
    }

    this.setState({syncing:false});
  };

  async startAsyncRecord(){
    await this.recorder.startAsync()
    this.setState({recordingStarted:true})
  }

  async stopAsyncRecord(){
    await this.recorder.stopAndUnloadAsync()
    this.setState({recordingStarted:false})
    this.setState({stopRequested:false})
  }

  async recordStop () {
    if (this.state.syncing){return false}
    this.setState({syncing:true})
    this.setState({stopRequested:true})

    try {
      this.recorder.setProgressUpdateInterval(0)
      this.recorder.setOnRecordingStatusUpdate(null)
      await this.stopAsyncRecord();
    } catch (error) {
      console.log(error);
    }

    const info = await FileSystem.getInfoAsync(this.recorder.getURI());
    this.recording_info = info;
    this._onRecordEnd();
    console.log({info});
    this.setState({syncing: false})
  }


  durationToTimestamp(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60).toString();
    const minutes = Math.floor(totalSeconds / 60).toString();
    return [minutes.padStart(2,'0'),':', seconds.padStart(2,'0')].join('');
  }

  getRecordingTimestamp() {
    if (this.state.durationMillis) {
      return `${this.durationToTimestamp(this.state.durationMillis)}`;
    } else {
      return '00:00';
    }
  }

  handleRecordButton = () => {
    if (this.state.isRecording) {
      this.recordStop();
    } else {
      this.recordStart();
    }
  }

  render() {
    if (!this.state.haveRecordingPermissions) {
      return (
        <RootView>
          <CenterView>
            <MonoText style={[{textAlign: 'center'}]}>
              You must enable audio recorder permissions in order to use this app.
            </MonoText>
          </CenterView>
        </RootView>
      );

    } else {
      return (
        <CenterColView backgroundColor={ThemeColors.BLU_300}>
          <View style={{borderColor:'blue',borderWidth:1,borderStyle:'solid'}}>
            <TouchableHighlight
              style={[touchButtonStyle]}
              underlayColor={ThemeColors.GRN_300}
              onPress={this.handleRecordButton}
              disabled={this.state.syncing}>
              <Image
                style={recordStyles.recordButton}
                source={RecordIcon.module}
              />
            </TouchableHighlight>

            <MonoText style={[{
                color: ThemeColors.MESSAGE_DANGER, textAlign:'center'}]}>
              {this.state.isRecording ? 'LIVE' : ''}
            </MonoText>

            <Image
              style={[{opacity: this.state.isRecording ? 1.0 : 0.0}]}
              source={IsRecordingIcon.module}
            />
            <MonoText>{this.getRecordingTimestamp()}</MonoText>
          </View>
        </CenterColView>
      )
    }
  }
}


Recorder.defaultProps = {
  recordingSettings: JSON.parse(JSON.stringify(
    Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY
  )),
};

export { Recorder }
