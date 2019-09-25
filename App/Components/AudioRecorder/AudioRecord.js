import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import React, { Component } from 'react';
import { ActivityIndicator, Alert, Image, TouchableHighlight, View } from 'react-native';
import { Theme, ThemeColors, ThemeIcons } from '../../Theme';
import { discardAudioRecordingFile, saveTempAudioFile } from '../../Utilities/Filesystem';
import { MonoText } from '../Text';
import { CenterView, RootView } from '../Views';
import { AudioRecorderFormat } from './AudioRecorderFormat';
import { AudioRecorderProfile } from './AudioRecorderProfile';
import { AudioRecordTimer } from './AudioRecordTimer';
import { AudioRecordButton } from './AudioRecordButton';
import { AnimatedProgressCircle, ProgressCircle } from '../ProgressCircle';
// import { askForAudioPermissions } from './AudioPermissionsCheck';

const _styles = Theme.Styles;
let _ic_record = ThemeIcons.Icons.icon_record;
const RecordIcon = ThemeIcons.createIcon(_ic_record.name, _ic_record.module, _ic_record.width, _ic_record.height);



class AudioRecord extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      AudioRecordTimer: null,
      disabled: false,
      duration: 0,
      durationMillis: null,
      error: null,
      haveRecordingPermissions: false,
      isLoading: false,
      isRecording: false,
      muted: false,
      rate: 1.0,
      recordingDuration: null,
      recordingStarted: false,
      recordingState: false,
      shouldContinue: true,
      soundPosition: null,
      statusText: 'Ready',
      stopRequested: false,
      syncing: false,
      volume: 1.0,
    };

    this.recorder = null;
    this.sound = null;
    this.recording_info = null;
    this.isRecording = null;
    this.soundfile = null;
    this.onRecordEnd = null;
    this.askForAudioPermissions = this.askForAudioPermissions.bind(this);
    this._onRecordEnd = this._onRecordEnd.bind(this);
    this._onDone = this._onDone.bind(this);

    let recorder_profile = new AudioRecorderProfile();
    this.profile = recorder_profile.getProfile();

    let recorder_format = new AudioRecorderFormat();
    this.format = recorder_format.getFormat();

    this.MAX_DURATION = 20000;
  }



  componentDidMount() {
    this.askForAudioPermissions();
    this._setAudioRecorderMode();
  }

  componentWillUnmount(){
    if (this.state.isRecording) {
      this.stopAsyncRecord();
    }
    console.log('[AudioRecord] Exiting', JSON.stringify(this.state));
  }

  _setAudioRecorderMode = async () => {
    let AUDIO_PROFILE = this.profile;
    await Audio.setAudioModeAsync(AUDIO_PROFILE);
    // await Audio.setAudioModeAsync({
    //   allowsRecordingIOS: false,
    //   shouldDuckAndroid: true,
    //   staysActiveInBackground: false,
    //   playsInSilentModeIOS: true,
    //   playThroughEarpieceAndroid: false,
    //   playsInSilentLockedModeIOS: true,
    //   interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    //   interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    // });
  }

  askForAudioPermissions = async () => {
    let response = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING,
      Permissions.CAMERA_ROLL
    );

    this.setState({
      haveRecordingPermissions: response.status === 'granted',
    });
  }

  _resetRecorder = async () => {
    if (this.recorder !== null) {
      await this.recorder.stopAndUnloadAsync();
      this.recorder.setOnRecordingStatusUpdate(null);
      console.log('[AudioRecord] removing existing recorder', this.recorder);
      this.recorder = null;
    }
  }

  _resetRecorderState = () => {
     this.setState({
      recorderState: {
        canRecord: null,
        duration: null,
        durationMillis: null,
        isDoneRecording: null,
        isRecording: null,
        recordingDuration: null,
      },
    });
  }

  prepareAudioRecorder = async () => {
    await this._resetRecorder();
    this._resetRecorderState();
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

    let _recordingState = Object.assign(emptyState, this.state.recordingState);

    this.setState({
      canRecord: _recordingState.canRecord,         //  status.canRecord,
      isRecording: _recordingState.isRecording,         //  status.isRecording,
      isDoneRecording: _recordingState.isDoneRecording,         //  status.isDoneRecording,
      durationMillis: _recordingState.durationMillis,         //  status.durationMillis,
      duration: _recordingState.duration,         //  status.durationMillis,
      recordingDuration: _recordingState.recordingDuration,         //  status.durationMillis,
    });
  }

  updateRecordingTimer () {

  }

  _onDone = () => {
    console.log(this.state);
    if (this.state.shouldContinue) {
      let recording_uri = this.recording_info.uri;
      let soundfile = recording_uri.split('/').slice(-1)[0];
      if (this.props.onCompleted){
        this.props.onCompleted(soundfile);
      }
    } else {
      if (this.props.onCanceled){
        this.props.onCanceled();
      }
    }
  }

  _saveRecordingTemp = async () => {
    let sound_file = this.recording_info.uri;
    // POSTPONE SAVING UNTIL AFTER SURVEY
    let success = await saveTempAudioFile(sound_file);
    if (success) {
      console.log(success);
      discardAudioRecordingFile(sound_file);
    }
  }

  _saveRecording = () => {
    // POSTPONE SAVING UNTIL AFTER SURVEY
    this._saveRecordingTemp();
  }

  _discardRecording = async () => {
    console.log('DISCARDING AUDIO FILE');
    let sound_file = this.recording_info.uri;
    let success = await discardAudioRecordingFile(sound_file);
  }


  _shouldCancel(){
    console.log('CANCEL');
    this.setState({shouldContinue: false});
    this._discardRecording();
    this._onDone();
  }

  _shouldContinue(){
    console.log('CONTINUE');
    this.setState({shouldContinue: true});
    this._saveRecording();
    this._onDone();
  }

  _onRecordEnd(){
    Alert.alert(
      'Recording Done',
      'Would you like to save this Soundscape',
      [{
          text: 'DISCARD',
          onPress: ()=> this._shouldCancel(),
          style: 'cancel',
      },{
          text: 'SAVE',
          onPress: () => this._shouldContinue(),
      }],
      {cancelable: false},
    );
  }


  async recordStart() {
    if (this.state.syncing){return false;}
    this.setState({syncing:true});

    await this.prepareAudioRecorder();

    const RECORDING_FORMAT = this.format;
    const MAX_DURATION = this.MAX_DURATION;

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

      this.recorder.setProgressUpdateInterval(1000);
      this.recorder.setOnRecordingStatusUpdate((status)=>{statusUpdater(status);});
      await this.startAsyncRecord();

    } catch (error) {
      console.log(error);
    }

    this.setState({syncing:false});
  }

  async startAsyncRecord(){
    console.log(this.state);
    await this.recorder.startAsync();
    this.setState({recordingStarted:true});
  }

  async stopAsyncRecord(){
    if (this.state.isRecording) {
      await this.recorder.stopAndUnloadAsync();
      this.setState({
        isRecording: false,
        recordingStarted: false,
        stopRequested: false,
      });
    } else {
      console.log('Recorder is not recording, nothing to do');
    }
  }

  async recordStop () {
    if (this.state.syncing){return false;}
    this.setState({syncing:true});
    this.setState({
      stopRequested:true,
    });


    try {
      this.recorder.setProgressUpdateInterval(0);
      this.recorder.setOnRecordingStatusUpdate(null);
      console.log('recorder', this.recorder);
      await this.stopAsyncRecord();
    } catch (error) {
      console.log(error);
    }

    const info = await FileSystem.getInfoAsync(this.recorder.getURI());
    this.recording_info = info;
    console.log(info);
    this._onRecordEnd();
    this.setState({syncing: false});
  }

  handleRecordButton = () => {
    if (this.state.isRecording) {
      this.recordStop();
    } else {
      this.recordStart();
    }
  }
  // <ActivityIndicator
  //   color={ThemeColors.GRN_300}
  //   animating={true}
  //   size={'large'}
  //   />
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
        <View style={_styles.record_container}>
        <View style={{
            display: 'flex',
            flex:1,
            justifyContent: 'center',
            flexDirection: 'column',
          }}>

          <AnimatedProgressCircle
            value={this.state.duration / (this.MAX_DURATION + 0.0000001)}
          />

          <AudioRecordTimer
            duration={this.state.durationMillis}
            recordingState={this.state.active}
            active={this.state.recordingState}
            statusText={this.state.statusText}
          />

        </View>

        <AudioRecordButton
          onPress={this.handleRecordButton}
          active={this.state.recordingState}
          />
      </View>

      );
    }
  }
}


AudioRecord.defaultProps = {
  recordingSettings: JSON.parse(JSON.stringify(
    Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY
  )),
};

export { AudioRecord };
