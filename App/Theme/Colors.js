import { ColorLib } from './ColorLib'

/// =====================
/// ## THEME COLOR SCALES
/// =====================
/// | SCALE | RED     | GREEN   | BLUE    | YELLOW  | GRAY    |
/// | ----- | -----   | -----   | -----   | -----   | -----   |
/// |  100  | #a60000 | #00cc00 | #04346c | #a66f00 | #e6e6e6 |
/// |  200  | #b72e3e | #008500 | #0e7dd8 | #a67300 | #cccccc |
/// |  300  | #bf3030 | #1d8c00 | #0e53a7 | #bf8f30 | #b3b3b3 |
/// |  400  | #fa3e54 | #269926 | #274e7d | #ffa200 | #808080 |
/// |  500  | #ff0000 | #41a128 | #4284d3 | #ffaa00 | #999999 |
/// |  600  | #ff4040 | #64df85 | #6899d3 | #ffb100 | #666666 |

// red ------------------------------------
const Reds = {
  RED_100: ColorLib.brightred,
  RED_200: ColorLib.wellread,
  RED_300: ColorLib.wellread,
  RED_400: ColorLib.radicalred,
  RED_500: ColorLib.red,
  RED_600: ColorLib.coraled
};

// green ----------------------------------
const Greens = {
  GRN_100: ColorLib.green,
  GRN_200: ColorLib.japaneseaurel,
  GRN_300: ColorLib.japaneseaurel,
  GRN_400: ColorLib.forestreen,
  GRN_500: ColorLib.forestreen,
  GRN_600: ColorLib.pastelreen
};

// blue -----------------------------------
const Blues = {
  BLU_100: ColorLib.catalinalue,
  BLU_200: ColorLib.denim,
  BLU_300: ColorLib.torylue,
  BLU_400: ColorLib.bayfany,
  BLU_500: ColorLib.havelocklue,
  BLU_600: ColorLib.danube
};

// yellow ---------------------------------
const Yellows = {
  YEL_100: ColorLib.chelseaem,
  YEL_200: ColorLib.pirateold,
  YEL_300: ColorLib.marigold,
  YEL_400: ColorLib.orangeeel,
  YEL_500: ColorLib.webrange,
  YEL_600: ColorLib.selectiyellow
};

// grey -----------------------------------
const Grays = {
  GRA_100: ColorLib.mercury,
  GRA_200: ColorLib.silver,
  GRA_300: ColorLib.nobel,
  GRA_400: ColorLib.gray,
  GRA_500: ColorLib.dustyray,
  GRA_600: ColorLib.ovegray
};

// TRANSPARENT DARKER ---------------------
const ShadeDark = {
  SHADE_DARKER_01: 'rgba(0,0,0,0.01)',
  SHADE_DARKER_02: 'rgba(0,0,0,0.02)',
  SHADE_DARKER_03: 'rgba(0,0,0,0.03)',
  SHADE_DARKER_04: 'rgba(0,0,0,0.04)',
  SHADE_DARKER_05: 'rgba(0,0,0,0.05)',
  SHADE_DARKER_06: 'rgba(0,0,0,0.06)',
  SHADE_DARKER_07: 'rgba(0,0,0,0.07)',
  SHADE_DARKER_08: 'rgba(0,0,0,0.08)',
  SHADE_DARKER_09: 'rgba(0,0,0,0.09)',
  SHADE_DARKER_10: 'rgba(0,0,0,0.10)',
  SHADE_DARKER_20: 'rgba(0,0,0,0.20)',
  SHADE_DARKER_30: 'rgba(0,0,0,0.30)',
  SHADE_DARKER_40: 'rgba(0,0,0,0.40)',
  SHADE_DARKER_50: 'rgba(0,0,0,0.50)',
};

// TRANSPARENT LIGHTER ---------------------
const ShadeLight = {
  SHADE_LIGHTER_01: 'rgba(255,255,255,0.01)',
  SHADE_LIGHTER_02: 'rgba(255,255,255,0.02)',
  SHADE_LIGHTER_03: 'rgba(255,255,255,0.03)',
  SHADE_LIGHTER_04: 'rgba(255,255,255,0.04)',
  SHADE_LIGHTER_05: 'rgba(255,255,255,0.05)',
  SHADE_LIGHTER_06: 'rgba(255,255,255,0.06)',
  SHADE_LIGHTER_07: 'rgba(255,255,255,0.07)',
  SHADE_LIGHTER_08: 'rgba(255,255,255,0.08)',
  SHADE_LIGHTER_09: 'rgba(255,255,255,0.09)',
  SHADE_LIGHTER_10: 'rgba(255,255,255,0.10)',
  SHADE_LIGHTER_20: 'rgba(255,255,255,0.20)',
  SHADE_LIGHTER_30: 'rgba(255,255,255,0.30)',
  SHADE_LIGHTER_40: 'rgba(255,255,255,0.40)',
  SHADE_LIGHTER_50: 'rgba(255,255,255,0.50)',
};

const ColorScheme = Object.assign(Reds, Greens, Blues, Yellows, Grays, ShadeDark, ShadeLight);


// NOTICES AND WARNINGS -------------------
const Messages = {
  MESSAGE_PRIMARY: ColorLib.green,
  MESSAGE_SECONDARY: ColorLib.danube,
  MESSAGE_SUCCESS: ColorLib.forestreen,
  MESSAGE_DANGER: ColorLib.coraled,
  MESSAGE_WARNING: ColorLib.selectiyellow,
  MESSAGE_INFO: ColorLib.torylue,
};


// const Grays = {
// ----------------------------------------

const Colors = {
  TRANSPARENT       : 'rgba(0,0,0,0)',
  WHITE             : ColorLib.white,
  BLACK             : ColorLib.black,
  PRIMARY           : ColorLib.green,
  SECONDARY         : ColorLib.dodgerblue,
  HIGHLIGHT         : ColorLib.cyanaqua,
  ERROR_TEXT         : ColorLib.white,
  ERROR_BACKGROUND   : Messages.MESSAGE_DANGER,
  WARNING_TEXT       : ColorLib.white,
  WARNING_BACKGROUND : Messages.MESSAGE_WARNING,
  NOTICE_TEXT        : ColorLib.white,
  NOTICE_BACKGROUND  : Messages.MESSAGE_SECONDARY,

  APP_BG             : '#507988',
  APP_CONTENTBG      : '#2d5e929e',
  APP_BORDERCOLOR    : 'rgba(50,50,50,.3)',
  BACKGROUND_COLOR  : '#FFF8ED',
  TEXT_COLOR        :  '#333333',
  COLOR_PRIMARY      : '#227b4c',
  COLOR_SECONDARY    : '#080808',
  TEXT_INVERSE_COLOR : 'rgba(255,255,255,0.9)',

  // Toolbar
  BAR_BG             : '#000000',
  BAR_TEXT_COLOR      : '#ffffff',
  BAR_SELECTEDCOLOR  : '#44797D',
  TAB_CON_SELECTED  :  ColorLib.green,
  TAB_CON_DEFAULT   :  ColorLib.silver,
  TAB_BG           :  ColorLib.torylue,
  TAB_BAR          :  '#fefefe',
  TAB_COLOR        :  ColorLib.white,

  // Form colors
  INPUT_BG           : '#ffffff',
  INPUT_BORDER       : '#aaaaaa',
  INPUT_TEXTCOLOR    : '#000000',

  // BRAND COLORS
  BG_MAIN          :  ColorLib.bayfany,
  TINT_COLOR       :  ColorLib.torylue,
  LIVE_COLOR       :  ColorLib.coraled,
  COLOR_MAIN       :  ColorLib.bayfany,
};

const ThemeColors = Object.assign(Colors, ColorScheme);

export { ThemeColors }
