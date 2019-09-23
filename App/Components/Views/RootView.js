import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { ErrorBoundary } from '../../Utilities/ErrorBoundary';
import { Theme } from  '../../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;


export default class RootView extends Component {
  constructor(props) {
    super(props);
    this.view_ref = React.createRef();
    this.backgroundColor = _colors.TRANSPARENT;
    this.absolute = false;
  }

  render() {
    return (
      <View ref={this.view_ref} style={ _styles.rootview_container}>
          <SafeAreaView style={_styles.stretch}>
            <ErrorBoundary>
              {this.props.children}
            </ErrorBoundary>
          </SafeAreaView>
      </View>
    );
  }
}


export { RootView }
