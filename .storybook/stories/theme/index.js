import React from 'react';
import centered from '@storybook/addon-centered/react';
import { Boxes } from '../../../src/components';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import theme_logo_content from         './theme.logo.md';
import theme_font_styles from          './theme.font-styles.md';
import theme_font_headings from        './theme.font-headings.md';
import theme_colors_ui from            './theme.colors.ui.md';
import theme_colors_base from          './theme.colors.base.md';
import theme_colors_notifications from './theme.colors.notifications.md';
import theme_colors_named from         './theme.colors.named.md';

import imageUrl from  '../../../static/assets/icon/icons.svg';
import logo_rte              from '../../../static/assets/img/logo/logo-rte.png';
import logo_emblem_svg       from '../../../static/assets/img/logo/logo-emblem.svg';
import logo_rte_stacked      from '../../../static/assets/img/logo/logo-rte-stacked.png';

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



storiesOf('Theme|Icons', module)
  .addDecorator(centered)
  .addDecorator(
    withInfo({inline:false,header: true})
  )
  .add('Logo Variations', () => (
    <Boxes.Box>
      <Boxes.ImgBox format="contain" label="long" source={logo_rte} />
      <Boxes.ImgBox format="contain" label="stacked" source={logo_rte_stacked} />
      <Boxes.ImgBox format="contain" label="emblem" source={logo_emblem_svg} />
    </Boxes.Box>
  ));
