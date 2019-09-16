import React, { Component } from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";


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
