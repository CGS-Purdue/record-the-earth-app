import * as Font from 'expo-font';


const asyncLoad = Font.loadAsync;

const spacemono = { name:'spacemono', file: '../assets/fonts/SpaceMono-Regular.ttf'};
const cutivemono = { name:'cutivemono', file: '../assets/fonts/CutiveMono-Regular.ttf'};

function getFont(_font) {
  return [
    _font.name,
    require(_font._file)
  ];
}

function getThemeFonts(_font_array) {
  let theme_fonts = [];
  let theme_font;
  for (font of _font_array) {
    theme_fonts.push(getFont(font));
  }

  return theme_fonts;
}

const TITLE_FONT = {spacemono};
const BODY_FONT = {cutivemon};


export {
  getThemeFonts,
  getFont,
  asyncLoad,
  TITLE_FONT,
  BODY_FONT
}
