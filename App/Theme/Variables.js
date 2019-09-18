import { ThemeColors } from './Colors';
import { ThemeFonts } from './Fonts';
import { Layout } from './Fonts';

const DISABLED_OPACITY = 0.5;
const RATE_SCALE = 3.0;

const ThemeVariables = {
  BASE: 'dark',
  FONTCODE: ThemeFonts.MONO_FONT,
  FONTBASE: ThemeFonts.SANS_FONT,
  BRANDTITLE: 'Record the Earth',
  BRANDURL: 'https://www.recordtheearth.org',
  INPUTBORDERRADIUS: 4,
  APPBORDERRADIUS: 4,
  RATE_SCALE: 3.0,
  DISABLED_OPACITY: 0.5,
};

const ThemeDefaultVariables = {
  ButtonSize: 20,
  ButtonColor: '#eeeeee',
  ButtonIconStyle: '{marginRight: 10}',
  ButtonBorderRadius: 5,
  ButtonBackgroundColor: '#007AFF',
};

export { ThemeVariables, ThemeDefaultVariables };
