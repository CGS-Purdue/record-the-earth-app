
const TextProps = [
    'accessibilityHint',
    'accessibilityLabel',
  { 'accessibilityRole': [
      'none',
      'button',
      'link',
      'header',
      'search',
      'image',
      'key',
      'text',
      'summary',
      'imagebutton',
      'adjustable'
    ],
  },
  { 'accessibilityState': ['selected', 'disabled'] },
    'accessible',
    'adjustsFontSizeToFit',
    'allowFontScaling',
  { 'dataDetectorType': [
      'phoneNumber',
      'link',
      'email',
      'none',
      'all'
    ]
  },
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
    ['style']
    'suppressHighlighting',
    'testID',
    'textBreakStrategy',
];

const TextStyleProps = [
  [  ViewProps ],

    'textShadowOffset',       // { width: <number>, height: <number> }
    'color',                  // color
    'fontSize',               // number
    'fontStyle',              // normal, 'italic')
    'fontWeight',             // normal, bold, 100, 200, 300, 400, 500, 600, 700, 800, 900)
    'lineHeight',             // number
    'textAlign',              // auto', 'left', 'right', 'center', 'justify')
    'textDecorationLine',     // none', 'underline', 'line-through', 'underline line-through')
    'textShadowColor',        // color
    'fontFamily',             // string
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
]]
