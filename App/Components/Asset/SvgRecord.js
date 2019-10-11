import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Text,
  Tspan,
} from 'react-native-svg';
// import { Svg } from 'expo';
// const { Circle, Rect, Path, Defs, LinearGradient, Stop, G, Text, Tspan } = Svg;

const SVG_FILL = '#ffffff';
const SVG_BG = 'rgba(0,0,0,.0)';

const SvgContainerStyles = Object.assign(StyleSheet.absoluteFill, {
  backgroundColor: SVG_BG,
  flex: 1,
  maxWidth: '100%',
  maxHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

// xmlns:xlink="http://www.w3.org/1999/xlink"
// xlink:
class SvgRecord extends Component {
  render() {
    return (
      <View style={SvgContainerStyles}>
        <Svg xmlns='http://www.w3.org/2000/svg' width='458.76' height='460.24'>
          <Defs>
            <LinearGradient id='b'>
              <Stop offset='0' stop-color='#c79691' />
              <Stop offset='1' stop-color='#af4336' />
            </LinearGradient>
            <LinearGradient id='c'>
              <Stop offset='0' stop-color='#7b1407' />
              <Stop offset='1' stop-color='#d92510' />
            </LinearGradient>
            <LinearGradient id='a'>
              <Stop offset='0' stop-color='#d6270f' />
              <Stop offset='1' stop-color='#d6270f' stop-opacity='0' />
            </LinearGradient>
            <LinearGradient
              href='#a'
              id='e'
              x1='3.63'
              y1='764.34'
              x2='462.39'
              y2='764.34'
              gradientUnits='userSpaceOnUse'
            />
            <LinearGradient
              href='#b'
              id='f'
              gradientUnits='userSpaceOnUse'
              x1='232.65'
              y1='558.84'
              x2='228.82'
              y2='701.39'
              gradientTransform='translate(-2 -8)'
            />
            <LinearGradient
              href='#c'
              id='d'
              x1='228.61'
              y1='541.5'
              x2='233.62'
              y2='981.43'
              gradientUnits='userSpaceOnUse'
            />
          </Defs>
          <G transform='translate(-3.63 -534.22)'>
            <Circle
              cx='231.11'
              cy='761.97'
              r='222.98'
              fill='url(#d)'
              stroke='#000'
              stroke-width='4'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <Path
              d='M230.65 550.84a228.2 228.2 0 0 0-69.07 10.9c-46.36 14.99-85.24 52.45-95.64 92.17-12.3 46.72 48.12 49.05 168.72 41.42 38.04-2.4 84.48-17.4 126.92-14.1 15.16 1.18 33.64 16.47 45.64 6.85 5.07-4.07 4.57-13.22 1.36-19.45-23.85-45.48-55.34-88.99-110.5-107.36-21.11-7.03-44.14-10.5-67.43-10.43z'
              fill='url(#f)'
              stroke='#670000'
            />
            <Text
              y='810.5'
              x='93.09'
              style='line-height:1.25'
              font-weight='400'
              font-size='133.33'
              font-family='sans-serif'
              letter-spacing='0'
              word-spacing='0'
            >
              <Tspan y='810.5' x='93.09' fill='#fff'>
                REC
              </Tspan>
            </Text>
          </G>
        </Svg>
      </View>
    );
  }
}

export { SvgRecord };
