import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Image, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { RootNavigation } from './Navigation/RootNavigation';

import { Theme } from './Theme';

const _fonts = Theme.Fonts;
const _icons = Theme.Icons;
const _assets = Theme.Assets;

const AppBgImg = Theme.Variables.APP_CONTAINER_BGIMG;

const AppContainer = createAppContainer(RootNavigation);

export default class App extends Component {
  constructor(props) {
    super(props);
    const { navigation }  = this.props;
    this._assets = Theme.Assets;
    this._colors = Theme.Colors;
    this._fonts = Theme.Fonts;
    this._layout = Theme.Layout;
    this._styles = Theme.Styles;
    this._vars = Theme.Variables;
    this.state = {
      isReady: false
    }
  }

  componentDidMount() {
    console.log('[AppThemeContainer] did mount', this);
  }

  _handleNavigationChange = (prevState, newState, action) => {
    console.log('nav change', newState, action);
    if (__DEV__) {
      console.log('Navigation Change:', prevState, newState, action);
    }
  };

  _appLoadingOnError = (err) => {
    console.log('LOADING ERROR', err);
  }

  componentDidMount() {
    // const isSetup = initalAppSetup();
    // console.log('isSetup', isSetup);
    // console.log('\n\n\n' , JSON.stringify(Theme.styles), '\n\n\n');
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={this._appLoadingOnError}
          />
      );
    } else {
      return (
        <View style={AppRootStyles.app_rootview}>
          <View style={AppRootStyles.app_inner_wrap}>
            <Image style={AppRootStyles.app_bgimg} source={AppBgImg} />
            <SafeAreaView style={AppRootStyles.app_safearearoot}>
              <View style={AppRootStyles.app_bg}>
                <AppContainer
                  theme="dark"
                  ref={(nav) => {this.navigator = nav;}}
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
    const _image_assets = Object.assign(
      Theme.Assets.buttons,
      Theme.Assets.logos,
      Theme.Assets.images,
      Theme.Assets.icons,
    );

    let cachePromises = [];
    try {

      const cacheImages = Object.entries(_image_assets)
        .map((pair) => {
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
        });
      cachePromises.push(cacheImages);
      const _font_map = Theme.Fonts.FontMap;
      const cacheFonts = Theme.Fonts.loadFontMap(_font_map);
      cachePromises.push(cacheFonts);
    } catch (e) {
      console.log('load error', e);
    } finally {
      return Promise.all(cachePromises);
    }
  }
}


const AppRootStyles = {
  app_inner_wrap: {
     display: 'flex',
     width: '100%',
     height: '100%',
     flex: 1,
  },
   app_bg: {
    flex: 1,
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
    borderColor: 'yellow',
    borderWidth: 1,
    backgroundColor: Theme.Variables.TRANSPARENT,
  },
   app_safearearoot: {
    display: 'flex',
    flex: 1,
  },
   app_rootview: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
    backgroundColor: Theme.Variables.APP_CONTAINER_BGCOLOR, //'rgba(29,36,38,1)',
  },
   app_bgimg: {
    width: '100%',
    height: '100%',
    left: 0,
    position: 'absolute',
    display: 'flex',
    flex: 1,
  },
  app_bgimg_wrap: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    flexBasis: '100%',
    backgroundColor: Theme.Variables.TRANSPARENT,
    flex: 1,
  },
   app_bgimgbg_fill: {
    backgroundColor: 'rgba(299,0,30,.4)',
    position: 'absolute',
    height: '100%',
    left: 0,
    top: 0,
    width: '100%',
    flex: 1,
  },
}
