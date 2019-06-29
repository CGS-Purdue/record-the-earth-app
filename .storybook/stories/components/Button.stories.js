import React, { Component } from "react";
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Boxes, Button } from '../../../src/components';
import recbutton_stop from '../../../static/assets/img/btn/btn-record-stop.png';
import recbutton_rec from '../../../static/assets/img/btn/btn-record-rec.png';
var recbtnstyle = {
  padding: '1em',
  border: '1px dashed #aaa'
};

storiesOf('Components|Button', module)
  .addDecorator(centered)
  .addDecorator(
    withInfo({inline: false,header: true})
  )
  .add('default ', () => <Button onClick={action('clicked')}>Hello Button</Button>)


storiesOf('Components|Button', module)
  .addDecorator(centered)
  .addDecorator(
    withInfo({inline:false,header: true})
  )
  .add('Record Button', () => (
    <Boxes.Box>
      <Boxes.ImgBox format="contain" label="record stop button" style={recbtnstyle} source={recbutton_stop} />
      <Boxes.ImgBox format="contain" label="record start button" style={recbtnstyle} source={recbutton_rec} />
    </Boxes.Box>
  ));
