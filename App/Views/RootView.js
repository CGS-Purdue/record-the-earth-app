import React, { Component } from 'react';
import { View } from 'react-native';
import { ThemeColors, Styles } from '../Theme';

export default class RootView extends Component {
  constructor(props) {
    super(props);
    this.view_ref = React.createRef();
    this.backgroundColor = ThemeColors.TRANSPARENT;
    this.absolute = false;
  }

  // componentDidMount() {}

  // componentWillUnmount(){}

  render() {
    return (
      <View ref={this.view_ref} style={Styles.rootContainer} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}


export { RootView };
