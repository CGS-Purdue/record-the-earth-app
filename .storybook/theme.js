import { create } from '@storybook/theming';

// eaeaea
// 214d5e
// 5f7881
// 4a8166
export default create({
  base: 'dark',

  colorPrimary: '#22ff4c',
  // colorPrimary: '#227b4c',
  colorSecondary: '#080808',

  // appBg: '#5A5A5A',
  appBg: '#507988',
  appContentBg: '#2d5e929e',
  // appContentBg: '#00000033',
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

  brandTitle: 'Record the Earth',
  brandUrl: 'https://www.recordtheearth.org',
  brandImage: '/assets/img/logo/logo-rte.png',
});
