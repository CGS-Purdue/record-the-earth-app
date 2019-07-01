import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Boxes, Button } from '../../../src/components';
import { Welcome } from '../../../src/components/Welcome/index.js';

import mainbg from '../../../static/assets/img/bg/bg-main.png';

var heroFormat={format:'hero'};

storiesOf('Screens|Article/', module)
  .addDecorator(centered)
  .add('Welcome', () => (
    <Boxes.CenterBox>
      <Boxes.ImgBox format={heroFormat} source={mainbg} />
      <Welcome showApp={linkTo('Button')} />
    </Boxes.CenterBox>
  ), {
    viewport: {
      defaultViewport: 'iphone6'
    }
  });
