import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
// import { RippleButton } from '../Button/RippleButton';
import { Theme } from '../../Theme';
import { IonicFontIcon } from '../Icon/FontIcon';

const _colors = Theme.Colors;
const _styles = Theme.Styles;
// const _assets = Theme.Assets;
const _layout = Theme.Layout;

const AudioPlayButtonSize = _layout.TEXT_SIZE_5 * 2;

// <Image
//   style={this.state.isRecording ? _styles.show : _styles.hide }
//   source={IsRecordingIcon.module}
// />

class AudioPlayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      disabled: false,
      statusText: 'status: Not Playing',
    };
    this.active = false;
    this.disabled = false;
  }

  toggleState() {
    if (this.state.active) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  }

  handleButton = () => {
    this.toggleState();
    this.props.onPress();
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleButton}
        style={[_styles.record_button, this.props.style]}
        disabled={this.props.disabled}
      >
        <IonicFontIcon
          name={this.props.isPlaying ? 'pause' : 'play'}
          size={this.props.size ? this.props.size : AudioPlayButtonSize}
          style={_styles.button_touchable}
          color={this.props.color ? this.props.color : _colors.BLACK}
        />
      </TouchableOpacity>
    );
  }
}

export { AudioPlayButton };
