import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { SvgUri, Circle, Rect } from 'react-native-svg';

// https://github.com/react-native-community/react-native-svg#use-with-content-loaded-from-uri

export default class SvgExample extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Svg height='50%' width='50%' viewBox='0 0 100 100'>
          <Circle
            cx='50'
            cy='50'
            r='45'
            stroke='blue'
            strokeWidth='2.5'
            fill='green'
          />
          <Rect
            x='15'
            y='15'
            width='70'
            height='70'
            stroke='red'
            strokeWidth='2'
            fill='yellow'
          />
        </Svg>
      </View>
    );
  }
}
//
// // /Use with content loaded from uri
// export const SvgUriEx = () => (
//   <SvgUri
//     width="100%"
//     height="100%"
//     uri={url}
//   />
// );
//

//
// Use with svg files
// Try react-native-svg-transformer to get compile time conversion
// and cached transformations.
// https://github.com/kristerkari/react-native-svg-transformer#installation-and-configuration https://github.com/kristerkari/react-native-svg-transformer#for-react-native-v057-or-newer--expo-sdk-v3100-or-newer
//
// metro.config.js
//

const { getDefaultConfig } = require('metro-config');
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();

// Import your .svg file inside a React component:
//
// import Logo from './logo.svg';
// You can then use your image as a component:
//
// <Logo width={120} height={40} />
// Alternatively, you can use SvgXml with babel-plugin-inline-import, but with transforms done at run-time.
//
// .babelrc
// {
//   "presets": ["module:metro-react-native-babel-preset"],
//   "plugins": [
//     [
//       "babel-plugin-inline-import",
//       {
//         "extensions": [".svg"]
//       }
//     ]
//   ]
// }

// App.js
// import * as React from 'react';
// import { SvgXml } from 'react-native-svg';
// import testSvg from './test.svg';
// export default () => <SvgXml width="200" height="200" xml={testSvg} />;

// Use with xml strings
// import * as React from 'react';
// import { SvgXml } from 'react-native-svg';
//
// const xml = `
//   <svg width="32" height="32" viewBox="0 0 32 32">
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       fill="url(#gradient)"
//       d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM17 6C17 5.44772 17.4477 5 18 5H20C20.5523 5 21 5.44772 21 6V25C21 25.5523 20.5523 26 20 26H18C17.4477 26 17 25.5523 17 25V6ZM12 11C11.4477 11 11 11.4477 11 12V25C11 25.5523 11.4477 26 12 26H14C14.5523 26 15 25.5523 15 25V12C15 11.4477 14.5523 11 14 11H12ZM6 18C5.44772 18 5 18.4477 5 19V25C5 25.5523 5.44772 26 6 26H8C8.55228 26 9 25.5523 9 25V19C9 18.4477 8.55228 18 8 18H6ZM24 14C23.4477 14 23 14.4477 23 15V25C23 25.5523 23.4477 26 24 26H26C26.5523 26 27 25.5523 27 25V15C27 14.4477 26.5523 14 26 14H24Z"
//     />
//     <defs>
//       <linearGradient
//         id="gradient"
//         x1="0"
//         y1="0"
//         x2="8.46631"
//         y2="37.3364"
//         gradient-units="userSpaceOnUse">
//         <stop offset="0" stop-color="#FEA267" />
//         <stop offset="1" stop-color="#E75A4C" />
//       </linearGradient>
//     </defs>
//   </svg>
// `;
//
// export default () => <SvgXml xml={xml} width="100%" height="100%" />;

// Common props:
// Name	Default	Description
// - fill	'#000'	The fill prop refers to the color inside the shape.
// - fillOpacity	1	This prop specifies the opacity of the color or the content the current object is filled with.
// - fillRule	nonzero	The fillRule prop determines what side of a path is inside a shape, which determines how fill will paint the shape, can be nonzero or evenodd
// - stroke	'none'	The stroke prop controls how the outline of a shape appears.
// - strokeWidth	1	The strokeWidth prop specifies the width of the outline on the current object.
// - strokeOpacity	1	The strokeOpacity prop specifies the opacity of the outline on the current object.
// - strokeLinecap	'square'	The strokeLinecap prop specifies the shape to be used at the end of open subpaths when they are stroked. Can be either 'butt', 'square' or 'round'.
// - strokeLinejoin	'miter'	The strokeLinejoin prop specifies the shape to be used at the corners of paths or basic shapes when they are stroked. Can be either 'miter', 'bevel' or 'round'.
// - strokeDasharray	[]	The strokeDasharray prop controls the pattern of dashes and gaps used to stroke paths.
// - strokeDashoffset	null	The strokeDashoffset prop specifies the distance into the dash pattern to start the dash.
// - x	0	Translate distance on x-axis.
// - y	0	Translate distance on y-axis.
// - rotation	0	Rotation degree value on the current object.
// - scale	1	Scale value on the current object.
// - origin	0, 0	Transform origin coordinates for the current object.
// - originX	0	Transform originX coordinates for the current object.
// - originY	0	Transform originY coordinates for the current object.
// - Supported elements:
// Svg
// <Svg height="100" width="100">
//   <Rect x="0" y="0" width="100" height="100" fill="black" />
//   <Circle cx="50" cy="50" r="30" fill="yellow" />
//   <Circle cx="40" cy="40" r="4" fill="black" />
//   <Circle cx="60" cy="40" r="4" fill="black" />
//   <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
// </Svg>
// Colors set in the Svg element are inherited by its children:
//
// <Svg
//   width="130"
//   height="130"
//   fill="blue"
//   stroke="red"
//   color="green"
//   viewBox="-16 -16 544 544"
// >
//   <Path
//     d="M318.37,85.45L422.53,190.11,158.89,455,54.79,350.38ZM501.56,60.2L455.11,13.53a45.93,45.93,0,0,0-65.11,0L345.51,58.24,449.66,162.9l51.9-52.15A35.8,35.8,0,0,0,501.56,60.2ZM0.29,497.49a11.88,11.88,0,0,0,14.34,14.17l116.06-28.28L26.59,378.72Z"
//     strokeWidth="32"
//   />
//   <Path d="M0,0L512,512" stroke="currentColor" strokeWidth="32" />
// </Svg>
//
//
// Touch Events
// Touch events are supported in react-native-svg. These include:
//
// disabled
// onPress
// onPressIn
// onPressOut
// onLongPress
// delayPressIn
// delayPressOut
// delayLongPress
// You can use these events to provide interactivity to your react-native-svg components.
//
// <Circle
//   cx="50%"
//   cy="50%"
//   r="38%"
//   fill="red"
//   onPress={() => alert('Press on Circle')}
// />
//
//
//For more examples of touch in action, checkout the TouchEvents.js examples.

// Run example:
// git clone https://github.com/magicismight/react-native-svg-example.git
// cd react-native-svg-example
// yarn
//
// # run Android: react-native run-android
// # run iOS: react-native run-ios
//
