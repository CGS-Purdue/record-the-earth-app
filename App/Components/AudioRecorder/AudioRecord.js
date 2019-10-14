import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Alert,
  TouchableHighlight,
  View,
} from 'react-native';
import { Theme } from '../../Theme';
import {
  discardAudioRecording,
  saveTempAudioFile,
} from '../../Utilities/Filesystem';
import { MonoText } from '../Text';
import { CenterView, RootView } from '../Views';
import { AudioRecorderFormat } from './AudioRecorderFormat';
import { AudioRecorderProfile } from './AudioRecorderProfile';
import { AudioRecordTimer } from './AudioRecordTimer';
import { AudioRecordButton } from './AudioRecordButton';
import { AnimatedProgressCircle } from '../ProgressCircle';
// import { askForAudioPermissions } from './AudioPermissionsCheck';

const _styles = Theme.Styles;

class AudioRecord extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      recorderState: {
        canRecord: null,
        duration: 0,
        durationMillis: 0,
        isDoneRecording: null,
        isRecording: null,
        recordingDuration: null,
      },
      haveRecordingPermissions: false,
      discardAudioRecording: null,
      disabled: false,
      recordButtonDisabled: false,
      duration: 0,
      durationMillis: 0,
      error: null,
      isRecording: false,
      recordingDuration: null,
      shouldContinue: true,
      soundPosition: null,
      statusText: 'Ready',
      stopRequested: false,
      syncing: false,
    };

    this.MAX_DURATION = 20000;
    let recorder_profile = new AudioRecorderProfile();
    let recorder_format = new AudioRecorderFormat();
    this.profile = recorder_profile.getProfile();
    this.format = recorder_format.getFormat();
    this.recorder = null;
    this.recording_info = null;
    this.soundfile = null;
    this.sound = null;
    this.isRecording = null;
    this.onRecordEnd = null;
    this._onRecordEnd = this._onRecordEnd.bind(this);
    this.askForAudioPermissions = this.askForAudioPermissions.bind(this);
    this._onDone = this._onDone.bind(this);
    this.startOnLoad = true;
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.askForAudioPermissions();
    this._setAudioRecorderMode();
    if (this.startOnLoad) {
      this.recordStart();
    }
  }

  componentWillUnmount() {
    if (this.state.recorderState.isRecording) {
      console.log('[AudioRecord] Is still recording, will request stop');
      this.state.recorderState.canRecord = false;
      this.state.stopRequested = true;
    }
    this._isMounted = false;
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
  };

  askForAudioPermissions = async () => {
    let response = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING,
      Permissions.CAMERA_ROLL
    );

    this.setState({ haveRecordingPermissions: response.status === 'granted' });
  };

  updateRecordingTimer() {}

  _onDone = () => {
    if (this.state.shouldContinue) {
      let recording_uri = this.recording_info.uri;
      let soundfile = recording_uri.split('/').slice(-1)[0];
      if (this.props.onCompleted) {
        this.props.onCompleted({
          soundfile: soundfile,
          duration: this.state.duration,
          filesize: this.recording_info.size,
        });
      }
    } else {
      if (this.props.onCanceled) {
        this.props.onCanceled();
      }
    }
  };

  _saveRecordingTemp = async () => {
    let sound_file = this.recording_info.uri;
    let success = await saveTempAudioFile(sound_file);
    console.log('_saveRecordingTemp success?', success);
    if (success) {
      console.log(success);
      discardAudioRecording(sound_file);
    }
  };

  _saveRecording = () => {
    // POSTPONE SAVING UNTIL AFTER SURVEY
    this._saveRecordingTemp();
  };

  _discardRecording = async () => {
    console.log('DISCARDING AUDIO FILE');
    let sound_file = this.recording_info.uri;
    let discarded = await discardAudioRecording(sound_file);
    if (discarded) {
      console.log(discarded);
    }
  };

  _shouldCancel() {
    console.log('CANCEL');
    this.setState({ shouldContinue: false });
    this._discardRecording();
    this._onDone();
  }

  _shouldContinue() {
    console.log('CONTINUE');
    this.setState({ shouldContinue: true });
    this._saveRecording();
    this._onDone();
  }

  _onRecordEnd() {
    Alert.alert(
      'Recording Done',
      'Would you like to save this Soundscape',
      [
        {
          text: 'DISCARD',
          onPress: () => this._shouldCancel(),
          style: 'cancel',
        }, {
          text: 'SAVE',
          onPress: () => this._shouldContinue() },
      ],
      { cancelable: false }
    );
  }

  updateActiveRecorderState() {
    let lastReadState = Object.assign({},{
        canRecord: false,
        isRecording: false,
        durationMillis: 0,
        duration: 0,
        progress: 0,
      },
      this.state.recorderState
    );

    this.setState({
      canRecord: lastReadState.canRecord,
      isRecording: lastReadState.isRecording,
      // durationMillis: lastReadState.durationMillis,
      duration: lastReadState.durationMillis,
      progress: lastReadState.durationMillis / (this.MAX_DURATION + 0.0000001),
    });
  }

  async startAsyncRecord() {
    if (this._isMounted) {
      this.setState({
        isRecording: true,
      });
      await this.recorder.startAsync();    console.log(this.state);

    }
  }

  // prepareAudioRecorder = async (_recorder) => {
  //   console.log('new _recorder', _recorder);
  //   this._resetRecorderState();
  //   let prepared = await _recorder.isPreparedToRecord();
  //   console.log('_recorder.isPreparedToRecord', prepared);
  //   if (prepared){
  //     console.log('prepared', prepared);
  //     if (prepared.canRecord === true){
  //       return _recorder;
  //     } else if (prepared.isDoneRecording === false){
  //       // this should not happen
  //       await _recorder.setOnRecordingStatusUpdate(null);
  //       await _recorder.stopAndUnloadAsync()
  //       return false;
  //     } else {
  //       try {
  //       } catch (error) {
  //         // An error occurred!
  //       }
  //       return _recorder;
  //     }
  //   }
  // }

  _resetRecorder() {
    if (this.recorder !== null) {
      this.recorder = null;
    }
  }

  async recordStart() {
    if (this.state.syncing) {
      return false;
    }
    this.setState({ syncing: true });
    this._resetRecorder();
    const RECORDING_FORMAT = this.format;
    let recorder = new Audio.Recording();

    await recorder.prepareToRecordAsync(RECORDING_FORMAT);
    this.recorder = recorder;

    const MAX_DURATION = this.MAX_DURATION;
    try {
      const statusUpdater = (status) => {
        this.setState({ recorderState: status });
        if (status.durationMillis >= MAX_DURATION) {
          this.recordStop();
        } else if (this.state.stopRequested) {
          this.recordStop();
        } else if (!this.state.canRecord) {
          this.recordStop();
        }
        this.updateActiveRecorderState();
      };

      this.recorder.setProgressUpdateInterval(600);
      this.recorder.setOnRecordingStatusUpdate((status) => {
        statusUpdater(status);
      });
      await this.startAsyncRecord();
      this.setState({ syncing: false });
    } catch (error) {
      console.log(error);
    }
  }

  _resetRecorderState = () => {
    if (this._isMounted) {
      this.setState({
        isRecording: false,
        canRecord: false,
        recorderState: {
          duration: null,
          canRecord: null,
          isRecording: null,
          durationMillis: 0,
          recordingDuration: 0,
          isDoneRecording: null,
        },
      });
    }
  };

  async recordStop() {
    if (this.state.syncing) { return false; }
    this.setState({ syncing: true, stopRequested: true });
    try {
      this.recorder.setProgressUpdateInterval(0);
      this.recorder.setOnRecordingStatusUpdate(null);
      await this.recorder.stopAndUnloadAsync();
    } catch (error) {
      console.log(error);
    }

    this.recording_info = await FileSystem.getInfoAsync(this.recorder.getURI());
    this._onRecordEnd();
    this._resetRecorderState();
    this.setState({ syncing: false });
  }

  handleRecordButton = () => {
    if (this.state.recordButtonDisabled || this.state.syncing) {
      return false;
    }
    if (this.state.isRecording) {
      this.recordStop();
    } else {
      this.recordStart();
    }
  };

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
            <MonoText>{'You must enable audio recorder permissions in order to use this app.'}</MonoText>
          </CenterView>
        </RootView>
      );
    } else {
      return (
        <View style={_styles.record_container}>
          <View style={RecordIndicatorContainer}>
            <AnimatedProgressCircle value={this.state.progress} />

            <AudioRecordTimer
              duration={this.state.duration}
              recordingState={this.state.active}
              active={this.state.recordingState}
              statusText={this.state.statusText}
            />
          </View>

          <AudioRecordButton
            action={this.handleRecordButton}
            active={this.state.recordingState}
          />
        </View>
      );
    }
  }
}

AudioRecord.defaultProps = {
  recordingSettings: JSON.parse(
    JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)
  ),
};

const RecordIndicatorContainer = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'column',
};

export { AudioRecord };
