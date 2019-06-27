import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '../../src/components/Button/index.js';
import { Welcome } from '../../src/components/Welcome/index.js';

// import { withDocs } from 'storybook-readme';
// import { doc } from 'storybook-readme';
// import { withReadme } from 'storybook-readme';

import imageUrl from '../../static/assets/icon/icons.svg';

import theme_logo_content from './theme.logo.md';
import theme_fonts_content from './theme.fonts.md';
import theme_colors_content from './theme.colors.md';

function ThemeImage(props) {
  return (
    <div class="theme_image_container">
      <div class="theme_image">
        <h3 class="theme_image__label">{props.label}</h3>
        <img className="theme_image__img"
            src={props.source}
            alt={props.label}
        />
      </div>
    </div>
  );
}

function Box(props) {
  return (
    <div class="box" style={props.style}>
      <div class="theme_image">
        {children}
      </div>
    </div>
  );
}


function CenterBox({ children }) {
  const centeredStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="box" style={centeredStyle}>
      {children}
    </div>
  );
}

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <CenterBox>
      <Welcome showApp={linkTo('Button')} />
    </CenterBox>
  ));

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
    </Button>
  ));


storiesOf('Theme', module)
  .add('Logo', () => <h2>Theme Logo</h2>, {
      notes:  'A very simple example of addon notes',
      readme: {
        title: 'theme logo title',
        content: theme_logo_content,
        codeTheme: 'xcode'
        // codeTheme: 'dracula'
      },
    })
   ///
  .add('Icons', () => <ThemeImage label="Theme Icons" source={imageUrl} />)
   ///
  .add('Typography', () => <h2>Theme Logo</h2>, {
    readme: {
      title: 'theme fonts title',
      content: theme_fonts_content,
      codeTheme: 'xcode'
    },
  })
    // .addDecorator(withKnobs)
  .add('Colors', () => <h2>Theme Colors</h2>, {
    readme: {
      content: theme_colors_content,
      // codeTheme: 'dracula'
    }
  })
