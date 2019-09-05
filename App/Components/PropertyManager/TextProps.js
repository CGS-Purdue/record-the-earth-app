
const TextProps = [
  ['style'],
    'accessibilityHint',
    'accessibilityLabel',
  { 'accessibilityRole': [ 'none', 'button', 'link', 'header', 'search', 'image', 'key', 'text', 'summary', 'imagebutton', 'adjustable' ]},
  { 'accessibilityState': ['selected', 'disabled'] },
    'accessible',
    'adjustsFontSizeToFit',
    'allowFontScaling',
  { 'dataDetectorType': [ 'phoneNumber', 'link', 'email', 'none', 'all' ] },
    'disabled',
    'ellipsizeMode',
    'maxFontSizeMultiplier',
    'minimumFontScale',
    'nativeID',
    'numberOfLines',

    // EVENTS
    'onLayout',
    'onLongPress',
    'onMoveShouldSetResponder',
    'onPress',
    'onResponderGrant',
    'onResponderMove',
    'onResponderRelease',
    'onResponderTerminate',
    'onResponderTerminationRequest',
    'onStartShouldSetResponder',
    'onTextLayout',

    'pressRetentionOffset',
    'selectable',
    'selectionColor',
    'suppressHighlighting',
    'testID',
    'textBreakStrategy',
];

const TextStyleProps = {
  ViewStyleProps: [
    ['Layout Props'],
    ['Shadow Props'],
    ['Transforms'],
    ['opacity', 'backfaceVisibility'],
    'elevation',    // ANDROID ONLY
  ],
  TextLayoutStyleProps: [
    'borderStyle',
    'borderRadius', [['borderBottomEndRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderBottomStartRadius'], [ 'borderTopEndRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderTopStartRadius' ]],
    'borderWidth', [ 'borderLeftWidth', 'borderRightWidth', 'borderBottomWidth', 'borderTopWidth' ],
    'borderColor', [[ 'borderEndColor', 'borderStartColor'], ['borderLeftColor', 'borderRightColor'], ['borderBottomColor', 'borderTopColor']],

    'fontSize',               // number
    'fontStyle',              // normal, 'italic')
    'fontWeight',             // normal, bold, 100, 200, 300, 400, 500, 600, 700, 800, 900)
    'fontFamily',             // string
    fontVariant: '', //  [small-caps, oldstyle-nums, lining-nums, tabular-nums, proportional-nums]  // (iOS)
   {
    letterSpacing: '', //  number
    textShadowOffset: 'textShadowOffset', //  { width: <number>, height: <number> }
    lineHeight: 'lineHeight', //  number
    includeFontPadding: false, //  bool (Android)
    textDecorationLine: 'textDecorationLine', //  none', 'underline', 'line-through', 'underline line-through')
    textShadowColor: 'textShadowColor', //  color
    textShadowRadius: 0, //  number
    textAlignVertical: 'center', //  auto', 'top', 'bottom', 'center') (Android)
    textAlign: 'auto', //  auto', 'left', 'right', 'center', 'justify')
    textDecorationColor: '', //  color (// iOS)
    textDecorationStyle: '', //  [solid, double, dotted, dashed) (iOS)]
    textTransform: '', //  none, uppercase, lowercase, capitalize)
    writingDirection: 'auto', //  auto, ltr, rtl) (iOS)
    iOS: 'iOS', //  additional space will be rendered after each glyph.
    Android: 'Android', //  Only supported since Android
   ]
};

const TextStyleProps = [
  [  ViewProps ],
    'textShadowOffset',       // { width: <number>, height: <number> }
    'backgroundColor',
    'color',                  // color
    'lineHeight',             // number
    'textAlign',              // auto', 'left', 'right', 'center', 'justify')
    'textDecorationLine',     // none', 'underline', 'line-through', 'underline line-through')
    'textShadowColor',        // color
    'textShadowRadius',       // number
    'includeFontPadding',     // bool (Android)
    'textAlignVertical',      // auto', 'top', 'bottom', 'center') (Android)
    'fontVariant',            // [small-caps, oldstyle-nums, lining-nums, tabular-nums, proportional-nums]  // (iOS)
    'letterSpacing',          // number
    'iOS',               :    // additional space will be rendered after each glyph.
    'Android',                // Only supported since Android
    'textDecorationColor',    // color (// iOS)
    'textDecorationStyle',    // [solid, double, dotted, dashed) (iOS)]
    'textTransform',          // none, uppercase, lowercase, capitalize)
    'writingDirection',       // auto, ltr, rtl) (iOS)
];
