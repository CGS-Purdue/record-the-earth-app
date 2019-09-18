import Constants from 'expo-constants';
///  random color assignment
// var key, color_key, color;
// var ColorSet = Object.values(ColorLib);
// var colors_length = ColorSet.length;
// var colorRange10 = [];
// for (var i = 0; i < 11; i++) {
//   key = Math.random();
//   color_key = Math.floor(key * colors_length);
//   color = ColorSet[color_key];
//   colorRange10[i] = color;
// }


const DebugStyleSettings = Object.create(null);

const { debug_flags } = Constants.manifest.extra;
if (debug_flags.DEBUG_OUTLINE_STYLES) {
  DebugStyleSettings.DEBUG_OUTLINE_STYLES_ENABLED = true;
}

var DebugColorRange = [
  'deepskyblue','cyan','chartreuse','coral','brown','crimson','blueviolet','darkorange',
  'blue','aquamarine','dodgerblue','orangered','darkviolet','mediumblue','deeppink',
  'purple','magenta','lime','indianred','green','firebrick','slateblue','khaki',
  'rebeccapurple','hotpink','gold','greenyellow','turquoise','tomato','yellow'
];

var RANGE_LEN = DebugColorRange.length;

const DebugStyles = {
  highlight: {
    borderColor: '#FF0000',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  debug_outline: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: DebugColorRange[Math.floor(Math.random() * RANGE_LEN)],
  },

  debug_highlight: {
    backgroundColor: DebugColorRange[Math.floor(Math.random() * RANGE_LEN)],
  },
};

const addDebugStyles = (styles, debug) => {
  if (!styles) { return debug; } 
  return Object.assign(styles, debug);
}

export { DebugStyles, DebugStyleSettings, addDebugStyles};
