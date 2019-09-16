import React from 'react';
import { Animated } from 'react-native';


class FadeInView extends React.Component {
  state = {
    fadeInAnim: new Animated.Value(0), // Initial value for opacity: 0
  };

  componentDidMount() {
    // Animate over time
    Animated.timing(
      this.state.fadeInAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    let { fadeInAnim } = this.state;
    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeInAnim, // Bind opacity to animated value
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}


class FadeOutView extends React.Component {
  state = {
    fadeOutAnim: new Animated.Value(1), // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeOutAnim, // The animated value to drive
      {
        toValue: 0, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    let { fadeOutAnim } = this.state;

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeOutAnim, // Bind opacity to animated value
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
