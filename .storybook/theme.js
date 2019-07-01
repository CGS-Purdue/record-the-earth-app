import { create } from '@storybook/theming';

import theme_logo  from '../static/assets/img/logo/logo-rte.png';

export default create({
  base: 'dark',
  colorPrimary: '#227b4c',
  colorSecondary: '#080808',
  appBg: '#507988',
  appContentBg: '#2d5e929e',
  appBorderColor: 'rgba(50,50,50,.3)',
  appBorderRadius: 4,
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  textColor: '#ffffff',
  textInverseColor: 'rgba(255,255,255,0.9)',
  // Toolbar default and active colors
  barBg: '#000000',
  barTextColor: '#ffffff',
  barSelectedColor: '#44797D',
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#aaaaaa',
  inputTextColor: '#000000',
  inputBorderRadius: 4,
  // BRAND COLORS
  brandTitle: 'Record the Earth',
  brandUrl: 'https://www.recordtheearth.org',
  brandImage: theme_logo
});
