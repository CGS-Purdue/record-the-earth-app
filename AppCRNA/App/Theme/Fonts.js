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
