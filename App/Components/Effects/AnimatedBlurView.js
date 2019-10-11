import { BlurView } from 'expo-blur';
import React from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';

const uri =
  'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

// tint A string: light, default, or dark.
// intensity A number from 1 to 100 to control the intensity of the blur effect.

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default class BlurViewExample extends React.Component {
  state = {
    intensity: new Animated.Value(0),
  };

  componentDidMount() {
    this._animate();
  }

  _animate = () => {
    let { intensity } = this.state;
    Animated.timing(intensity, { duration: 2500, toValue: 100 }).start(() => {
      Animated.timing(intensity, { duration: 2500, toValue: 0 }).start(
        this._animate
      );
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image style={{ width: 180, height: 180 }} source={{ uri }} />

        <AnimatedBlurView
          tint='default'
          intensity={this.state.intensity}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}
