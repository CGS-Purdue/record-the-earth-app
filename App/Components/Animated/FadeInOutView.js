import React, { useState, useEffect } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

const EASE_IN_OUT_CUBIC = Easing.bezier(0.645, 0.045, 0.355, 1.0);
const EASE_OUT = Easing.bezier(0, 0, 0.58, 1);
const EASE_IN = Easing.bezier(0.42, 0, 1, 1);

class FadeInView extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    fadeInAnim: new Animated.Value(0),
  };
}

  componentDidMount() {
    Animated.timing(
      this.state.fadeInAnim,
      {
        delay: 300,
        toValue: 1,
        easing: EASE_IN,
        isInteraction: false,
        duration: 2200,
      }
    ).start();
  }

  render() {
    let { fadeInAnim } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeInAnim,
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}


class FadeOutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeOutAnim: new Animated.Value(1),
    };
  }


  componentDidMount() {
    Animated.timing(
      this.state.fadeOutAnim, // The animated
      {
        toValue: 0, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    let { fadeOutAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeOutAnim,
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         ...
//         <FadeInView style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}>
//           <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
//         </FadeInView>
//         ...
//          </View>
//     );
//   }
// }


export { FadeInView, FadeOutView };
