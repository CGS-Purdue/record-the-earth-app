import { ThemeAssets } from './Assets';
import { ThemeColors } from './Colors';
import { ThemeFonts } from './Fonts';
import { Ionicons, ThemeIcons } from './Icons';
import { Layout } from './Layout';
import { ThemeStyles,ThemeStylesheets } from './Stylesheet';
import { ThemeDefaultVariables,ThemeVariables } from './Variables';

const Theme = Object.create(null);
Theme.Assets = ThemeAssets;
Theme.Fonts = ThemeFonts;
Theme.Icons = ThemeIcons;
Theme.Layout = Layout;
Theme.Colors = ThemeColors;
Theme.Variables = ThemeVariables;
Theme.Stylesheets = ThemeStylesheets;
Theme.Styles = ThemeStyles;

export {
  ThemeStyles,
  ThemeStylesheets,
  ThemeAssets,
  Ionicons,
  ThemeIcons,
  ThemeColors,
  ThemeVariables,
  ThemeDefaultVariables,
  Layout,
  Theme,
};
