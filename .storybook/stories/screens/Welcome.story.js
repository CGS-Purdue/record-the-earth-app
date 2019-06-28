import React from 'react';
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Boxes, Button } from '../../../src/components';
import { Welcome }        from '../../../src/components/Welcome/index.js';
import mainbg             from '../../../static/assets/img/backgrounds/bg-main.png';

storiesOf('Welcome|Intro', module)
  .addDecorator(centered)
  .add('Start', () => (
    <Boxes.CenterBox>
      <Boxes.ImageBox label="main bg" source={mainbg} />
      <Welcome showApp={linkTo('Button')} />
    </Boxes.CenterBox>
  ));
