import * as Font from 'expo-font';

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

  var Font = {
    src: '',
    name: '',
    file: '',
    isLoaded: '',
  };

  let _getFont = ((name) => {
     if (_map[name]) {
      return _map[name];
     }
     else {
     return _map;
     }
   });

  return _getFont(name);
}


var getFont = (map, name) => {
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
    var font = getFont(item);
    var fontname = font.name;
    var obj = {};
    obj[fontname] = font.src;
    map.push(obj);
  }
  return map;
}

const loadFont = (FontSet) => {

  console.log('[loadFont]', FontSet);
  let font = Object.create(null);
  let key = FontSet[0];
  let name = FontSet[1].name;
  let module = FontSet[1].src;
  font.key = key;
  font.name = name;
  try {
    let src = Font.loadAsync({ [name] : module });
    console.log('loading font', name, src)
    let isLoaded = Promise.resolve(src);
    font.src = src;
    font.isLoaded = isLoaded;
  } catch (e) {
    console.log('problem loading font', e);
  }
  return font;
};

const loadFontMap = (fontMap) => {
  console.log('fontMap', fontMap);

  let fonts = Object.entries(fontMap).map((font_set) => {

    return loadFont(font_set);
  });
  return fonts;
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

var ThemeFontMap = _getThemeFonts([
  'ionicons',
  'spacemono',
  'opensans-regular',
  'opensans-light',
]);

//
// Promise.all([
//   cachedIcons,
//   cacheFonts,
//   Asset.loadAsync([...cacheImages]),,
// ])

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}


var ThemeFonts = {
  FontMap: FontMap(),
  FontType: FONT_TYPEFACE,
  FontAssets: FontAssets,
  FontWeights: FONT_WEIGHTS,
  FontVariables: FontVariables,
  FontConfig: {
    ICON_FONT: FontMap('ionicons'),
  },
  loadFontMap: loadFontMap,
  getFont: getFont,
  loadFont: loadFont,
};


export {
  ThemeFonts,
  FontVariables
}
