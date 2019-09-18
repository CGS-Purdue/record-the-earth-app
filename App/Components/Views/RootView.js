import React, { Component } from 'react';
import { SafeAreaView,View } from 'react-native';

import { Theme } from  '../../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;


const outerStyles = Object.assign(
  _styles.rootview_container
);

const innerStyles = Object.assign(
  _styles.stretch
);


export default class RootView extends Component {
  constructor(props) {
    super(props);
    this.view_ref = React.createRef();
    this.backgroundColor = _colors.TRANSPARENT;
    this.absolute = false;
  }
  render() {
    return (
      <View ref={this.view_ref} style={outerStyles}>
        <SafeAreaView style={innerStyles}>
          {this.props.children}
        </SafeAreaView>
      </View>
    );
  }
}


export { RootView };
