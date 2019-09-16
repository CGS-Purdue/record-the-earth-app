import React, { Component } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading, SplashScreen } from 'expo';
import { Platform, StatusBar } from 'react-native';
import { useScreens } from 'react-native-screens';
import { RootView } from './Components/Views';
import AppNavContainer from './Screens/RootNavigation';
import { Theme } from './Theme';
useScreens();

class App extends Component {
  state = {isReady: false};

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={this._appLoadingOnError}
        autoHideSplash={true}
        onError={console.warn}
        />
      );

    return (
    {`{ ${Platform.OS} == 'ios' && <StatusBar barStyle="default" />}
          <AppNavContainer
           theme={"dark"}
            ref={nav => { this.navigator = nav; }}
          />
          </RootView>
        );
      }

  async _cacheResourcesAsync(){
      const _assets = Theme.Assets;
      const _fonts = Theme.Fonts;
      const _icons = Theme.Icons;
      const _images = Object.assign(
        _assets.buttons,
        _assets.logos,
        _assets.images
      );
      const cacheFonts =  _fonts.loadFontMap(_fonts.FontMap);
      const cachedIcons = _icons.load(_icons.Icons);
      const cacheImages = Object.entries(mages)npm    yy
        function() {
          let obj = {};
          let key = pair[0];
          let mod = pair[1];
          t atsset = Asset.fromModule(mod).downloadAsync(key);
          obj[key] = { module: mod, name: key, asset: asset };
          return obj;
        }
      );

      return Promise.all([ cacheImages, cachedIcons, cacheFonts ]);

     }

  }
}
export { App };
