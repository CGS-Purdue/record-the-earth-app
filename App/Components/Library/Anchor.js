import { Linking, Text } from 'react-native';
import React, { Component } from 'react';


///
// __URL__
// ```
// <Anchor href="https://google.com">Go to Google</Anchor>
// ```
// __MAIL__
// ```
// <Anchor href="mailto://support@expo.io">Email support</Anchor>
// ```
///

class Anchor extends React.Component {
  _handlePress = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <Text {...this.props} onPress={this._handlePress}>
        {this.props.children}
      </Text>
    );
  }
}


export { Anchor }
