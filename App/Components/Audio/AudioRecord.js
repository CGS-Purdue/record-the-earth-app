import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import React, { Component } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { Theme, ThemeIcons } from '../../Theme';
import { saveAudioRecordingFile } from '../../Utilities/Filesystem';
import { AudioFormat } from './AudioFormat';
import { AudioProfile } from './AudioProfile';
import { AudioRecordTimer } from './AudioRecordTimer';
import { AudioRecordButton } from './AudioRecordButton';
import { askForAudioPermissions } from './AudioPermissionsCheck';

const _styles = Theme.Styles;
const _colors = Theme.Colors;
let _ic_record = ThemeIcons.Icons.icon_record;
const RecordIcon = ThemeIcons.createIcon(_ic_record.name, _ic_record.module, _ic_record.width, _ic_record.height);


class AudioRecord extends Component {
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
      durationMillis: null,
      duration: null,
      recordingDuration: null,
      muted: false,
      rate: 1.0,
      recordingState: false,
      AudioRecordTimer: null,
      recordingStarted: false,
      stopRequested: false,
      soundPosition: null,
      volume: 1.0,
    };
    this.askForAudioPermissions = askForAudioPermissions;
    this.audioProfile = new AudioProfile();
    this.profile = this.audioProfile.getProfile()

    this.audioFormat = new AudioFormat();
    this.format = this.audioFormat.getFormat();

    this.MAX_DURATION = 6000;
  }

  componentDidMount() {
    console.log(this);
    // this.askForAudioPermissions();
  }

  componentWillUnmount(){
    console.log(this.state);

    this.recordStop();
  }


  updateRecorderState(){
    let emptyState = {
      canRecord: null,
      isRecording: null,
      duration: null,
      recordingDuration: null,
      isDoneRecording: null,
      durationMillis: null,
    };

    let status = Object.assign(emptyState,this.state.recordingState);

    this.setState({
      canRecord: status.canRecord,
      isRecording: status.isRecording,
      isDoneRecording: status.isDoneRecording,
      durationMillis: status.durationMillis,
      duration: status.durationMillis,
      recordingDuration: status.durationMillis,
    });
  }

  async _saveRecording() {
    let sound_file = this.recording_info.uri;
    let success = await saveAudioRecordingFile(sound_file);
    console.log(success);
  }
  //
  // updateRecordingTimer () {
  //
  // }

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
          onPress: () => this._saveRecording(),
      }],
      {cancelable: false},
    );
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
    if (this.state.syncing){return false;}
    this.setState({syncing:true});

    await this.prepareAudio();

    const AUDIO_PROFILE = this.profile;
    const RECORDING_FORMAT = this.format;
    const MAX_DURATION = this.MAX_DURATION;

    await Audio.setAudioModeAsync(AUDIO_PROFILE);
    this.recorder = new Audio.Recording();

    try {
      await this.recorder.prepareToRecordAsync(RECORDING_FORMAT);

      const statusUpdater = (status) => {
        this.setState({recordingState:status});
        if (status.durationMillis >= MAX_DURATION) {
          this.recordStop();
        } else if (this.state.stopRequested) {
          this.recordStop();
        }
        this.updateRecorderState();
      };

      this.recorder.setProgressUpdateInterval(2000);
      this.recorder.setOnRecordingStatusUpdate((status)=>{statusUpdater(status);});
      await this.startAsyncRecord();

    } catch (error) {
      console.log(error);
    }

    this.setState({syncing:false});
  }

  async startAsyncRecord(){
    await this.recorder.startAsync();
    this.setState({recordingStarted:true});
  }

  async stopAsyncRecord(){
    await this.recorder.stopAndUnloadAsync();
    this.setState({
      recordingStarted:false,
      stopRequested:false,
    });
  }

  async recordStop () {
    if (this.state.syncing){return false;}
    this.setState({syncing:true});
    this.setState({stopRequested:true});

    try {
      this.recorder.setProgressUpdateInterval(0);
      this.recorder.setOnRecordingStatusUpdate(null);
      await this.stopAsyncRecord();
    } catch (error) {
      console.log(error);
    }

    const info = await FileSystem.getInfoAsync(this.recorder.getURI());
    this.recording_info = info;
    this._onRecordEnd();
    console.log({info});
    this.setState({syncing: false});
  }

  handleRecordButton = () => {
    if (this.state.isRecording) {
      this.recordStop();
    } else {
      this.recordStart();
    }
  }

  render() {
      return (
        <View style={_styles.record_container}>
          <AudioRecordButton
            onPress={this.handleRecordButton}
            active={this.state.recordingState}
          />
          <View>
            <ActivityIndicator
              color={_colors.GRN_300}
              animating={this.state.isRecording ? true : false}
              size={'large'}
            />
            <AudioRecordTimer duration={this.state.durationMillis} />
          </View>
        </View>
      );
    }
}

export { AudioRecord };
