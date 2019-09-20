import React, { Component } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { Platform, StatusBar, View } from 'react-native';
import { useScreens } from 'react-native-screens';
import {
  RootView,
  ImgBgFill
} from './Components/Views';

import AppNavContainer from './Screens/RootNavigation';
import { Theme } from './Theme';

const _fonts = Theme.Fonts;
const _icons = Theme.Icons;
const _assets = Theme.Assets;

// <ImageBackground style={_styles.bgImg} source={_assets.images.surveyLocation}>


console.log('Platform', Platform);
if (!Platform.OS === 'web'){
  useScreens();
}

class App extends Component {
  state = {isReady: false};

  _appLoadingOnError = (err) => {
    console.log("LOADING ERROR");
    console.warn(err);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={this._appLoadingOnError}
          autoHideSplash={true}
        />
      );
    } else {
      return (
        <View style={{flex: 1, backgroundColor: 'blue'}}>
        <ImgBgFill source={_assets.images.img_background}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavContainer theme={"dark"} ref={nav => {this.navigator = nav;} }/>
        </ImgBgFill>
      </View>
      );
    }
  }

  async _cacheResourcesAsync(){
      const _image_assets = Object.assign(
          _assets.buttons,
          _assets.logos,
          _assets.images
        );

      const cacheFonts = _fonts.loadFontMap(_fonts.FontMap);
      const cachedIcons = _icons.load(_icons.Icons);
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
      return Promise.all([ cacheImages, cachedIcons, cacheFonts ]);
   }
}

export { App };
