
# AppLoading

React component that tells Expo to keep the app loading screen open if it is the first and only component rendered in your app.

Unless autoHideSplash prop is set to false the loading screen will disappear and your app will be visible when the component is removed

```js
import { AppLoading } from 'expo';
```

## props

The following props are recommended, but optional for the sake of backwards compatibility (they were introduced in SDK21). If you do not provide any props, you are responsible for coordinating loading assets, handling errors, and updating state to unmount the AppLoading component.

- startAsync (function) -- A function that returns a Promise, and the Promise should resolve when the app is done loading required data and assets.
- onError (function) -- If startAsync throws an error, it is caught and passed into the function provided to onError.
- onFinish (function) -- (Required if you provide startAsync). Called when startAsync resolves or rejects. This should be used to set state and unmount the AppLoading component.
- autoHideSplash (boolean) -- Whether to hide the native splash screen as soon as you unmount the AppLoading component. See SplashScreen module for an example.

# SplashScreen

```js
import { SplashScreen } from 'expo';
```

`SplashScreen.preventAutoHide()`

Makes the native splash screen (configured in app.json) stay visible until hide is called.

`SplashScreen.hide()`

Hides the native splash screen.

APP.JSON "splash": {
 "image": "./assets/splash.png",
 "backgroundColor": "#FEF9B0"
}

`splash.resizeMode`

```js
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
    <Image source={require('./splash.jpg')}
    onLoad={this._cacheResourcesAsync}
    />
    </View>
  );
}
```

```js
if (!this.state.isReady) {
  return (
     <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={this._appLoadingOnFinished}
        onError={this._appLoadingOnError}
        autoHideSplash={true}
    />
  );
} else {
  return (
    <RootView>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}   
      <AppNavContainer ref={nav => { this.navigator = nav; }}/>
    </RootView>
    );
  }
}
```

```js
_cacheSplashResourcesAsync = async () => {
  const splashimg = require('./splash.jpg');
  return Asset.fromModule(splashimg).downloadAsync();
};
```

```js
_cacheResourcesAsync = async () => {
  this.setState({ isAppReady: true });
  SplashScreen.hide();

  _appLoadingOnFinished = () => {
    this._info('App Loading finished');
      this.setState({ isReady: true });
  }
```
