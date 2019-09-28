import React, { Component } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { Platform, StatusBar, View } from 'react-native';
import { AppContainer, ThemeAppContainer } from './Containers/AppContainer';

import { Theme } from './Theme';
import { initalAppSetup } from './Utilities/InitialSetup';
import { Ionicons } from '@expo/vector-icons';

const _fonts = Theme.Fonts;
const _icons = Theme.Icons;
const _assets = Theme.Assets;
// function cacheFonts(fonts) {
//   return fonts.map(font => Font.loadAsync(font));
// }

export default class App extends Component {
  state = {isReady: false};
  _appLoadingOnError = (err) => {
    console.log('LOADING ERROR', err);
  }

  componentDidMount() {
    const isSetup = initalAppSetup();
    // console.log('exporting theme cache');
    // console.log('\n\n\n' , JSON.stringify(Theme.styles), '\n\n\n');
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={this._appLoadingOnError}
          autoHideSplash={true}
        />
      );
    } else {
      return (
        <AppContainer />
      );
    }
  }

   async cacheResourcesAsync() {
      const _image_assets = Object.assign(
          Theme.Assets.buttons,
          Theme.Assets.logos,
          Theme.Assets.images,
          Theme.Assets.icons,
        );

      const cacheImages = Object.entries(_image_assets).map(
        function (pair) {
          let obj = {};
          let key = pair[0];
          let mod = pair[1];
          let asset = Asset.fromModule(mod).downloadAsync(key);
          obj[key] = {
            module: mod,
            name: key,
            asset: asset,
          };
          return obj;
        }
      );

      const _font_map = Theme.Fonts.FontMap;
      const cacheFonts = Theme.Fonts.loadFontMap(_font_map);

      return Promise.all([ cacheImages, cacheFonts ]);
  }
}
