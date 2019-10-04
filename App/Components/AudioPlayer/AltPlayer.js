import React, { Component } from 'react';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Asset } from 'expo-asset';
import { Audio } from 'expo-av';
import { Dimensions,
  Image,
  Slider,
  StyleSheet,
  Text,
  TouchableHighlight,
  View } from 'react-native';
import { HeadingText } from   '../Text/HeadingText';
import { IonicFontIcon } from '../Icon/FontIcon';
import { BlackFade } from '../Effects/LinearGradient';
import { AnimatedProgressCircle, ProgressCircle } from '../ProgressCircle';
import { CenterView,
  Section,
  PadView,
  ImgBgFill,
  RootView } from '../Views';
import { Theme, ThemeIcons } from '../../Theme';


const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _assets = Theme.Assets;
const _layout = Theme.Layout;

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const BACKGROUND_COLOR = '#FFF8ED';
const LIVE_COLOR = '#FF0000';
const DISABLED_OPACITY = 0.5;
const RATE_SCALE = 3.0;

// let storage_info = await FileSystem.getInfoAsync(APP_STORAGE, { md5: false });
// console.log('storage_info', storage_info);
// let media_info = await FileSystem.getInfoAsync(MEDIA_PATH, { md5: false });
// console.log('media_info', MEDIA_PATH, media_info);
// let file_info = await FileSystem.getInfoAsync(soundFileUri, { md5: false });
// console.log('file_info', FILE_PATH, file_info);

const APP_STORAGE_PATH = FileSystem.documentDirectory;
const APP_TEMPSTORAGE_PATH = FileSystem.cacheDirectory;
const APP_DB_DIR = 'SQLite';
const APP_MEDIA_DIR = 'media';
const APP_DATA_DIR = 'data';
const APP_MEDIA_PATH = [APP_STORAGE_PATH, APP_MEDIA_DIR].join('');
const FILE_PREFIX = 'file://';
const TEST_FILE_NAME = 'recording-b4965459-7825-4ac9-9fb9-c9a17f313fe5.m4a';
const TEST_FILE_PATH =  [APP_MEDIA_PATH, TEST_FILE_NAME].join('/');


class AltPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.recording = null;
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
      isRecording: false,
      shouldCorrectPitch: true,
      volume: 1.0,
      rate: 1.0,
      playerStatus: false,
      soundFileExists: false,
      soundFilePath: null,
      soundFileSize: null,

    };
    this.MAX_DURATION = 20000;
    this.soundpath = APP_MEDIA_PATH;
    this.soundfile = TEST_FILE_NAME;
    // this.uri = [APP_MEDIA_PATH, TEST_FILE_NAME].join('/');
    this.uri = TEST_FILE_PATH;
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
  }

  getSoundFile = async () => {
    let file_info = await FileSystem.getInfoAsync(TEST_FILE_PATH, { md5: false });
    console.log('file_info', file_info);
    if (file_info.exists) { this.loadSound(file_info.uri); }
    this.setState({
      soundFileExists: file_info.exists,
      soundFilePath: file_info.uri,
      soundFileSize: file_info.size,
    });
  }

  loadSound = async (soundFileUri) => {
    let sound = new Audio.Sound();
      console.log('soundFileUri', soundFileUri  );
    try {
      sound.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);

      let soundInfo = await sound.loadAsync({ uri: soundFileUri });

      console.log('soundInfo', soundInfo);

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
      // An error occurred!
      console.warn(`Player.js loadSound error : ${error}`);
    }
  }

  componentDidMount() {
    this._setAudioMode();
    this.getSoundFile();
  }


  _askForPermissions = async () => {

  };

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

  _updateScreenForRecordingStatus = status => {};

  async _stopPlaybackAndBeginRecording() {
    this.setState({ isLoading: true });
    if (this.sound !== null) {
      await this.sound.unloadAsync();
      this.sound.setOnPlaybackStatusUpdate(null);
      this.sound = null;
    }
  }

  _resetPlayer = async () => {
    if (this.sound !== null) {
      await this.sound.unloadAsync();
      this.sound.setOnPlaybackStatusUpdate(null);
      this.sound = null;
    }
  }

  async _stopRecordingAndEnablePlayback() {
    this.setState({ isLoading: true });

    const { sound, status } = await this.createNewLoadedSoundAsync({
        isLooping: true,
        isMuted: this.state.muted,
        volume: this.state.volume,
        rate: this.state.rate,
        shouldCorrectPitch: this.state.shouldCorrectPitch,
      },
        this._updateScreenForSoundStatus
    );
    this.sound = sound;

    this.setState({isLoading: false});
  }

  _onStopPressed = () => {
    if (this.sound != null) {
      this.sound.stopAsync();
    }
  };

  _onMutePressed = () => {
    if (this.sound != null) {
      this.sound.setIsMutedAsync(!this.state.muted);
    }
  };

  _onVolumeSliderValueChange = value => {
    if (this.sound != null) {
      this.sound.setVolumeAsync(value);
    }
  };

  // _trySetRate = async (rate, shouldCorrectPitch) => {
  //   if (this.sound != null) {
  //   try { await this.sound.setRateAsync(rate, shouldCorrectPitch); } catch (error) {
  //       // Rate changing could not be performed, possibly because the client's Android API is too old.
  //     }
  //   }
  // };
  // _onRateSliderSlidingComplete = async value => {
  //   this._trySetRate(value * RATE_SCALE, this.state.shouldCorrectPitch);
  // };
  // _onPitchCorrectionPressed = async value => {
  //   this._trySetRate(this.state.rate, !this.state.shouldCorrectPitch);
  // };

  _onSeekSliderValueChange = (value) => {
    if (this.sound != null && !this.isSeeking) {
      this.isSeeking = true;
      this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
      this.sound.pauseAsync();
    }
  };

  _onSeekSliderSlidingComplete = async (value) => {
    if (this.sound != null) {
      this.isSeeking = false;
      const seekPosition = value * this.state.soundDuration;
      if (this.shouldPlayAtEndOfSeek) {
        this.sound.playFromPositionAsync(seekPosition);
      } else {
        this.sound.setPositionAsync(seekPosition);
      }
    }
  };

  _getSeekSliderPosition() {
    if ( this.sound != null
      && this.state.soundPosition != null
      && this.state.soundDuration != null) {
      return this.state.soundPosition / this.state.soundDuration;
    }
    return 0;
  }

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
    return '00:00';
  }

  _getRecordingTimestamp() {  }

  _onPlayPressed = () => {
    if (this.sound != null) {
      if (this.state.isPlaying) {
        this.sound.pauseAsync();
        this.setState({ playerStatus: 'PAUSED' });
      } else {
        this.sound.playAsync();
      }

      if (this.state.positionMillis === this.state.durationMillis) {
        // START FROM BEGGINNING
        this.sound.stopAsync().then(() => {
          this.sound.playAsync().then(() => {
            this.setState({ playerStatus: 'PLAYING' });
          });
        });

      } else {

        // PLAY FROM CURRENT POS
        this.sound.playAsync().then(() => {
            this.setState({ playerStatus: 'PLAYING' });
          })
          .catch((err) => {
            console.warn(`Player.js onPlayPress error: ${err}`);
          });

      }
    }
  };


  render() {
    return (

      <ImgBgFill>

        <View style={{backgroundColor: '#303030', flex: 1, width: '100%', height: '100%', display: 'flex', paddingTop: 20, paddingHorizontal: 10, justifyContent: 'center'}}>
          <RootView>
            <CenterView>
            <Section weight={1} expand={true} shrink={true}>
              <View style={styles.playStopContainer}>
                <IonicFontIcon
                  name={'pulse'}
                  size={(_layout.TEXT_SIZE_5 * 2)}
                  style={_styles.audioplayer_icons}
                  color={this.state.soundFileExists ? _colors.GRN_400 : _colors.GRA_400}
                />
              </View>
              <HeadingText>{'Audio Player'}</HeadingText>
            </Section>

              <Section
                weight={3}
                expand={true}
                justify={'flex-start'}
                align={'stretch'}
                >
                <Text style={styles.playbackTimestamp}>
                  {this._getPlaybackTimestamp()}
                </Text>

                <Slider
                  style={styles.playbackSlider}
                  value={this._getSeekSliderPosition()}
                  onValueChange={this._onSeekSliderValueChange}
                  onSlidingComplete={this._onSeekSliderSlidingComplete}
                  disabled={!this.state.isPlaybackAllowed || this.state.isLoading}
                  />
                </Section>

                <Section weight={1} expand={true} shrink={true}>
                  <View style={[styles.buttonsContainerBase, styles.buttonsContainerTopRow]}>
                    <View style={styles.playStopContainer}>

                      <TouchableHighlight
                        onPress={this._onPlayPressed}
                        underlayColor={BACKGROUND_COLOR}
                        style={styles.wrapper}
                        disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>

                        <IonicFontIcon
                          name={this.state.isPlaying ? 'pause' : 'play'}
                          size={(_layout.TEXT_SIZE_5 * 2)}
                          style={_styles.audioplayer_icons}
                          color={_colors.GRN_400}
                          />
                      </TouchableHighlight>

                      <TouchableHighlight
                        underlayColor={BACKGROUND_COLOR}
                        style={styles.wrapper}
                        onPress={this._onStopPressed}
                        disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
                        <IonicFontIcon
                          name={this.state.isPlaying ? 'square' : 'square'}
                          size={(_layout.TEXT_SIZE_5 * 2)}
                          style={_styles.audioplayer_icons}
                          color={this.state.isLoaded ? _colors.GRN_400 : _colors.GRA_400}
                          />
                      </TouchableHighlight>


                      <TouchableHighlight
                        underlayColor={BACKGROUND_COLOR}
                        style={styles.wrapper}
                        onPress={this._onMutePressed}
                        disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
                        <IonicFontIcon
                          name={this.state.isPlaying ? 'volume-high' : 'volume-off'}
                          size={(_layout.TEXT_SIZE_5 * 2)}
                          style={_styles.audioplayer_icons}
                          color={_colors.GRN_100}
                        />
                      </TouchableHighlight>

                    </View>
                    <View />
                  </View>
                </Section>

                <Section justify={'flex-start'} shrink={true} align={'stretch'} weight={3} >
                <View style={{ flex: 1, display: 'flex', flexDirection: 'row',}}>

                <View style={styles.volumeContainer}>
                 <Slider
                    style={styles.volumeSlider}
                    value={0.76}
                    onValueChange={this._onVolumeSliderValueChange}
                    disabled={!this.state.isPlaybackAllowed || this.state.isLoading}
                  />
                </View>
                  <IonicFontIcon
                      name={'trash'}
                      size={(_layout.TEXT_SIZE_5 * 2)}
                      style={_styles.audioplayer_icons}
                      color={_colors.GRN_600}
                    />

                  <IonicFontIcon
                      name={'share'}
                      size={(_layout.TEXT_SIZE_5 * 2)}
                      style={_styles.audioplayer_icons}
                      color={_colors.GRN_300}
                    />


                </View>


                </Section>




                <Section weight={1} expand={true} shrink={true}>
                  <AnimatedProgressCircle
                    value={this.state.duration / (this.MAX_DURATION + 0.0000001)}
                  />
                  <PadView padding={[2, 3]} />
              </Section>
            </CenterView>
          </RootView>
        </View>
      </ImgBgFill>
    );
  }
}
// <View style={styles.playbackContainer}></View>

const styles = StyleSheet.create({
  emptyContainer: {
    alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
    minHeight: DEVICE_HEIGHT,
  },
  noPermissionsText: {
    textAlign: 'center',
  },
  wrapper: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  // halfScreenContainer: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   alignSelf: 'stretch',
  //   minHeight: DEVICE_HEIGHT / 2.0,
  // },
  recordingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  recordingDataContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recordingDataRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playbackContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  playbackSlider: {
    alignSelf: 'stretch',
  },
  liveText: {
    color: LIVE_COLOR,
  },
  recordingTimestamp: {
    paddingLeft: 20,
  },
  playbackTimestamp: {
    textAlign: 'right',
    alignSelf: 'stretch',
    color: 'white',
    paddingRight: 20,
  },
  image: {
    backgroundColor: BACKGROUND_COLOR,
  },
  textButton: {
    backgroundColor: BACKGROUND_COLOR,
    padding: 10,
  },
  buttonsContainerBase: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainerTopRow: {
    alignSelf: 'stretch',
    paddingRight: 20,
  },
  playStopContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  volumeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  volumeSlider: {
    backgroundColor: 'white',
  },
  buttonsContainerBottomRow: {
    alignSelf: 'stretch',
    paddingRight: 20,
    paddingLeft: 20,
  },
  rateSlider: {
  },
});



export { AltPlayer };
