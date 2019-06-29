import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
// import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import Particles from 'react-particles-js'
// background:'linear-gradient(to right, rgb(44, 83, 100), rgb(32, 58, 67), rgb(15, 32, 39))',

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

var particleStyle={width:'100%', flex: [1,1,'100%'], height: '100%', position: 'absolute', top: 0, left: 0}
var imgStyle={width: '60%', position: 'absolute', left: '20%', zIndex: 10}
var mainImgStyle={width: '100%', height: '100%', position: 'absolute', left:'0', top: 0, zIndex: 1, opacity: .1}

storiesOf('Screens|Splash', module)
  // .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)

  .add('Particle Splash', () =>
    <div style={wrapStyle}>
      <img src={mainbg} style={mainImgStyle} />
      <img src={logo} style={imgStyle} />
    <Particles style={particleStyle} params={{
      "particles": {
        "number": {
      "value": 89,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#36c872"
      },
   },
    "opacity": {
      "value": 0.2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 30,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.5,
      "width": 1.8939543399174543
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
   "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }
  }} />
  </div>
)
