import { TextClasses, FontClasses } from './Styles/TypographyStyles';
import { MainStyles } from './Styles/MainStyles';
import { DebugStyles } from './Styles/DebugStyles';
import { UtilityStyles } from './Styles/UtilityStyles';
import { ViewStyles } from './Styles/ViewStyles';
import { FormStyles } from './Styles/FormStyles';
import { ButtonStyles } from './Styles/ButtonStyles';
import { LayoutStyles } from './Styles/LayoutStyles';
import { RecordStyles } from './Styles/RecordStyles';
import { HomeStyles } from './Styles/HomeStyles';
// import { ThemeColors } from './Colors';
// import { StyleSheet } from 'react-native';



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
  Record: RecordStyles,
  Utility: UtilityStyles,
  Layout: LayoutStyles,
};

const ThemeStyles = Object.assign(
   TextClasses,
   FontClasses,
   ButtonStyles,
   RecordStyles,
   FormStyles,
   MainStyles,
   ViewStyles,
   HomeStyles,
   DebugStyles,
   UtilityStyles,
   LayoutStyles,
);

export { ThemeStylesheets, ThemeStyles };
