



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
// <Text style={[styles.timestamp, { fontFamily: 'cutive-mono' }]}>Rate:</Text>
// <Slider
//   style={styles.rateSlider}
//   trackImage={ThemeIcons.TRACK_1.module}
//   thumbImage={ThemeIcons.THUMB_1.module}
//   value={this.state.rate / RATE_SCALE}
//   onSlidingComplete={this._onRateSliderSlidingComplete}
//   disabled={!this.state.isPlaybackAllowed || this.state.isLoading}
// />
<View style={[styles.halfScreenContainer, {
  opacity:
  !this.state.isPlaybackAllowed || this.state.isLoading ? DISABLED_OPACITY : 1.0,
}]}>
<View />
<View style={styles.playbackContainer}>
  <Slider
    style={styles.playbackSlider}
    trackImage={ThemeIcons.track1.module}
    thumbImage={ThemeIcons.thumb1.module}
    value={this._getSeekSliderPosition()}
    onValueChange={this._onSeekSliderValueChange}
    onSlidingComplete={this._onSeekSliderSlidingComplete}
    disabled={!this.state.isPlaybackAllowed || this.state.isLoading}
  />
  <Text style={[styles.playbackTimestamp, { fontFamily: 'cutive-mono' }]}>
    {this._getPlaybackTimestamp()}
  </Text>
</View>
<View style={[styles.buttonsContainerBase, styles.buttonsContainerTopRow]}>
  <View style={styles.volumeContainer}>
    <TouchableHighlight
      underlayColor={BACKGROUND_COLOR}
      style={styles.wrapper}
      onPress={this._onMutePressed}
      disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
      <Image
        style={styles.image}
        source={this.state.muted ? ThemeIcons.muted.module : ThemeIcons.unmuted.module}
      />
    </TouchableHighlight>
    <Slider
      style={styles.volumeSlider}
      trackImage={ThemeIcons.track1.module}
      thumbImage={ThemeIcons.thumb2.module}
      value={1}
      onValueChange={this._onVolumeSliderValueChange}
      disabled={!this.state.isPlaybackAllowed || this.state.isLoading}
    />
  </View>
  <View style={styles.playStopContainer}>
    <TouchableHighlight
      underlayColor={BACKGROUND_COLOR}
      style={styles.wrapper}
      onPress={this._onPlayPausePressed}
      disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
      <Image
        style={styles.image}
        source={this.state.isPlaying ? ThemeIcons.pause.module : ThemeIcons.play.module}
      />
    </TouchableHighlight>
    <TouchableHighlight
      underlayColor={BACKGROUND_COLOR}
      style={styles.wrapper}
      onPress={this._onStopPressed}
      disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
      <Image style={styles.image} source={ThemeIcons.stop.module} />
    </TouchableHighlight>
  </View>
  <View />
</View>
<View style={[styles.buttonsContainerBase, styles.buttonsContainerBottomRow]}>

  <TouchableHighlight
    underlayColor={BACKGROUND_COLOR}
    style={styles.wrapper}
    onPress={this._onPitchCorrectionPressed}
    disabled={!this.state.isPlaybackAllowed || this.state.isLoading}>
    <Text style={[{ fontFamily: 'cutive-mono' }]}>
      PC: {this.state.shouldCorrectPitch ? 'yes' : 'no'}
    </Text>
  </TouchableHighlight>
</View>
<View />
</View>
