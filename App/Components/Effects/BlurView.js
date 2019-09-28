import { BlurView } from 'expo-blur';
import Constants from 'expo-constants';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Theme } from  '../../Theme';
const _styles = Theme.Styles;
const _colors = Theme.Colors;
// const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';


// props [src]

export default class BlurBgView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: '100%', height: '100%' }} source={this.props.src} />
        <BlurView tint="light" intensity={50} style={styles.notBlurred}>
          <Image style={{ width: '100%', height: '100%' }} source={this.props.src} />
        </BlurView>
        <View style={_styles.rootview_container}>
          {this.props.children}
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notBlurred: {
    ...StyleSheet.absoluteFill,
    // top: Constants.statusBarHeight,
  },
});


export { BlurBgView };
