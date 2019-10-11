import * as ExpoFont from 'expo-font';

import FONTS_IONICONS from '../Assets/fonts/ionicons.ttf';
import FONTS_OPENSANS_LIGHT from '../Assets/fonts/OpenSans-Light-webfont.ttf';
import FONTS_OPENSANS_REGULAR from '../Assets/fonts/OpenSans-Regular-webfont.ttf';
import FONTS_SPACEMONO from '../Assets/fonts/SpaceMono-Regular.ttf';

var FontAssets = {
  ionicons: FONTS_IONICONS,
  spacemono: FONTS_SPACEMONO,
  opensans_light: FONTS_OPENSANS_LIGHT,
  opensans_regular: FONTS_OPENSANS_REGULAR,
};

const FontMap = (key, autoload=false) => {
  let _map = {
    ionicons: {
      module: FontAssets.ionicons,
      name: 'ionicons',
    },
    opensanslight: {
      module: FontAssets.opensans_light,
      name: 'opensans-light',
    },
    opensansregular: {
      module: FontAssets.opensans_regular,
      name: 'opensans-regular',
    },
    spacemono: {
      module: FontAssets.spacemono,
      name: 'spacemono',
    },
  };

  let get = (_key) => {
    if (_map[_key]) {
      return _map[_key];
    } else {
      return _map;
    }
  };

  let load = async (_font) => {
    const { module, name } = _font;
    if (!module) { return false }

    let Font = await ExpoFont.loadAsync({ [name]: module });
    return Font;
  }

  if (autoload){

    try {
      var _font = get(key);
      const { module, name } = _font;
      return ExpoFont.loadAsync({ [name]: module });
      // return load(_font);
    } catch (e) {
      console.log(e);
      if (_font) {
        return _font;
      } else {
        return e;
      }
    }
  } else {
    return get(key);
  }
};

var FontTypes = {
  TITLE_FONT: 'opensans-regular',
  HEADING_FONT: 'opensans-regular',
  BODY_FONT: 'opensans-regular',
  SANS_FONT: 'opensans-regular',
  LIGHT_FONT: 'opensans-light',
  SANS_LIGHT_FONT: 'opensans-light',
  MONO_FONT: 'spacemono',
  ICON_FONT: 'ionicons',
};

var _getFont = (key) => {
  if (FontMap(key)) {
    return FontMap(key);
  } else {
    return false;
  }
};

// var _getFontKey = (name) => {
//   if (FontTypes[name]) {
//    return  (FontTypes[name]);
//   } else {
//     return false;
//   }
// };

const _loadFont = (_font) => {
  let name = _font.name;
  let module = _font.module;
  let src = ExpoFont.loadAsync({ [name]: module });
  _font.src = Promise.resolve(src);
  _font.isLoaded = true;
  return _font;
};

const _loadFontMap = async (fontMap) => {
  // cacheFonts[name] = { src }
  // name = font.name;
  // mod = font.module;
  var font, name, mod, src;
  const cacheFonts = {};
  const fontArray = [];
  try {
    for (var fontKey of Object.keys(fontMap)) {
      font = fontMap[fontKey];
      mod = font.module;
      name = font.name ? font.name : fontKey;
      src = await ExpoFont.loadAsync(name , mod);
      // font.src = Promise.resolve(src);
      cacheFonts[name] = font;
      fontArray.push({[name]: src});
    };
    return Promise.all([cacheFonts, ...fontArray]);


  } catch (e) {
    console.log('ExpoFont.loadAsync error', e);
  }
  // let fontCache = Object.entries(fontMap).map((set) => {
  //   let font = {};
  //   font.key = set[0];
  //   font.name = set[1].name;
  //   font.module = set[1].module;
  //   font.src = ExpoFont.loadAsync({ [font.name]: module });
  //   return { [font.key]: font };
  // });
  // console.log('[_loadFontMap] fontCache', fontCache);
  // return fontCache;
};

function getFontWeights(fw_dict) {
  var result = [];
  var empty = Object.create(null);
  Object.values(fw_dict).forEach(function(item) {
    var fontobj = empty;
    fontobj[item.name] = item.weight;
    result.push(fontobj);
  });
  return Object.assign(empty, ...result);
}

var FontDictionary = {
  WEIGHT_100: { weight: 100, name: 'thin' },
  WEIGHT_200: { weight: 200, name: 'extralight' },
  WEIGHT_300: { weight: 300, name: 'light' },
  WEIGHT_400: { weight: 400, name: 'regular' },
  WEIGHT_500: { weight: 500, name: 'medium' },
  WEIGHT_600: { weight: 600, name: 'semibold' },
  WEIGHT_700: { weight: 700, name: 'bold' },
  WEIGHT_800: { weight: 800, name: 'extrabold' },
  WEIGHT_900: { weight: 900, name: 'superbold' },
};

var FONT_STYLES = {
  ITALIC: { name: 'italic' },
  NORMAL: { name: 'normal' },
};

var FONT_WEIGHTS = getFontWeights(FontDictionary);

var FontVariables = {
  weights: FONT_WEIGHTS,
  styles: FONT_STYLES,
  type: FontTypes,
};

var ThemeFonts = {
  ICON_FONT: _loadFont(FontMap('ionicons')),
  TITLE_FONT: _loadFont(FontMap('opensansregular')),
  HEADING_FONT: _loadFont(FontMap('opensansregular')),
  MONO_FONT: _loadFont(FontMap('spacemono')),
  LIGHT_FONT: _loadFont(FontMap('opensanslight')),

  FontMap: FontMap(),
  FontMap0: FontMap,
  // PreloadedFonts: [
  //   {'ionicons': FontMap('ionicons',true)},
  //   {'opensanslight': FontMap('opensanslight',true)},
  //   {'opensansregular': FontMap('opensansregular',true)},
  //   {'spacemono': FontMap('spacemono',true)},
  // ],
  PreloadedFonts: [
    FontMap('ionicons',true),
    FontMap('opensanslight',true),
    FontMap('opensansregular',true),
    FontMap('spacemono',true),
  ],
  FontType: FontTypes,
  FontAssets: FontAssets,
  FontWeights: FONT_WEIGHTS,
  FontVariables: FontVariables,
  FontConfig: {
    ICON_FONT: _loadFont(FontMap('ionicons')),
    TITLE_FONT: FontMap('opensansregular'),
    HEADING_FONT: FontMap('opensansregular'),
    MONO_FONT: _loadFont(FontMap('spacemono')),
    LIGHT_FONT: _loadFont(FontMap('opensanslight')),
  },
  FontCache: _loadFontMap(FontMap()),
  loadFontMap: _loadFontMap,
  // getFontKey: _getFontKey,
  getFont: _getFont,
  loadFont: _loadFont,
};

export { ThemeFonts, FontVariables };
