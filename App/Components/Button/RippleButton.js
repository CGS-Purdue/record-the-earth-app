import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
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
      <Touchable
        style={RippButtonStyles.option}
        background={Touchable.Ripple('#ccc', false)}
        onPress={this.props.onPress}>

        <View style={{flexDirection: 'row'}}>
          <View style={RippButtonStyles.ripplebutton_icon}>
            <Image
              source={this.props.image}
              resizeMode="contain"
              fadeDuration={0}
              style={{ width: 20, height: 20, marginTop: 1 }}
            />
          </View>
        </View>
      </Touchable>
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
        <Text style={RippButtonStyles.ripplebutton_text}>Ripple</Text>
        <Touchable
          style={RippButtonStyles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressForums}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={RippButtonStyles.ripplebutton_icon}>
              <Ionicons name={this.props.name} size={22} color="#ccc" />
            </View>
            <View style={RippButtonStyles.optionTextContainer}>
              <Text style={RippButtonStyles.optionText}>Ask a question on the Expo forums</Text>
            </View>
          </View>
        </Touchable>
      </View>
    );
  }
}


const RippButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  ripplebutton_text: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  ripplebutton_icon: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});


export { RippleButton, IonicRippleButton };
