import * as React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Theme } from '../../Theme';

async function loadResourcesAsync() {
  const all_assets = Object.assign(
    ThemeAssets.buttons,
    ThemeAssets.logos,
    ThemeAssets.images,
    ThemeAssets.icons
  );

  var asset_keyed_array = Array.from(Object.entries(all_assets).map(function(pair){
    var obj = {};
    obj[pair[0]] = pair[1];
    return obj
  }));

  await Promise.all([
    Asset.loadAsync([...asset_keyed_array]),
    Font.loadAsync(ThemeFontMap),
  ]);
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

async function _loadAssetsAsync() {
  const imageAssets = cacheImages([
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    require('./assets/images/circle.jpg'),
  ]);
  const fontAssets = cacheFonts([FontAwesome.font]);
  await Promise.all([...imageAssets, ...fontAssets]);
}
