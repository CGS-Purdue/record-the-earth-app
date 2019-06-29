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
    showNav: true,
    panelPosition: 'bottom', //bottom|right
  },
  viewport: {
    viewports: {
      ...newViewports,
      ...INITIAL_VIEWPORTS,
    }
  },
  readme: {
    codeTheme: 'vs',
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
