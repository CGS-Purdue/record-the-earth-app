import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _icons = Theme.Icons.Icons;


// <Image
//   style={this.state.isRecording ? _styles.show : _styles.hide }
//   source={IsRecordingIcon.module}
// />

class AudioRecordButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active : false,
      disabled : false,
    };
    this.active = false;
    this.disabled = false;
  }

  toggleState() {
    if (this.state.active) {
      this.setState({active: false});
    } else {
      this.setState({active: true});
    }
  }

  handleButton = () => {
    this.toggleState();
    this.props.onPress();
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleButton}
        style={_styles.record_button}
        disabled={this.state.syncing}
      >
        <Image style={_styles.record_buttonicon} source={_icons.icon_record.module} />
      </TouchableOpacity>
    );
  }
}

export { AudioRecordButton };
