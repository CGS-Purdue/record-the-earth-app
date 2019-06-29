import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered/react';

import imageUrl from  '../../../static/assets/icon/icons.svg';
import { Boxes } from '../../../src/components';

import theme_logo_content from         './theme.logo.md';
import theme_font_styles from          './theme.font-styles.md';
import theme_font_headings from        './theme.font-headings.md';
import theme_colors_ui from            './theme.colors.ui.md';
import theme_colors_base from          './theme.colors.base.md';
import theme_colors_notifications from './theme.colors.notifications.md';
import theme_colors_named from         './theme.colors.named.md';


storiesOf('Theme|Logo', module)
  .addDecorator(centered)
  .add('white', () => <h2>Theme Logo</h2>, {
      notes:  'A very simple example of addon notes',
      readme: {
        content: theme_logo_content,
      },
    })
  .add('Icons', () => <Boxes.ImgBox label="Theme Icons" source={imageUrl} />)


storiesOf('Theme|Font', module)
  .addDecorator(centered)
  .add('Styles', () => <h2>Font Styles</h2>, {
    readme: {
      content: theme_font_styles,
    },
  })
  .addDecorator(centered)
  .add('Headings', () => <h2>Font Headings</h2>, {
    readme: {
      content: theme_font_headings,
    },
  })

storiesOf('Theme|Colors', module)
  .addDecorator(centered)
  .add('Base', () => <Boxes.Box />, {
    readme: {
      content: theme_colors_base,
    }
  })
  .addDecorator(centered)
  .add('Named', () => null, {
    readme: {
      content: theme_colors_named,
    }
  })
  .addDecorator(centered)
  .add('Interface', () => null, {
    readme: {
      content: theme_colors_ui,
    }
  })
  .addDecorator(centered)
  .add('Notifications', () => null, {
    readme: {
      content: theme_colors_notifications,
    }
  })
