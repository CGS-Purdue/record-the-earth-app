import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { RippleButton } from '../Button/RippleButton';
import { Theme } from '../../Theme';
const _styles = Theme.Styles;
const _assets = Theme.Assets;
const _icons = Theme.Icons.Icons;

// <Image
//   style={this.state.isRecording ? _styles.show : _styles.hide }
//   source={IsRecordingIcon.module}
// />

class AudioRecordButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      disabled: false,
    };
    this.active = false;
    this.disabled = false;
    this.state = {
      statusText: 'status: Not Recording',
    };
  }

  toggleState() {
    if (this.state.active) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  }

  handleButton = () => {
    if (this.props.disabled || this.state.disabled) {
      return false;
    }
    this.setState({disabled: true });

    this.setTimeout(()=>{
        console.log('button cooldown');
        this.setState({disabled: false})
      }, 500);

    this.toggleState();
    this.props.onPress();
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleButton}
        style={_styles.button_touchable}
        disabled={this.props.disabled}
      >
        <Image
          style={_styles.btn_rec_start}
          source={_assets.buttons.btn_record_start}
        />
      </TouchableOpacity>
    );
  }
}

export { AudioRecordButton };
