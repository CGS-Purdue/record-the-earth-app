import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MonoText } from '../Text';
import { Theme } from '../../Theme';



const _styles = Theme.Styles;

// <Image
//   style={this.state.isRecording ? _styles.show : _styles.hide }
//   source={IsRecordingIcon.module}
// />

class AudioRecordTimer extends Component {
  constructor(props) {
    super(props);
    this.duration = 10000;
    this.recordingState = false;
  }

  _durationToTimestamp(ms) {
    const totalSeconds = ms / 1000;
    const seconds = Math.floor(totalSeconds % 60).toString();
    const minutes = Math.floor(totalSeconds / 60).toString();
    return [minutes.padStart(2,'0'),':', seconds.padStart(2,'0')].join('');
  }

  getTimestamp() {
    if (this.props.duration) {
      return `${this._durationToTimestamp(this.props.duration)}`;
    } else {
      return '00:00';
    }
  }

  render() {
    return (
        <View>
          <MonoText style={_styles.record_statustxt}>{this.props.recordingState ? 'Recording' : 'not recording'}</MonoText>
          <MonoText style={_styles.record_timestamp}>{this.getTimestamp()}</MonoText>
        </View>
    );
  }
}

export { AudioRecordTimer };
