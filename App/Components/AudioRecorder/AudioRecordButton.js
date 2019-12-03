import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { RippleButton } from '../Button/RippleButton';
import { Theme } from '../../Theme';
const _styles = Theme.Styles;
const _assets = Theme.Assets;
// const _icons = Theme.Icons.Icons;

// <Image
//   style={this.state.isRecording ? _styles.show : _styles.hide }
//   source={IsRecordingIcon.module}
// />

class AudioRecordButton extends Component {
  constructor(props) {
    super(props);

    let initialActiveState = this.props.active;
    let initialDiabledState = this.props.disabled;

    this.state = {
      active: initialActiveState,
      disabled: initialDiabledState,
      statusText: 'status: Not Recording',
    };

    this.active = false;
  }

  componentDidMount() {
  }

  toggleState() {
    if (this.state.active) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  }

  enableButton() {
    console.log('button enabled');
    this.state.disabled= false;
  }

  disableButton() {
    console.log('button disable');
    this.state.disabled = true;
    // this.setState({disabled: true})
  }

  activate() {
    this.toggleState();
    this.disableButton();
    let n = 6;
    this.countdown = setInterval(()=>{
      n = n-1;
      console.log('button cooldown', n);
    }, 1000);

    setTimeout(()=>{
      console.log('\n\nbutton cooldown DONE\n\n');
      clearInterval(this.countdown);
      this.enableButton();
    }, 6000);


    console.log('\n\nactivating buttons\n\n');
    this.props.action();
  }

  handleButton = (event) => {
    event.preventDefault();
    if (this.props.disabled || this.state.disabled) {
      console.log('disabled button go back');
      return false;
    } else {
      this.activate();
    }
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleButton}
        style={_styles.button_touchable}
      >
        <Image
          // backgroundColor={this.state.active ? 'red' : 'green'}
          style={_styles.btn_rec_start}
          // backgroundColor={this.state.active ? 'red' : 'green'}
          source={_assets.buttons.btn_record_start}
        />

      </TouchableOpacity>
    );
  }
}

export { AudioRecordButton };
