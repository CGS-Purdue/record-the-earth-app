import React, { useState } from 'react';
import { Animated, Text, View } from 'react-native';


const FadeInViewFN = (props) => {
  // Initial value for opacity: 0
  const [fadeAnim] = useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(
      this.state.fadeAnim,      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, []);

  return (
    <Animated.View>
      style={{
        ...props.style,
        opacity: this.state.fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInViewFN style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInViewFN>
    </View>
  );
};


export { FadeInViewFN };
