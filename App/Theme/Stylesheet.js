import { ButtonStyles } from './Styles/ButtonStyles';
import { DebugStyles } from './Styles/DebugStyles';
import { FormStyles } from './Styles/FormStyles';
import { HomeStyles } from './Styles/HomeStyles';
import { LayoutStyles } from './Styles/LayoutStyles';
import { MainStyles } from './Styles/MainStyles';
import { RecordStyles } from './Styles/RecordStyles';
import { FontClasses, TextClasses } from './Styles/TypographyStyles';
import { UtilityStyles } from './Styles/UtilityStyles';
import { ViewStyles } from './Styles/ViewStyles';
import { SurveyStyles } from './Styles/SurveyStyles';
import { AudioPlayerStyles } from './Styles/AudioPlayerStyles';
import { TabBarStyles } from './Styles/TabBarStyles';
import { CheckBtnStyles } from './Styles/CheckButtonStyles';
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
  TabBarStyles,
  TextClasses,
  SurveyStyles,
  FontClasses,
  AudioPlayerStyles,
  ButtonStyles,
  CheckBtnStyles,
  RecordStyles,
  FormStyles,
  MainStyles,
  ViewStyles,
  HomeStyles,
  DebugStyles,
  UtilityStyles,
  LayoutStyles
);

export { ThemeStylesheets, ThemeStyles };
