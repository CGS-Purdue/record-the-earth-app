import React, { Component } from 'react';
import { View } from 'react-native';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;

export default class BoxY extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Placeholder',
      title: 'empty',
      name: 'none',
      error: false,
    };
  }

  render() {
    return (
      <View style={boxyStyle}>
        <View style={boxyInStyle}>{this.props.children}</View>
      </View>
    );
  }
}
const boxyStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection:'column',
};

const boxyInStyle = {
  flex: [1, 1, 0],
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 0,
  marginBottom: 0,
};

export { BoxY };
