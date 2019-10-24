import { ButtonStyles } from './Styles/ButtonStyles';
import { FormStyles } from './Styles/FormStyles';
import { HomeStyles } from './Styles/HomeStyles';
import { LayoutStyles } from './Styles/LayoutStyles';
import { LibraryStyles } from './Styles/LibraryStyles';
import { LogoStyles } from './Styles/LogoStyles';
import { RecordStyles } from './Styles/RecordStyles';
import { InfoPageStyles } from './Styles/InfoPageStyles';
import { FontClasses, TextClasses } from './Styles/TypographyStyles';
import { UtilityStyles } from './Styles/UtilityStyles';
import { ViewStyles } from './Styles/ViewStyles';
import { SurveyStyles } from './Styles/SurveyStyles';
import { SoundscapeStyles } from './Styles/SoundscapeStyles';
import { AudioPlayerStyles } from './Styles/AudioPlayerStyles';
import { TabBarStyles } from './Styles/TabBarStyles';
import { CheckBtnStyles } from './Styles/CheckButtonStyles';
import { DebugStyles } from './Styles/DebugStyles';

const ThemeStyles = Object.assign(
  AudioPlayerStyles,
  ButtonStyles,
  CheckBtnStyles,
  __DEV__ && DebugStyles,
  FontClasses,
  FormStyles,
  HomeStyles,
  InfoPageStyles,
  LibraryStyles,
  LayoutStyles,
  LogoStyles,
  RecordStyles,
  SoundscapeStyles,
  SurveyStyles,
  TabBarStyles,
  TextClasses,
  UtilityStyles,
  ViewStyles
);

export { ThemeStyles };
