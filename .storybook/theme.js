import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#227b4c',
  colorSecondary: '#080808',
  // linear-gradient(0deg,#383838 21%,#5A5A5A 92%)
  // UI
  appBg: '#5A5A5A',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#ffffff',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#44797D',
  barBg: '#000000',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#aaaaaa',
  inputTextColor: '#000000',
  inputBorderRadius: 4,

  brandTitle: 'Record the Earth',
  brandUrl: 'https://www.recordtheearth.org',
  brandImage: '/assets/img/logo-rte.png',
});
