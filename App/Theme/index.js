import { ThemeAssets } from './Assets';
import { ThemeFonts } from './Fonts';
import { Ionicons, ThemeIcons } from './Icons';
import { Layout } from './Layout';
import { ThemeColors } from './Colors';
import { ThemeVariables, ThemeDefaultVariables } from './Variables';
import { ThemeStylesheets, ThemeStyles } from './Stylesheet';

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
