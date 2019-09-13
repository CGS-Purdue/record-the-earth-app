//// -----------
/// Layout Props
/// ------------
[
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'alignContent',
  'alignItems',
  'alignSelf',
  'justifyContent',

  'aspectRatio',

  'borderWidth',

  [
    'borderTopWidth',
    ['borderEndWidth', 'borderLeftWidth'],
    ['borderRightWidth', 'borderStartWidth'],
    'borderBottomWidth'
  ],

  'direction',
  'display',

  'end',
  'bottom',
  'left',

  'margin',
  'marginBottom',
  'marginEnd',
  'marginHorizontal',
  'marginLeft',
  'marginRight',
  'marginStart',
  'marginTop',
  'marginVertical',

   ['padding'], // [paddingTop, paddingBottom, paddingLeft, paddingRight]
   ['paddingHorizontal', 'paddingVertical'],
   [['paddingStart', 'paddingLeft'], ['paddingRight','paddingEnd'], 'paddingBottom', 'paddingTop'],


  'overflow',

  'position',
  'right',
  'start',
  'top',

  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',

  'width',
  'zIndex'
];

//    width sets the width of this component.
//    It works similarly to width in CSS,
//    but in React Native you must use points or percentages.
//    Ems and other units are not supported.
//    https://developer.mozilla.org/en-US/docs/Web/CSS/width for more details.
//
