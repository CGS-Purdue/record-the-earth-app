import React, { Component } from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import { Theme } from  '../../Theme';
const _styles = Theme.Styles;
const _colors = Theme.Colors;

    // const {children, style, imageStyle, imageRef, ...props} = this.props;
export default class RootView extends Component {
  constructor(props) {
    super(props);
    this.view_ref = React.createRef();
    this.backgroundColor = _colors.TRANSPARENT;
    this.absolute = false;
  }
  render() {
    return (
      <ImageBackground style={_styles.bgImg} source={_assets.images.img_bg_cliff}>
        <SafeAreaView style={{flex: 1}}>
          <View ref={this.view_ref} style={_styles.rootContainer}>
            {this.props.children}
          </View>
        </SafeAreaView>
      <ImageBackground>
    );
  }
}


export { RootView }