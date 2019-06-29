import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
// import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import mainbg from '../../../static/assets/img/bg/bg-main.png';
import logo from '../../../static/assets/img/logo/logo-rte-stacked.png';

var wrapStyle={
  background:'linear-gradient(to right,#2C5364,#203A43,#0F2027)',
  height:'100%',
  width:'100%',
  display:'flex',
  position:'fixed',
  top: 0,
  justifyContent: 'center',
  alignItems: 'center',
};

var imgStyle={width: '60%', position: 'absolute', left: '20%', zIndex: 10}
var mainImgStyle={width: '100%', height: '100%', position: 'absolute', left:'0', top: 0, zIndex: 1, opacity: .1}

storiesOf('Screens|Splash', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Updated Splash', () =>
    <div style={wrapStyle}>
      <img src={mainbg} style={mainImgStyle} />
      <img src={logo} style={imgStyle} />
    </div>
  )
