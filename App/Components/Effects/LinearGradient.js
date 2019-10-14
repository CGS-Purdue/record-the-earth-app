import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class GradientButton extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <Text style={{ backgroundColor: 'transparent', fontSize: 15, color: '#fff'}}>
            {'Click'}
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
    let gradientStyle = {position: 'absolute', left: 0, right: 0, top: 0, height: '100%', width: '100%'};
    return (
      <LinearGradient
        locations={[0, 0.5, 1]}
        colors={['rgba(255,0,0,.2)', 'transparent', 'rgba(0,0,0,0.4)']}
        style={gradientStyle}
      />
    );
  }
}

// <View style={{ flex: 1 }}>
// <View style={{ backgroundColor: 'orange', flex: 1 }} />
// </View>
class GreenFade extends React.Component {
  render() {
    let gradientStyle = {position: 'absolute', left: 0, right: 0, top: 0, height: '100%', width: '100%'};
    return (
      <LinearGradient
        locations={[0, 0.5, 1]}
        colors={['rgba(255,0,0,.2)', 'transparent', 'rgba(0,0,0,0.4)']}
        style={gradientStyle}
      />
    );
  }
}

// <View style={{ flex: 1 }}>
// <View style={{ backgroundColor: 'orange', flex: 1 }} />
// </View>
class MirageGrad extends React.Component {
  render() {
    let gradientStyle = {position: 'absolute', left: 0, right: 0, top: 0, height: '100%', width: '100%'};
    return (
      <LinearGradient
        locations={[0, 1]}
        colors={['#3A6073', '#16222A']}
        style={gradientStyle}
      />
    );
  }
}
// <View style={{ flex: 1 }}>
// <View style={{ backgroundColor: 'orange', flex: 1 }} />
// </View>
// colors={['rgba(35,35,35,.3)', 'rgba(0,0,0,.43)','rgba(0,0,0,.8)', 'rgba(0,0,0,0)']}
// locations={[1, .66, .33, 0]}
class Scrim extends React.Component {
  render() {
    return (
      <LinearGradient
        locations={[0, .5, .8]}
        colors={['rgba(35,35,35,.3)', 'rgba(21,21,21,.35)', 'rgba(0,0,0,0)']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%', width: '100%'}}
      />
    );
  }
}

export { GradientButton, BlackFade, Scrim, MirageGrad };
