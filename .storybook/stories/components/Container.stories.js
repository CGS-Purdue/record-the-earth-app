import React, { Component } from "react";
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Boxes } from '../../../src/components';

storiesOf('Components|Box', module)
  .addDecorator(centered)
  .addDecorator(
    withInfo({ inline: true, header: true})
  )
  .add('Verticaly Centered', () => <Boxes.Boxy />)
  .add('Horizontally Centered', () => <Boxes.Boxy style="" text=""></Boxes.Boxy>);
