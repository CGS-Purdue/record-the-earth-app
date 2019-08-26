import { FONT_ASSETS } from './Assets';

function getFont(name) {
  const font_map = {
    'ionicons': { cssname: 'ionicons', filename: 'SpaceMono-Regular.ttf', src: FONT_ASSETS['ionicons']},
    'cutive-mono': { cssname: 'cutive-mono', filename: 'CutiveMono-Regular.ttf', src: FONT_ASSETS['cutive-mono'] },
    'space-mono': {  cssname: 'space-mono',  filename: 'SpaceMono-Regular.ttf', src: FONT_ASSETS['space-mono']},
  };

  let font = font_map[name]
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
//   { opensans_regularwebfont_eot  }
//   { opensans_lightwebfont_eot  }
//   { opensans_lightwebfont_woff  }
//   { opensans_regularwebfont_ttf  }
// }


const ThemeFonts = getThemeFonts([
  'space-mono',
  'cutive-mono',
  'ionicons',
]);

ThemeFonts.TITLE_FONT = 'space-mono',
ThemeFonts.BODY_FONT = 'cutive-mono';
ThemeFonts.ICON_FONT = 'ionicons';
ThemeFonts.MONO_FONT = 'space-mono';

export { ThemeFonts }

export default ThemeFonts
