import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addReadme } from 'storybook-readme';

import '../src/index.css';


function loadStories() {

  require('../src/stories/index');

  req.keys().forEach(filename => req(filename));
}


const newViewports = {
  responsiveView: {
    name: 'responsiveView',
    styles: {
      position: 'relative',
      width: '100%',
      height: '100%',
      marginLeft: "auto",
      marginRight: "auto",
    },
    type: 'mobile',
  }
};


const req = requireContext('../src/components', true, /\.stories\.js$/);

addDecorator(addReadme);

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    }
  },
});
// addParameters({
//   darkMode: {
//       // Override the default dark theme
//       dark: { ...themes.dark, appBg: 'black' },
//       // Override the default light theme
//       light: { ...themes.normal, appBg: 'red' }
//     }
// });
configure(loadStories, module);
