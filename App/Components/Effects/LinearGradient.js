import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class FacebookButton extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{
            padding: 15,
            alignItems: 'center',
            borderRadius: 5
          }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
      </View>
    );
  }
}

// <View style={{ flex: 1 }}>
// <View style={{ backgroundColor: 'orange', flex: 1 }} />
// </View>
class BlackFade extends React.Component {
  render() {
    return (
        <LinearGradient
          colors={['rgba(255,0,0,.2)', 'transparent', 'rgba(0,0,0,0.4)']}
          locations={[0, .5, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
            width: '100%'
          }}
        />
    );
  }
}

export { FacebookButton, BlackFade }
