import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Platform, StatusBar } from 'react-native';
import { AppNavContainer } from './Screens/RootNavigation';
import { Theme } from './Theme';
import { RootView } from './Components/Views';
import { Log } from './Utilities/Log';

const _assets = Theme.Assets;
const _fonts = Theme.Fonts;
const _icons = Theme.Icons;

class App extends Component {
  _log = Log._log;
  _info = Log._info;
  _data = Log._data;
  state = {
    isReady: false,
  };

  _appLoadingOnFinished = () => {
    this._info('App Loading finished');
    this.setState({isReady: true});
    this._data({
      title: 'App',
      src: './App',
      data: this,
    });
  }

  _appLoadingOnError = (err) => {
    console.log("LOADING ERROR");
    console.warn(err);
  }

  render() {
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

  async _cacheResourcesAsync () {
    const _image_assets = Object.assign(
      _assets.buttons,
      _assets.logos,
      _assets.images
    );
    const cacheImages = Object.entries(_image_assets).map(function(pair){
        let obj = {};
        let key = pair[0];
        let mod = pair[1];
        let asset = Asset.fromModule(mod).downloadAsync();
        obj[key] = { module: mod, name: key, asset: asset };
        return obj;
    });
    const cacheFonts =  _fonts.loadFontMap(_fonts.FontMap);
    const cachedIcons = _icons.load(_icons.Icons);
    return Promise.all([
      cacheImages,
      cachedIcons,
      cacheFonts,
    ]);
  }
}


export default App;
