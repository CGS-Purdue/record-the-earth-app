import { ThemeFonts } from './Fonts';
import { Layout } from './Layout';
import { Ionicons, ThemeIcons } from './Icons';
import { Styles, DebugStyles } from './Stylesheet';
import { ThemeColors } from './Colors';
import { ThemeVariables, ThemeDefaultVariables } from './Variables';

const Theme = {
  Fonts: ThemeFonts,
  Layout: Layout,
  Icons: ThemeIcons,
  ThemeColors: ThemeColors,
  Variables: ThemeVariables,
};

export {
  Ionicons,
  ThemeIcons,
  ThemeFonts,
  ThemeColors,
  ThemeVariables,
  ThemeDefaultVariables,
  Styles,
  Layout,
  DebugStyles
};

export default Theme;
