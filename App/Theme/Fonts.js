import * as Font from 'expo-font';

import { FontAssets } from './Assets';

// =============================================================================
// Fonts -
// =============================================================================
// @font-face Cross-browser support for IE, playfair' Gecko, Webkit, Opera.
// _name   - is required, arbitrary, and what you will use in font stacks.
// _font-files  - is required using font-files('relative/location', 'format').
//   for best results use this order: [woff, opentype/truetype, svg]
//   _eot    - is required by IE, and is a relative location of the eot file.
//   _weight - shows if the font is bold, defaults to [normal]
//   _style  - defaults to [normal], might be also [italic]
// * For android 2.2 Compatiblity, please ensure that your web page has a meta viewport tag.
// * To support iOS < 4.2, an SVG file must be provided
// If you need to generate other formats check out the Font Squirrel
// In order to refer to a specific style of the font in your Stylesheets as
// font-style: italic
// you may add a couple of @font-face includes containing the respective font files
// for each style respective the _style parameter.
// Order of the includes matters, and it is: [normal, bold, italic, bold+italic]

function _getFont(name) {
  const _font_assets = FontAssets;
  const font_map = {
    cutivemono_regular: {
      src: _font_assets.cutivemono_regular,
      name: 'cutive-mono-regular',
      file: 'CutiveMono-Regular.ttf',
    },
    ionicicons: {
      src: _font_assets.ionicicons,
      name: 'ionicicons',
      file: 'ionicicons.ttf',
    },
    opensans_light_webfont: {
      src: _font_assets.opensans_light_webfont,
      name: 'opensans-light-webfont',
      file: 'OpenSans-Light-webfont.ttf',
    },
    opensans_regular_webfont: {
      src: _font_assets.opensans_regular_webfont,
      name: 'opensans-regular-webfont',
      file: 'OpenSans-Regular-webfont.ttf',
    },
    spacemono_regular: {
      src: _font_assets.spacemono_regular,
      name: 'spacemono-regular',
      file: 'SpaceMono-Regular.ttf',
    },
  };

  if (!name) {
    return font_map;
  } else {
    let font = font_map[name];
    return font;
  }
}

function _getThemeFonts(fonts) {
  let map = [];
  for (let item of fonts) {
    let font = _getFont(item);
    let fontname = font.name;
    let obj = {};
    obj[fontname] = font.src;
    map.push(obj);
  }
  return map;
}

const loadFont = (font_set) => {
  return {
    name: Object.keys(font_set)[0],
    asset: Promise.resolve(Font.loadAsync(font_set)),
  };
};

const loadFontMap = (fontMap) => {
  let fonts = fontMap.map((font_set) => {
    return loadFont(font_set);
  });
  return fonts;
};

const FontDictionary = {
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

const FONT_STYLES = {
  ITALIC: { name: 'italic' },
  NORMAL: { name: 'normal' },
};

const FONT_TYPEFACE = {
  TITLE_FONT: 'spacemono-regular',
  HEADING_FONT: 'spacemono-regular',
  BODY_FONT: 'cutive-mono-regular',
  SANS_FONT: 'opensans-regular-webfont',
  SANS_LIGHT_FONT: 'opensans-light-webfont',
  ICON_FONT: 'ionicons',
  MONO_FONT: 'spacemono-regular',
};

const FONT_WEIGHTS = getFontWeights(FontDictionary);
const FontVariables = {
  weights: FONT_WEIGHTS,
  styles: FONT_STYLES,
  type: FONT_TYPEFACE,
};

const ThemeFontMap = _getThemeFonts([
  'cutivemono_regular',
  'ionicicons',
  'opensans_light_webfont',
  'opensans_regular_webfont',
  'spacemono_regular',
]);

const ThemeFonts = {
  FontMap: ThemeFontMap,
  FontType: FONT_TYPEFACE,
  FontWeights: FONT_WEIGHTS,
  loadFontMap: loadFontMap,
  loadFont: loadFont,
  Variables: FontVariables,
};

export { ThemeFonts, FontVariables };
