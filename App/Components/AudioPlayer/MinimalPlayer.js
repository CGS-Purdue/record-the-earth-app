import React, { Component } from 'react';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
// import { Asset } from 'expo-asset';
import { Audio } from 'expo-av';
import { Dimensions, Text, View } from 'react-native';
import { Theme } from '../../Theme';

// const _colors = Theme.Colors;
// const _styles = Theme.Styles;
// const _assets = Theme.Assets;
// const _layout = Theme.Layout;

// const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
// const BACKGROUND_COLOR = '#FFF8ED';
// const LIVE_COLOR = '#FF0000';
// const DISABLED_OPACITY = 0.5;
// const RATE_SCALE = 3.0;

// let storage_info = await FileSystem.getInfoAsync(APP_STORAGE, { md5: false });
// console.log('storage_info', storage_info);
// let media_info = await FileSystem.getInfoAsync(MEDIA_PATH, { md5: false });
// console.log('media_info', MEDIA_PATH, media_info);
// let file_info = await FileSystem.getInfoAsync(soundFileUri, { md5: false });
// console.log('file_info', FILE_PATH, file_info);

// const APP_STORAGE_PATH = FileSystem.documentDirectory;
// const APP_TEMPSTORAGE_PATH = FileSystem.cacheDirectory;
// const APP_DB_DIR = 'SQLite';
// const APP_MEDIA_DIR = 'media';
// const APP_DATA_DIR = 'data';
// const APP_MEDIA_PATH = [APP_STORAGE_PATH, APP_MEDIA_DIR].join('');
// const FILE_PREFIX = 'file://';

class MinimalPlayer extends Component {
  constructor(props) {
    super(props);
    this.sound = null;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.state = {
      isLoading: false,
      isLoaded: false,
      isPlaybackAllowed: false,
      muted: false,
      duration: 0,
      soundPosition: null,
      soundDuration: null,
      recordingDuration: null,
      shouldPlay: false,
      isPlaying: false,
      shouldCorrectPitch: true,
      volume: 1.0,
      rate: 1.0,
      playerStatus: false,
      fileExists: false,
      soundFilePath: null,
      soundFileSize: null,
    };

    this.fileUri = this.props.fileUri;
    this._isMounted = false;

  }

  componentDidMount() {
    this._isMounted = true;
    this._setAudioMode();
    this.getSoundFile();
  }

  componentWillUnmount() {
    this._isMounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   'prevProps.fileUri', prevProps.fileUri,
    //   'prevState', prevState,
    //   'this.props.fileUri', this.props.fileUri,
    //   'this.state.fileUri', this.state.fileUri
    // );

    if (this.props.fileUri !== prevProps.fileUri) {
      console.log('uri changed');
      this._updateSelectedSoundFile()
      this._loadNewPlaybackInstance(this.props.playState);
    }
  }


  _updateSelectedSoundFile(){
    let _fileUri = this.props.fileUri;
    if (_fileUri && _fileUri !== this.state.fileUri) {
      if (this._isMounted) {
        this.setState({ fileUri: _fileUri });
      }
      return _fileUri;
    }
  }


  _setAudioMode = () => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      shouldDuckAndroid: true,
      staysActiveInBackground: false,
      playsInSilentModeIOS: true,
      playThroughEarpieceAndroid: false,
      playsInSilentLockedModeIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
  };

  getSoundFile = async () => {
    let _fileUri = this.state.fileUri;
    if (!_fileUri) {
      _fileUri = this._updateSelectedSoundFile();
    }

    if (_fileUri) {
      let file_info = await FileSystem.getInfoAsync(_fileUri, {md5: false});
      if (file_info.exists) {
        this.loadSound(_fileUri)
      }
      else {
        console.log('file not exist', _fileUri);
      }
    } else {
      return false;
    }
  };


  _onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        loopingType: status.isLooping ? 1 : 0,
        shouldCorrectPitch: status.shouldCorrectPitch
      });
      // console.log('MinimalPlayer', this.state, this.props);
      if (status.didJustFinish && !status.isLooping) {
        // this._advanceIndex(true);
        this._updatePlaybackInstanceForIndex(true);
      }
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  loadSound = async (fileUri) => {
    let sound = new Audio.Sound();
    try {
      sound.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      let soundInfo = await sound.loadAsync({ uri: fileUri });
      this.setState({
        maxSliderValue: soundInfo.durationMillis,
        durationMillis: soundInfo.durationMillis,
        positionMillis: soundInfo.positionMillis,
        currentSliderValue: soundInfo.positionMillis,
        shouldPlay: soundInfo.shouldPlay,
        isPlaying: soundInfo.isPlaying,
        rate: soundInfo.rate,
        muted: soundInfo.isMuted,
        volume: soundInfo.volume,
        shouldCorrectPitch: soundInfo.shouldCorrectPitch,
      });

      if (soundInfo.isLoaded) {
        this.setState({
          isLoading: false,
          isPlaybackAllowed: true,
        });
      }

      this.sound = sound;
      console.log(this.state);
    } catch (error) {
      console.warn(`Player.js loadSound error : ${error}`);
    }
  };



  _askForPermissions = async () => {};

  _updateScreenForSoundStatus = (status) => {
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

  _updateScreenForRecordingStatus = (status) => {};


  _resetPlayer = async () => {
    if (this.sound !== null) {
      await this.sound.unloadAsync();
      this.sound = null;
    }
  };

  async _loadNewPlaybackInstance(playing) {
      if (this.sound !== null) {
      await this.sound.unloadAsync();
      this.sound = null;
    }

    const source = { uri: this.state.fileUri };

    if (!source.uri) {
      console.log('source', source);
      return false;
    }

    const initialStatus = {
      shouldPlay: playing,
      rate: this.state.rate,
      shouldCorrectPitch: this.state.shouldCorrectPitch,
      volume: this.state.volume,
      isMuted: this.state.muted,
      isLooping: false,
    };

    console.log('_loadNewPlaybackInstance', playing, this.state.fileUri);

    const {sound, status} = await Audio.Sound.createAsync(
      source,
      initialStatus,
      this._onPlaybackStatusUpdate
    );

    this.sound = sound;
  }

  _onStop = () => {
    if (this.sound != null) { this.sound.stopAsync() }
  };

  _onPlay = () => {
    console.log('play');
    if (this.sound != null) {
      if (this.state.isPlaying) {
        this.sound.pauseAsync();
        this.setState({ playerStatus: 'PAUSED' });
      } else { this.sound.playAsync() }

      if (this.state.positionMillis === this.state.durationMillis) {
        this.sound.stopAsync().then(() => {
          this.sound.playAsync().then(() => { this.setState({ playerStatus: 'PLAYING' }) });
        });
      } else {
        this.sound
          .playAsync()
          .then(() => { this.setState({ playerStatus: 'PLAYING' }) })
          .catch((err) => {
            console.warn(`Player.js onPlayPress error: ${err}`)
          });
      }
    }
  };

  render() {
    return (
        <View><Text>this.state.playerStatus</Text></View>
    );
  }
}

export { MinimalPlayer };
