import { StyleSheet } from 'react-native';
import { ColorLib } from './ColorLib';
import { ThemeColors } from './Colors';
import { Layout } from './Layout';
import { ViewStyles } from './Styles/ViewStyles';
import { FormStyles } from './Styles/FormStyles';
import { ButtonStyles } from './Styles/ButtonStyles';


var key, color_key, color;
var colorRange10 = [];
var ColorSet= Object.values(ColorLib);
var colors_length = ColorSet.length;

for (var i=0; i<11; i++) {
  key = Math.random();
  color_key = Math.floor(key * colors_length);
  color = ColorSet[color_key];
  colorRange10[i] = color;
}

const StyleSheetLayout = Layout;

const MainStyles = {
  user: {flex: 1},
  image: {flex: 1},
  name: {flex: 1},

  container: {
    flex: 1,
    backgroundColor: ThemeColors.WHITE
  },

  rootContainer:{
    width: StyleSheetLayout.PERCENT_100,
    height: StyleSheetLayout.PERCENT_100,
    display: 'flex',
    position: 'relative',
    padding: 0,
    margin: 0,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%'
  },

  padView: {
    backgroundColor: ThemeColors.TRANSPARENT,
    flexBasis: StyleSheetLayout.PERCENT_100,
    width: StyleSheetLayout.PERCENT_100,
    height: StyleSheetLayout.PERCENT_100,
    position: 'absolute',
    display: 'flex',
    flexShrink: 0,
    flexGrow: 1,
    bottom: 0,
    margin: 0,
    right: 0,
    left: 0,
    top: 0
  }
}

const DebugStyles = StyleSheet.create({
  highlight: {
    borderColor: '#FF0000',
    borderWidth: 1,
    borderStyle: 'solid'
  },

  outlineAll: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorRange10[(Math.floor(Math.random() * 10))],
  }

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
    borderStyle: 'solid'
  },
});

let combined = Object.assign(ViewStyles, MainStyles, FormStyles, ButtonStyles);

const Styles = StyleSheet.create(combined);


export default Styles;

export {
  ButtonStyles,
  MainStyles,
  FormStyles,
  UtilityStyles,
  DebugStyles,
  Styles,
};
