import React from 'react';
import { Text } from 'react-native';
import { ThemeColors, Layout } from '../../Theme'
// color
// fontSize
// lineHeight

class HeadingText extends React.Component {
  state = {
    value: 2
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
    )
  }
}


export { HeadingText }
