import { StyleSheet } from 'react-native';

import { ColorLib } from '../ColorLib';

var key, color_key, color;
var colorRange10 = [];
var ColorSet = Object.values(ColorLib);
var colors_length = ColorSet.length;

for (var i = 0; i < 11; i++) {
  key = Math.random();
  color_key = Math.floor(key * colors_length);
  color = ColorSet[color_key];
  colorRange10[i] = color;
}

const DebugStyles = StyleSheet.create({
  highlight: {
    borderColor: '#FF0000',
    borderWidth: 1,
    borderStyle: 'solid',
  },

  outlineAll: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorRange10[Math.floor(Math.random() * 10)],
  },
});


export { DebugStyles };
