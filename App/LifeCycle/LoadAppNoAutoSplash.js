import React from 'react';
import { Image, Text, View } from 'react-native';
import { SplashScreen } from 'expo';
import { Asset } from 'expo-asset';


export default class LoadAppNoAutoSplash extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    SplashScreen.preventAutoHide();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('./assets/images/splash.gif')}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        {...this.props.children}
      </View>
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/images/splash.gif');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('./assets/images/expo-icon.png'),
      require('./assets/images/slack-icon.png'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    this.setState({ isReady: true });
  };
}

export { LoadAppNoAutoSplash }
