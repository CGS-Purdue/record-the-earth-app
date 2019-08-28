// Synthetic Touch Events
// For View responder props (e.g., onResponderMove), the synthetic touch event passed to them are of the following form:
// nativeEvent
// changedTouches - Array of all touch events that have changed since the last event.
// identifier - The ID of the touch.
// locationX - The X position of the touch, relative to the element.
// locationY - The Y position of the touch, relative to the element.
// pageX - The X position of the touch, relative to the root element.
// pageY - The Y position of the touch, relative to the root element.
// target - The node id of the element receiving the touch event.
// timestamp - A time identifier for the touch, useful for velocity calculation.
// touches - Array of all current touches on the screen.


const ViewProps = [
  'accessible',
  'accessibilityElementsHidden',
  'accessibilityHint',
  'accessibilityIgnoresInvertColors',
  'accessibilityLabel',
  'accessibilityLiveRegion',
  'accessibilityRole',
  'accessibilityStates',
  'accessibilityViewIsModal',

  'clickable',
  'collapsable',
  'hitSlop',
  'importantForAccessibility',

  'nativeID',

  'nextFocusDown',
  'nextFocusForward',
  'nextFocusLeft',
  'nextFocusRight',
  'nextFocusUp',
  'needsOffscreenAlphaCompositing',

  'onAccessibilityEscape',
  'onAccessibilityTap',

  'onLayout',
  'onMagicTap',
  'onMoveShouldSetResponder',
  'onMoveShouldSetResponderCapture',
  'onResponderGrant',
  'onResponderMove',
  'onResponderReject',
  'onResponderRelease',
  'onResponderTerminate',
  'onResponderTerminationRequest',
  'onStartShouldSetResponder',
  'onStartShouldSetResponderCapture',
  'pointerEvents',

  'renderToHardwareTextureAndroid',
  'removeClippedSubviews',
  'shouldRasterizeIOS',

  'style',

  'testID'
];

const ViewStyleProps [
  ['Layout Props'],
  ['Shadow Props'],
  ['Transforms'],
  ['borderEndColor', 'borderStartColor','borderLeftColor', 'borderLeftWidth', 'borderRightColor', 'borderRightWidth'],
  ['borderBottomColor', 'borderBottomEndRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderBottomStartRadius', 'borderBottomWidth'],
  ['borderTopColor', 'borderTopEndRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderTopStartRadius', 'borderTopWidth'],
  ['opacity', 'backfaceVisibility'],

  'borderStyle',
  'borderWidth',
  'borderColor',
  'borderRadius',

  'backgroundColor',

  'elevation',  // ANDROID ONLY
]



export { ViewProps }
