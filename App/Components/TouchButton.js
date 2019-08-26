import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ThemeColors } from '../Theme';
import { ThemeFonts } from  '../Theme/Fonts';


const touchButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  margin: 0,
};

export default class TouchButton extends Component {
  constructor(props) {
    super(props);
    this.active = false;
    this.state= {
      active: false,

    };
    this.text = false;
    this.image = false;
    this.disabled = false;
    this.underlayColor = '#333'
  }

  toggleState() {
      if (this.state.active) {
        this.setState(false);
      } else {
        this.setState(true);
      }
  }


  render() {
    this.underlayColor = this.props.color;
    this.onPress = this.props.onPress;

    return (
      <View style={{borderColor : 'blue',borderWidth:1,borderStyle:'solid'}}>
      <TouchableHighlight
        style={[touchButtonStyle]}
        underlayColor={this.props.color}
        onPress={this.props.onPress}>
          {this.props.children}
      </TouchableHighlight>
    </View>
    )
  }
}

export { TouchButton }
