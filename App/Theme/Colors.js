import ColorLib from './ColorLib'

const ColorTheme = {
  // MAIN THEME
  PRIMARY : ColorLib.green,
  SECONDARY : ColorLib.dodgerblue,
  HIGHLIGHT : ColorLib.cyanaqua,
  // red
  RED_100 : ColorLib.brightred,     // #a60000
  RED_200 : ColorLib.wellread,      // #b72e3e
  RED_300 : ColorLib.wellread,      // #bf3030
  RED_400 : ColorLib.radicalred,    // #fa3e54
  RED_500 : ColorLib.red,           // #ff0000
  RED_600 : ColorLib.coraled,       // #ff4040
  // green
  GRN_100 : ColorLib.green,         // #00cc00
  GRN_200 : ColorLib.japaneseaurel, // #008500
  GRN_300 : ColorLib.japaneseaurel, // #1d8c00
  GRN_400 : ColorLib.forestreen,    // #269926
  GRN_500 : ColorLib.forestreen,    // #41a128
  GRN_600 : ColorLib.pastelreen,    // #64df85
  // blue
  BLU_100 : ColorLib.catalinalue,   // #04346c
  BLU_200 : ColorLib.denim,         // #0e7dd8
  BLU_300 : ColorLib.torylue,       // #0e53a7
  BLU_400 : ColorLib.bayfany,       // #274e7d
  BLU_500 : ColorLib.havelocklue,   // #4284d3
  BLU_600 : ColorLib.danube,        // #6899d3
  // yellow
  YEL_100 : ColorLib.chelseaem,     // #a66f00
  YEL_200 : ColorLib.pirateold,     // #a67300
  YEL_300 : ColorLib.marigold,      // #bf8f30
  YEL_400 : ColorLib.orangeeel,     // #ffa200
  YEL_500 : ColorLib.webrange,      // #ffaa00
  YEL_600 : ColorLib.selectiyellow, // #ffb100
  // grey
  GRA_100 : ColorLib.mercury,       // #e6e6e6
  GRA_200 : ColorLib.silver,        // #cccccc
  GRA_300 : ColorLib.nobel,         // #b3b3b3
  GRA_400 : ColorLib.gray,          // #808080
  GRA_500 : ColorLib.dustyray,      // #999999
  GRA_600 : ColorLib.ovegray,       // #666666
  // NOTICES AND WARNINGS
  MESSAGE_PRIMARY   : ColorLib.green,
  MESSAGE_SECONDARY : ColorLib.danube,
  MESSAGE_SUCCESS   : ColorLib.forestreen,
  MESSAGE_DANGER    : ColorLib.coraled,
  MESSAGE_WARNING   : ColorLib.selectiyellow,
  MESSAGE_INFO      : ColorLib.torylue,
};


const Colors = {
  tintColor: ColorTheme.PRIMARY,
  BACKGROUND_COLOR: ColorTheme.BG,
  LIVE_COLOR: ColorTheme.RED_600,
  tabIconSelected: ColorTheme.PRIMARY,
  tabIconDefault: ColorTheme.GRA_200,
  tabBar: '#fefefe',
  errorBackground: ColorTheme.RED_500,
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: ColorTheme.PRIMARY,
  noticeText: '#fff',
};
