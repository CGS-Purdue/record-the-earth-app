import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Image,  Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _assets = Theme.Assets;

class RippleButton extends Component {
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
      <View style={_styles.ripplebtn_container_outer}>
      <Touchable
        style={_styles.ripplebtn_option}
        onPress={this.props.onPress}
        background={Touchable.Ripple('#ccc', false)}
      >
        <View style={_styles.ripplebtn_container_inner}>
          <Image
            style={_styles.ripplebtn_image}
            source={this.props.image}
            resizeMode="contain"
            fadeDuration={0}
          />
        </View>
      </Touchable>
     </View>
    );
  }
}



class IonicRippleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active : false,
      disabled : false,
    };
    this.active = false;
    this.disabled = false;
    this.name = '';
  }
  render() {
    return (
      <View>
        <Text style={_styles.ripplebtn_text}>Ripple</Text>
        <Touchable
          style={_styles.ripplebtn_option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressForums}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={_styles.ripplebutton_icon}>
              <Ionicons name={this.props.name}
                 size={22}
                 color="#ccc"
                 />
            </View>
            <View style={_styles.ripplebtn_option}>
              <Text style={_styles.ripplebtn_optionText}>Ask a question on the Expo forums</Text>
            </View>
          </View>
        </Touchable>
      </View>
    );
  }
}



export { RippleButton, IonicRippleButton };
