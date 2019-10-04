import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';


// Animated.timing(this.state.xPosition, {
//   toValue: 100,
//   easing: Easing.back(),
//   duration: 2000,
// }).start();
//


// Animated.sequence([
//   // decay, then spring to start and twirl
//   Animated.decay(position, {
//     // coast to a stop
//     velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
//     deceleration: 0.997,
//   }),
//   Animated.parallel([
//     // after decay, in parallel:
//     Animated.spring(position, {
//       toValue: {x: 0, y: 0}, // return to start
//     }),
//     Animated.timing(twirl, {
//       // and twirl
//       toValue: 360,
//     }),
//   ]),
// ]).start(); // start the sequence group


// Bear in mind
// While using transform styles such as rotateY, rotateX, and others ensure the transform style perspective is in place. At this time some animations may not render on Android without it. Example below.
//
// <Animated.View
//   style={{
//     transform: [
//       {scale: this.state.scale},
//       {rotateY: this.state.rotateY},
//       {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
//     ],
//   }}
// />
//


class DemoAnim extends Component {

  componentWillMount () {
    this._animatedValue = new Animated.Value(0);
  }

  componentDidMount () {
    Animated.timing(this._animatedValue, {
        toValue: 100,
        duration: 3000,
    }).start();
  }

  render () {
 const interpolatedRotateAnimation = this._animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg'],
    });

    const interpolatedColorAnimation = this._animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['rgba(255,255,255, 1)', 'rgba(51,156,177, 1)'],
    });

    return (
      <View style={styles.container}>
       <Animated.View
        style={[
          styles.box,
          {
            backgroundColor: interpolatedColorAnimation,
            transform: [
              {translateY: this._animatedValue},
              {rotate: interpolatedRotateAnimation},
            ],
          },
        ]}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 100,
    left: 100,
    width: 100,
    height: 100,
  },
});


export { DemoAnim };
