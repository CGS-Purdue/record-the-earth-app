import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { Component } from 'react';
import { Image, View, SafeAreaView } from 'react-native';
import { initalAppSetup, preLoadFontCache,  preLoadImageCache } from './Utilities/InitialSetup';
import AppContainer from './Navigation/AppNavigator';
import { _dev } from './Utilities/Log';
import { Theme } from './Theme';
// import { Ionicons } from '@expo/vector-icons';
// import { Platform, StatusBar } from 'react-native';


const LOG_CTX = 'App';
const _icons = Theme.Icons;
const _assets = Theme.Assets;
const _styles = Theme.Styles;

const AppBgImg = Theme.Variables.APP_CONTAINER_BGIMG;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      initSetup: false,
      // loaded: false,
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    _dev([LOG_CTX, 'did mount']);
    this.checkAppSetup();
  }

  async checkAppSetup(){
    const isSetup = await initalAppSetup();
    _dev([LOG_CTX, 'is Setup'], isSetup);

    this._initSetup = true;
    if (isSetup && this._isMounted) {
      this.setState({ initSetup: true})
    }
  }


  _handleNavigationChange = (prevState, newState, action) => {
    var logmsg, logData;
    if (__DEV__) {
      logmsg = `${action.type} ${action.routeName}`
      logData = {
        _action: action,
        statePrev: prevState,
        stateNew: newState,
      };
      if (action.params){
        logmsg = ['[Navigation Params]'].join(' ');
        logData = action.params;
        _dev(['Navigation', 'handleNavigationChange', logmsg], logData);
      }
    }
  }


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
          autoHideSplash={true}
        />
      );
    } else {
      return (
        <View style={_styles.app_rootview}>
          <View style={_styles.app_inner_wrap}>
            <Image style={_styles.app_bgimg} source={AppBgImg} />
            <SafeAreaView style={_styles.app_safearearoot}>
              <View style={_styles.app_bg}>
                <AppContainer
                  theme={'dark'}
                  ref={(nav) => {this.navigator = nav}}
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

    try {
      // let preloadsFonts = await _fonts.PreloadedFonts;
      // let fontsLoaded = Promise.all(preloadsFonts);
      // const loadFontMap = Theme.Fonts.loadFontMap;
      // loadFontMap(theme_fonts);
      // const theme_fonts = Theme.Fonts.FontMap;
      // let cacheFonts = await preLoadFontCache(theme_fonts)
      // cachePromises.push(...preloadsFonts);
      // for (var font of Theme.Fonts.FontCache){
      //   cachePromises.push(font.src);
      // }

      let cacheImages = await preLoadImageCache(image_assets);
      cachePromises.push(JSON.parse(cacheImages));

      let cacheFonts = await preLoadFontCache(_fonts.FontMap);
      cachePromises.push(cacheFonts);

      let resolved = Promise.all(...cachePromises);

      _dev([LOG_CTX, 'cachePromises', 'resolved'], resolved);

      let done = resolved.then(function(res){ return res });

      return done;
    } catch (e) {
      console.log('load error', e);
    }
  }
}
