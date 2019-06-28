import { configure, addParameters, addDecorator } from '@storybook/react';
////
// import { AppRegistry } from 'react-native';
// import { getStorybookUI, configure } from '@storybook/react-native';
////
import requireContext from 'require-context.macro';
import { addReadme } from 'storybook-readme';
import registerWithPanelTitle from 'storybook-readme/registerWithPanelTitle';
import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import brandTheme from './theme';

import '../src/index.css';


function loadStories() {
  require('./stories/index');
  // require('../src/stories/theme');
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
    type: 'desktop',
  }
};

// registerWithPanelTitle('Docs');

addParameters({
  options: {
    theme: brandTheme,
    showPanel: true,
    panelPosition: 'right',
  },
  viewport: {
    viewports: {
      ...newViewports,
      ...INITIAL_VIEWPORTS,
    }
  },
  readme: {
    // codeTheme: 'atom-dark',
    codeTheme: 'Pojoaque',
    // You can exclude prop tables globally here.
    // See `propTables` example for more info
    // excludePropTables: [YourImportedReactComponent],
  },
});

addDecorator(addReadme);
const req = requireContext(
  '../src/components',
   true,
   /\.stories\.js$/
);
configure(loadStories, module);
