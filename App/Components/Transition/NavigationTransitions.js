// ref: react-navigation/example/App.tsx
//

import { Animated, Easing } from 'react-native';

var DefaultTransitionSpec = {
  duration: 250,
  easing: Easing.inOut(Easing.ease),
  timing: Animated.timing
};


const scale = this.state.scrollY.interpolate({
  extrapolate: 'clamp',
  inputRange: [-450, 0, 100],
  outputRange: [2, 1, 0.8],
});

const translateY = this.state.scrollY.interpolate({
  inputRange: [-450, 0, 100],
  outputRange: [-150, 0, 40],
});

const opacity = this.state.scrollY.interpolate({
  extrapolate: 'clamp',
  inputRange: [0, 50],
  outputRange: [1, 0],
});

const underlayOpacity = this.state.scrollY.interpolate({
  extrapolate: 'clamp',
  inputRange: [0, 50],
  outputRange: [0, 1],
});

const backgroundScale = this.state.scrollY.interpolate({
  extrapolate: 'clamp',
  inputRange: [-450, 0],
  outputRange: [3, 1],
});

const backgroundTranslateY = this.state.scrollY.interpolate({
  inputRange: [-450, 0],
  outputRange: [0, 0],
});
