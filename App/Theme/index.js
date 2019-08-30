import { ThemeFonts } from './Fonts';
import { Layout } from './Layout';
import { Ionicons, ThemeIcons } from './Icons';
import { Styles, DebugStyles } from './Stylesheet';
import { ButtonAssets, LogoAssets, FontAssets, ImageAssets, IconAssets } from './Assets';
import { ThemeColors } from './Colors';
import { ThemeVariables, ThemeDefaultVariables } from './Variables';

const Theme = {
  Fonts: ThemeFonts,
  Layout: Layout,
  Icons: ThemeIcons,
  ThemeColors: ThemeColors,
  Styles: Styles,
  Variables: ThemeVariables,
};

export {
  ButtonAssets,
  LogoAssets,
  FontAssets,
  ImageAssets,
  IconAssets,
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
