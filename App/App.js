import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { Component } from 'react';
import { Image, View, SafeAreaView } from 'react-native';
import { initalAppSetup, preLoadFontCache,  preLoadImageCache } from './Utilities/InitialSetup';
import AppContainer from './Navigation/AppNavigator';
// import { Ionicons } from '@expo/vector-icons';
// import { Platform, StatusBar } from 'react-native';

import { Theme } from './Theme';

const _icons = Theme.Icons;
const _assets = Theme.Assets;
const _styles = Theme.Styles;

const AppBgImg = Theme.Variables.APP_CONTAINER_BGIMG;
console.log(  AppBgImg, Theme.Variables.APP_CONTAINER_BGIMG, Theme.Variables );

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loaded: false,
    };
    console.log('[App] constructored');
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    const isSetup = initalAppSetup();
    console.log('isSetup', isSetup);
    console.log('[AppThemeContainer] did mount');
  }

  _handleNavigationChange = (prevState, newState, action) => {
    var logmsg, logData;
    if (__DEV__) {
      logmsg = ['[Navigation]', `${action.type}`, `${action.routeName}`].join(' ');

      logData = {
        _action: action,
        statePrev: prevState,
        stateNew: newState,
      };

      if (action.params){
        logmsg = ['[Navigation Params]'].join(' ');
        logData = action.params;
        console.log(logmsg, logData);
      }
    }
  };

  _appLoadingOnError = (err) => {
    console.log('LOADING ERROR', err);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onError={this._appLoadingOnError}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    } else {
      return (
        <View style={_styles.app_rootview}>
          <View style={_styles.app_inner_wrap}>
            <Image style={_styles.app_bgimg} source={AppBgImg} />
            <SafeAreaView style={_styles.app_safearearoot}>
              <View style={_styles.app_bg}>
                <AppContainer theme={'dark'} ref={
                    (nav) => {this.navigator = nav;}
                  }
                  onNavigationStateChange={this._handleNavigationChange}
                />
              </View>
            </SafeAreaView>
          </View>
        </View>
      );
    }
  }


  cacheResourcesAsync = async () => {
    let cachePromises = [];
    const image_assets = Object.assign(
      Theme.Assets.buttons,
      Theme.Assets.logos,
      Theme.Assets.images,
      Theme.Assets.icons
    );

    const _fonts = Theme.Fonts;
    let preloadsFonts = await _fonts.PreloadedFonts;
    let fontMap0 = await _fonts.FontMap0;
    console.log('[_FONTS, PRELOADEDFONTS]', preloadsFonts);
    console.log('fontMap0', fontMap0);
    let fontsLoaded = Promise.all([...preloadsFonts]);
    console.log('fontsloaded', fontsLoaded);

    try {
      let cacheImages = await preLoadImageCache(image_assets);
      cachePromises.push(JSON.parse(cacheImages));

      // const loadFontMap = Theme.Fonts.loadFontMap;
      // loadFontMap(theme_fonts);
      // const theme_fonts = Theme.Fonts.FontMap;
      // let cacheFonts = await preLoadFontCache(theme_fonts)
      // console.log('cacheFonts', cacheFonts);
      // cachePromises.push(...cacheFonts);
      // for (let font of Theme.Fonts.FontCache){
      //   FontCache.push(font.src);
      // }
      const done = await Promise.all(...cachePromises, ...preloadsFonts);
      console.log('done', done);
      return done;
    } catch (e) {
      console.log('load error', e);
    } finally {
      console.log('load fonts');
      return cachePromises;
    }
  }
}
