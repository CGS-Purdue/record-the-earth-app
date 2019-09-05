import { StyleSheet } from 'react-native';
import { ColorLib } from './ColorLib';
import { ThemeColors } from './Colors';
import { Layout } from './Layout';
import { TextClasses, FontClasses } from './Styles/TypographyStyles';
import { ViewStyles } from './Styles/ViewStyles';
import { FormStyles } from './Styles/FormStyles';
import { ButtonStyles } from './Styles/ButtonStyles';
import { LayoutStyles } from './Styles/LayoutStyles';
import { HomeStyles } from './Styles/HomeStyles';

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

const MainStyles = {
  user: { flex: 1 },
  image: { flex: 1 },
  name: { flex: 1 },
  padView: {
    backgroundColor: ThemeColors.TRANSPARENT,
    flexBasis: Layout.PERCENT_100,
    width: Layout.PERCENT_100,
    height: Layout.PERCENT_100,
    position: 'absolute',
    display: 'flex',
    flexShrink: 0,
    flexGrow: 1,
    bottom: 0,
    margin: 0,
    right: 0,
    left: 0,
    top: 0,
  },
};

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

const UtilityStyles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
  listItem: {
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
  selectedListItem: {
    color: 'green',
  },
  separator: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  border: {
    borderColor: '#FF0000',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});


const ThemeStylesheets = {
  TextStyle: TextClasses,
  Font: FontClasses,
  Button: ButtonStyles,
  Forms: FormStyles,
  Home: HomeStyles,
  Main: MainStyles,
  Views: ViewStyles,
  Theme: HomeStyles,
  Debug: DebugStyles,
  Utility: UtilityStyles,
  Layout: LayoutStyles,
};

const ThemeStyles = Object.assign(
   TextClasses,
   FontClasses,
   ButtonStyles,
   FormStyles,
   MainStyles,
   ViewStyles,
   HomeStyles,
   DebugStyles,
   UtilityStyles,
   LayoutStyles,
);

export { ThemeStylesheets, ThemeStyles };
