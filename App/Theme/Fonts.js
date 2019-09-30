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

const FontMap = (name) => {
  let _map = {
    ionicons: {
      src: FontAssets.ionicons,
      name: 'ionicons',
      file: 'ionicons.ttf',
      isLoaded: false,
    },
    opensanslight: {
      src: FontAssets.opensans_light,
      name: 'opensans-light',
      file: 'OpenSans-Light-webfont.ttf',
      isLoaded: false,
    },
    opensansregular: {
      src: FontAssets.opensans_regular,
      name: 'opensans-regular',
      file: 'OpenSans-Regular-webfont.ttf',
      isLoaded: false,
    },
    spacemono: {
      src: FontAssets.spacemono,
      name: 'spacemono',
      file: 'SpaceMono-Regular.ttf',
      isLoaded: false,
    },
  };

  // var Font = {
  //   src: '',
  //   name: '',
  //   file: '',
  //   isLoaded: '',
  // };

  let _getFont = ((name) => {
     if (_map[name]) {
      return _map[name];
     }
     else {
     return _map;
     }
   });

  return _getFont(name);
};


var _getFont = (map, name) => {
  if (map[name]) {
   return map[name];
  }
  else {
    return map;
  }
};


function _getThemeFonts(fonts) {
  var map = [];
  for (var item of fonts) {
    var font = _getFont(item);
    var fontname = font.name;
    var obj = {};
    obj[fontname] = font.src;
    map.push(obj);
  }
  return map;
}

const _loadFont = (pair) => {
  let font = {};
  let key = pair[0];
  let name = pair[1].name;
  let module = pair[1].src;
  let src = ExpoFont.loadAsync({ [name] : module });
  return Promise.resolve(src);
};

const _loadFontMap = (fontMap) => {
  let fontCache = [];
  let fonts = Object.entries(fontMap).map((font_set) => {
    fontLoading = _loadFont(font_set);
    fontCache.push(fontLoading);
    return { [font_set[0]] : font_set[1] };
  });
  return fontCache;
};

// ThemeFontMap.forEach( function(fon){ console.log(fon) } )

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

// polyfill


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

var FONT_TYPEFACE = {
  TITLE_FONT: 'spacemono',
  HEADING_FONT: 'spacemono',
  BODY_FONT: 'opensans-regular',
  SANS_FONT: 'opensans-regular',
  SANS_LIGHT_FONT: 'opensans-light',
  MONO_FONT: 'spacemono',
  ICON_FONT: 'ionicons',
};

var FONT_WEIGHTS = getFontWeights(FontDictionary);

var FontVariables = {
  weights: FONT_WEIGHTS,
  styles: FONT_STYLES,
  type: FONT_TYPEFACE,
};

function cacheFonts(fonts) {
  return Object.entries(fonts).map((font) => ExpoFont.loadAsync(font));
}

var ThemeFonts = {
  FontMap: FontMap(),
  FontType: FONT_TYPEFACE,
  FontAssets: FontAssets,
  FontWeights: FONT_WEIGHTS,
  FontVariables: FontVariables,
  FontConfig: { ICON_FONT: FontMap('ionicons') },
  FontCache: _loadFontMap(FontMap()),
  loadFontMap: _loadFontMap,
  getFont: _getFont,
  loadFont: _loadFont,
};


export {
  ThemeFonts,
  FontVariables,
};
