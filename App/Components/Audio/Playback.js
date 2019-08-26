



  constructor(props) {
    super(props);
    this.recording = null;
    this.sound = null;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.state = {
      haveRecordingPermissions: false,
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
      rate: 1.0,
    };
    error: null,
    highlight: false,
    color: ThemeColors.BACKGROUND_COLOR,
    style: {},
    action: toggleState,
    image: false,
    disabled: false,
    text: '',
    imageBgColor: ThemeColors.BACKGROUND_COLOR
  }

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


  async _stopPlaybackAndBeginRecording() {
    this.setState({
      isLoading: true,
    });
    if (this.recording !== null) {
      this.recording.setOnRecordingStatusUpdate(null);
      this.recording = null;
    }
    const recording = new Audio.Recording();

    await recording.prepareToRecordAsync(this.recordingSettings);
    recording.setOnRecordingStatusUpdate(this._updateScreenForRecordingStatus);

    this.recording = recording;

    await this.recording.startAsync();

    this.setState({
      isLoading: false,
    });
  }


  _updateScreenForSoundStatus = status => {
    if (status.isLoaded) {
      this.setState({
        soundDuration: status.durationMillis,
        soundPosition: status.positionMillis,
        isPlaying: status.isPlaying,
        shouldCorrectPitch: status.shouldCorrectPitch,
      });
    } else {
      this.setState({
        soundDuration: null,
      });
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  _updateScreenForRecordingStatus = status => {

    if (status.canRecord) {
      this.setState({
        isRecording: status.isRecording,
        recordingDuration: status.durationMillis,
      });

    } else if (status.isDoneRecording) {

      this.setState({
        isRecording: false,
        recordingDuration: status.durationMillis,
      });

      if (!this.state.isLoading) {
        this._stopRecordingAndEnablePlayback();
      }
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
  _onRateSliderSlidingComplete = async value => {
    this._trySetRate(value * RATE_SCALE, this.state.shouldCorrectPitch);
  };

  _onPitchCorrectionPressed = async value => {
    this._trySetRate(this.state.rate, !this.state.shouldCorrectPitch);
  };

  _onSeekSliderValueChange = value => {
    if (this.sound != null && !this.isSeeking) {
      this.isSeeking = true;
      this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
      this.sound.pauseAsync();
    }
  };

  _onSeekSliderSlidingComplete = async value => {
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
  _trySetRate = async (rate, shouldCorrectPitch) => {
    if (this.sound != null) {
      try {
        await this.sound.setRateAsync(rate, shouldCorrectPitch);
      } catch (error) {
        // Rate changing could not be performed, possibly because the client's Android API is too old.
      }
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

  _getSeekSliderPosition() {
    if (
      this.sound != null &&
      this.state.soundPosition != null &&
      this.state.soundDuration != null
    ) {
      return this.state.soundPosition / this.state.soundDuration;
    }
    return 0;
  }
// <Text style={[Styles.timestamp, { fontFamily: 'cutive-mono' }]}>Rate:</Text>
// <Slider
//   style={Styles.rateSlider}
//   trackImage={ThemeIcons.TRACK_1.module}
//   thumbImage={ThemeIcons.THUMB_1.module}
//   value={this.state.rate / RATE_SCALE}
//   onSlidingComplete={this._onRateSliderSlidingComplete}
//   disabled={!this.state.isPlaybackAllowed || this.state.isLoading}
// />
<View style={[Styles.halfScreenContainer, {
  opacity:
  !this.state.isPlaybackAllowed || this.state.isLoading ? DISABLED_OPACITY : 1.0,
}]}>
<View />
<View style={Styles.playbackContainer}>
  <Slider
    style={Styles.playbackSlider}
    trackImage={ThemeIcons.track1.module}
    thumbImage={ThemeIcons.thumb1.module}
    value={this._getSeekSliderPosition()}
    onValueChange={this._onSeekSliderValueChange}
    onSlidingComplete={this._onSeekSliderSlidingComplete}
    disabled={!this.state.isPlaybackAllowed || this.state.isLoading}
  />
  <Text style={[Styles.playbackTimestamp, { fontFamily: 'cutive-mono' }]}>
    {this._getPlaybackTimestamp()}
  </Text>
</View>
<View style={[Styles.buttonsContainerBase, Styles.buttonsContainerTopRow]}>
  <View style={Styles.volumeContainer}>
    <TouchableHighlight
      underlayColor={BACKGROUND_COLOR}
      style={Styles.wrapper}
      onPress={this._onMutePressed}
      disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
      <Image
        style={Styles.image}
        source={this.state.muted ? ThemeIcons.muted.module : ThemeIcons.unmuted.module}
      />
    </TouchableHighlight>
    <Slider
      style={Styles.volumeSlider}
      trackImage={ThemeIcons.track1.module}
      thumbImage={ThemeIcons.thumb2.module}
      value={1}
      onValueChange={this._onVolumeSliderValueChange}
      disabled={!this.state.isPlaybackAllowed || this.state.isLoading}
    />
  </View>
  <View style={Styles.playStopContainer}>
    <TouchableHighlight
      underlayColor={BACKGROUND_COLOR}
      style={Styles.wrapper}
      onPress={this._onPlayPausePressed}
      disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
      <Image
        style={Styles.image}
        source={this.state.isPlaying ? ThemeIcons.pause.module : ThemeIcons.play.module}
      />
    </TouchableHighlight>
    <TouchableHighlight
      underlayColor={BACKGROUND_COLOR}
      style={Styles.wrapper}
      onPress={this._onStopPressed}
      disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
      <Image style={Styles.image} source={ThemeIcons.stop.module} />
    </TouchableHighlight>
  </View>
  <View />
</View>
<View style={[Styles.buttonsContainerBase, Styles.buttonsContainerBottomRow]}>

  <TouchableHighlight
    underlayColor={BACKGROUND_COLOR}
    style={Styles.wrapper}
    onPress={this._onPitchCorrectionPressed}
    disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
    <Text style={[{ fontFamily: 'cutive-mono' }]}>
      PC: {this.state.shouldCorrectPitch ? 'yes' : 'no'}
    </Text>
  </TouchableHighlight>
</View>
<View />
</View>
