import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ThemeColors } from '../Theme';
import { Styles } from '../Theme/Stylesheet';

export default class RootView extends React.Component {
  constructor(props) {
    super(props);
    this.viewRef = React.createRef();
    this.background = 'rbga(0,0,0,0)';
    this.absolute = false;
  }

  componentDidMount() {

  }
  componentWillUnmount(){

  }

  getContainerStyle () {
    if (this.props.absolute) {
      return Styles.rootContainer;
    } else {
      return Styles.absoluteRootContainer;
    }
  }

  render() {
  const baseStyle = this.getContainerStyle();
  const userStyle = this.props.style;

    return (
      <View {...this.props}
        ref={this.viewRef}
        style={[userStyle,baseStyle]}>
        {this.props.children}
      </View>
    )
  }
}

export { RootView }
