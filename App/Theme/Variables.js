import { ThemeColors } from './Colors';
import { ThemeFonts } from './Fonts';
import { ThemeLayout } from './Layout';
import { ImageAssets } from './Assets';

// AGGREGATE THEME VALUES
// AND SETUP CONVENIENT NAMES
const _var = {
  app_container_bgimg: ImageAssets.img_background,
  app_container_bgcolor: ThemeColors.GRAY_800,
  tabbar_size: ThemeLayout.TEXT_SIZE_3 * 3,
  tabbar_text_size: (ThemeLayout.TEXT_SIZE_3 * 3 * 1) / 3,
  tabbar_icon_size: (ThemeLayout.TEXT_SIZE_3 * 3 * 2) / 4,
  button_size: 20,
  button_color: '#eeeeee',
  button_icon_style: '{marginRight: 10}',
  button_border_radius: 5,
  button_bgcolor: '#007AFF',
};

const ThemeVariables = {
  BASE: 'dark',
  TRANSPARENT: ThemeColors.TRANSPARENT,
  FONTCODE: ThemeFonts.MONO_FONT,
  FONTBASE: ThemeFonts.SANS_FONT,
  BRANDTITLE: 'Record the Earth',
  BRANDURL: 'https://www.recordtheearth.org',
  INPUTBORDERRADIUS: 4,
  APPBORDERRADIUS: 4,
  APP_CONTAINER_BGIMG: _var.app_container_bgimg,
  APP_CONTAINER_BGCOLOR: _var.app_container_bgcolor,
  RATE_SCALE: 3.0,
  DISABLED_OPACITY: 0.5,
  TAB_BAR_SIZE: _var.tabbar_size,
  TAB_BAR_TEXT_SIZE: _var.tabbar_text_size,
  TAB_BAR_ICON_SIZE: _var.tabbar_icon_size,
  BUTTON_SIZE: _var.button_size,
  BUTTON_COLOR: _var.button_color,
  BUTTON_ICON_STYLE: _var.button_icon_style,
  BUTTON_BORDER_RADIUS: _var.button_border_radius,
  BUTTON_BGCOLOR: _var.button_bgcolor,
  LIBRARY_PLAY_BTN_SIZE: ThemeLayout.LIBRARY_PLAY_BTN_SIZE,
};

export { ThemeVariables };
