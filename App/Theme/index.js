import { ThemeAssets } from './Assets';
import { ThemeColors } from './Colors';
import { ThemeFonts } from './Fonts';
import { ThemeIcons } from './Icons';
import { ThemeLayout, Layout } from './Layout';
import { ThemeStyles, ThemeStylesheets } from './Stylesheet';
import { ThemeDefaultVariables, ThemeVariables } from './Variables';

const Theme = Object.create(null);
Theme.Assets = ThemeAssets;
Theme.Fonts = ThemeFonts;
Theme.Icons = ThemeIcons;
Theme.Layout = Layout;
Theme.ThemeLayout = ThemeLayout;
Theme.Colors = ThemeColors;
Theme.Variables = ThemeVariables;
Theme.Stylesheets = ThemeStylesheets;
Theme.Styles = ThemeStyles;

export {
  ThemeStyles,
  ThemeStylesheets,
  ThemeAssets,
  ThemeIcons,
  ThemeColors,
  ThemeVariables,
  ThemeDefaultVariables,
  ThemeLayout,
  Layout,
  Theme,
};
