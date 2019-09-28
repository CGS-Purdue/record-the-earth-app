import { ThemeAssets } from './Assets';
import { ThemeColors } from './Colors';
import { ThemeFonts } from './Fonts';
import { ThemeIcons } from './Icons';
import { ThemeLayout } from './Layout';
import { ThemeStyles } from './Stylesheet';
import { ThemeVariables } from './Variables';

const Theme = Object.create(null);
Theme.Assets = ThemeAssets;
Theme.Fonts = ThemeFonts;
Theme.Icons = ThemeIcons;
Theme.Layout = ThemeLayout;
Theme.Colors = ThemeColors;
Theme.Variables = ThemeVariables;
Theme.Styles = ThemeStyles;

export {
  ThemeStyles,
  ThemeAssets,
  ThemeIcons,
  ThemeColors,
  ThemeVariables,
  ThemeLayout,
  Theme,
};
