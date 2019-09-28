import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Image } from 'react-native';


import { Theme } from '../../Theme';
const _fonts = Theme.Fonts;
const _icons = Theme.Icons;
const _assets = Theme.Assets;

async function loadResourcesAsync() {

  const _image_assets = Object.assign(
      _assets.buttons,
      _assets.logos,
      _assets.images
    );
  var cacheImages = Array.from(Object.entries(_image_assets).map(function(pair){
    var obj = {};
    obj[pair[0]] = pair[1];
    return obj;
  }));

  const cacheFonts = _fonts.loadFontMap(_fonts.FontMap);
  const cachedIcons = _icons.load(_icons.Icons);


  // const cacheImages = Object.entries(_image_assets).map(
  //   function (pair) {
  //     let obj = {};
  //     let key = pair[0];
  //     let mod = pair[1];
  //     let asset = Asset.fromModule(mod).downloadAsync(key);
  //     obj[key] = {
  //       module: mod,
  //       name: key,
  //       asset: asset,
  //     };
  //     return obj;
  //   }

  await Promise.all([
    cachedIcons,
    cacheFonts,
    Asset.loadAsync([...cacheImages]),
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

// async function _loadAssetsAsync() {
//   const imageAssets = cacheImages([
//     'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
//     require('./assets/images/circle.jpg'),
//   ]);
//   const fontAssets = cacheFonts([FontAwesome.font]);
//   await Promise.all([...imageAssets, ...fontAssets]);
// }
