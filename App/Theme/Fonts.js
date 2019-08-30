import { FontAssets } from './Assets';

// =============================================================================
// Fonts
// =============================================================================
// Cross-browser support for @font-face. Supports IE,playfair' Gecko, Webkit, Opera.
// * _name is required, arbitrary, and what you will use in font stacks.
// * _font-files is required using font-files('relative/location', 'format').
//   for best results use this order: woff, opentype/truetype, svg
// * _eot is required by IE, and is a relative location of the eot file.
// * _weight shows if the font is bold, defaults to normal
// * _style defaults to normal, might be also italic
// * For android 2.2 Compatiblity, please ensure that your web page has
//   a meta viewport tag.
// * To support iOS < 4.2, an SVG file must be provided
// If you need to generate other formats check out the Font Squirrel
// [font generator](http://www.fontsquirrel.com/fontface/generator)
// In order to refer to a specific style of the font in your Stylesheets as
// e.g. "font-style: italic;",  you may add a couple of @font-face includes
// containing the respective font files for each style and specying
// respective the _style parameter.
// Order of the includes matters, and it is: normal, bold, italic, bold+italic.

function getFont(name) {
  const font_map = {
       'ionicons': { family_name: 'ionicons',    file_name: 'SpaceMono-Regular.ttf',  src: FontAssets.ionicicons },
    'cutive-mono': { family_name: 'cutive-mono', file_name: 'CutiveMono-Regular.ttf', src: FontAssets.cutivemono_regular },
     'space-mono': { family_name: 'space-mono',  file_name: 'SpaceMono-Regular.ttf',  src: FontAssets.spacemono_regular },
  };

  let font = font_map[name];
  return font;
}

function getThemeFonts(fonts) {
  let map = {};
  for (let item of fonts) {
    let font = getFont(item);
    map[item] = font;
  }
  return map;
}


// const OpenSans = {
//   { opensans_lightwebfont_ttf  }
//   { opensans_regularwebfont_woff  }
//   { opensans_lightwebfont_svg  }
//   { opensans_regularwebfont_svg  }
//   { opensans_regularwebfont_eot  }0
//   { opensans_lightwebfont_eot  }
//   { opensans_lightwebfont_woff  }
//   { opensans_regularwebfont_ttf  }
// }

const FONT_WEIGHTS = {
  WEIGHT_100: { weight: 100, name: 'thin' },
  WEIGHT_200: { weight: 200, name: 'extralight' },
  WEIGHT_300: { weight: 300, name: 'light' },
  WEIGHT_400: { weight: 400, name: 'regular' },
  WEIGHT_500: { weight: 500, name: 'Medium' },
  WEIGHT_600: { weight: 600, name: 'semibold' },
  WEIGHT_700: { weight: 700, name: 'bold' },
  WEIGHT_800: { weight: 800, name: 'extrabold' },
  WEIGHT_900: { weight: 900, name: 'superbold '},
};

const getScaleFontSize = (scale, tag, units = "em") => {
  var size = scale[tag];
  if (!size) {
    size = scale.body;
  }
  return `${size}${units}`;
};


// // TYPOGRPHICSCALES
// // Sizes generated at http://www.modularscale.com
// // TYPOGRPHIC SCALES


const FONT_STYLES = {
  ITALIC: { name: 'italic' },
  NORMAL: { name: 'normal' },
};

var font_data = getThemeFonts(['space-mono', 'cutive-mono', 'ionicons']);

let theme_fonts = {};
theme_fonts.TITLE_FONT = 'space-mono';
theme_fonts.BODY_FONT = 'cutive-mono';
theme_fonts.ICON_FONT = 'ionicons';
theme_fonts.MONO_FONT = 'space-mono';


const Typography = {
  mono_font: 'space-mono',
};

const ThemeFonts = Object.assign(font_data, theme_fonts);

export { Typography, ThemeFonts, FONT_WEIGHTS, FONT_STYLES, getScaleFontSize };

export default ThemeFonts;
