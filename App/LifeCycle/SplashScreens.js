import React from 'react';
import { Image, Text, View } from 'react-native';
import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';


// Example with AppLoading
// React component that tells Expo to keep the app loading screen open if it is the first and only component rendered in your app. Unless autoHideSplash prop is set to false the loading screen will disappear and your app will be visible when the component is removed
// import { AppLoading } from 'expo';
// props
// The following props are recommended, but optional for the sake of backwards compatibility (they were introduced in SDK21). If you do not provide any props, you are responsible for coordinating loading assets, handling errors, and updating state to unmount the AppLoading component.
// startAsync (function) -- A function that returns a Promise, and the Promise should resolve when the app is done loading required data and assets.
// onError (function) -- If startAsync throws an error, it is caught and passed into the function provided to onError.
// onFinish (function) -- (Required if you provide startAsync). Called when startAsync resolves or rejects. This should be used to set state and unmount the AppLoading component.
// autoHideSplash (boolean) -- Whether to hide the native splash screen as soon as you unmount the AppLoading component. See SplashScreen module for an example.
//
//import { SplashScreen } from 'expo';
// SplashScreen.preventAutoHide()
// Makes the native splash screen (configured in app.json) stay visible until hide is called.
// SplashScreen.hide()
// Hides the native splash screen.
//
// APP.JSON "splash": {
//  "image": "./assets/splash.png",
//  "backgroundColor": "#FEF9B0"
//}
//splash.resizeMode
///
///
///if (!this.state.isSplashReady) {
//   return (
//     <AppLoading
//       startAsync={this._cacheSplashResourcesAsync}
//       onFinish={() => this.setState({ isSplashReady: true })}
//       onError={console.warn}
//       autoHideSplash={false}
//     />
//   );
// }
// if (!this.state.isAppReady) {
//   return (
//     <View style={{ flex: 1 }}>
//     <Image source={require('./splash.jpg')}
//     onLoad={this._cacheResourcesAsync}
//     />
//     </View>
//   );
// }
// if (!this.state.isReady) {
//   return (
//      <AppLoading
//         startAsync={this._cacheResourcesAsync}
//         onFinish={this._appLoadingOnFinished}
//         onError={this._appLoadingOnError}
//         autoHideSplash={true}
//     />
//   );
// } else {
// return (
// <RootView>
// {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
// <AppNavContainer ref={nav => { this.navigator = nav; }}/>
// </RootView>
// );
// }
// }
// }

  // _cacheSplashResourcesAsync = async () => {
  //   const splashimg = require('./splash.jpg');
  //   return Asset.fromModule(splashimg).downloadAsync();
  // };

  // _cacheResourcesAsync = async () => {
  // this.setState({ isAppReady: true });
  // SplashScreen.hide();

//   // _appLoadingOnFinished = () => {
      // this._info('App Loading finished');
      // this.setState({
        // isReady: true,
      // this._data({
      //   title: 'App',
      //   src: './App',
      //   data: this,
      // });
      // });
    // }
//
//
export default class Splash extends React.Component {
  state = {
    isSplashReady: false,
    isAppReady: false,
  };

  render() {
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady) {
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
    this.setState({ isAppReady: true });
  };
}


// Example without AppLoading


export default class ApploadNoAnim extends React.Component {
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


// Example without any flickering between SplashScreen and its later continuation




export default class App extends React.Component {
  state = { areResourcesReady: false };

  constructor(props) {
    super(props);
    SplashScreen.preventAutoHide(); // Instruct SplashScreen not to hide yet
  }

  componentDidMount() {
    this.cacheResourcesAsync() // ask for resources
      .then(() => this.setState({ areResourcesReady: true })) // mark resources as loaded
      .catch(error => console.error(`Unexpected error thrown when loading:
${error.stack}`));
  }

  render() {
    if (!this.state.areResourcesReady) {
      return null;
    }

    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{ flex: 1, resizeMode: 'contain', width: undefined, height: undefined }}
          source={require('./assets/splash.png')}
          onLoadEnd={() => {
            // wait for image's content to fully load [`Image#onLoadEnd`] (https://facebook.github.io/react-native/docs/image#onloadend)
            console.log('Image#onLoadEnd: hiding SplashScreen');
            SplashScreen.hide(); // Image is fully presented, instruct SplashScreen to hide
          }}
          fadeDuration={0} // we need to adjust Android devices (https://facebook.github.io/react-native/docs/image#fadeduration) fadeDuration prop to `0` as it's default value is `300`
        />
      </View>
    );
  }

  async cacheResourcesAsync() {
    const images = [require('./assets/splash.png')];
    const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
    return Promise.all(cacheImages);
  }
}
