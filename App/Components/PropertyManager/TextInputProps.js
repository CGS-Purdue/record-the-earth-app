// Methods
// clear
// isFocused

// Note that some props are only available with multiline={true/false}.
//  Additionally, border styles that apply to only one side of the element
//  (e.g., borderBottomColor, borderLeftWidth, etc.) will not be applied if multiline=false. To achieve the same effect, you can wrap your TextInput in a View:

const TextInputProps = [
  'allowFontScaling',
  'autoCapitalize',
  'autoCompleteType',
  'autoCorrect',
  'autoFocus',
  'blurOnSubmit',
  'caretHidden',
  'clearButtonMode',
  'clearTextOnFocus',
  'contextMenuHidden',
  'dataDetectorTypes',
  'defaultValue',
  'disableFullscreenUI',
  'editable',
  'enablesReturnKeyAutomatically',
  'importantForAutofill',
  'inlineImageLeft',
  'inlineImagePadding',
  'inputAccessoryViewID',
  'keyboardAppearance',
  'keyboardType',
  'maxFontSizeMultiplier',
  'maxLength',
  'multiline',
  'numberOfLines',
  // events
  'onBlur',
  'onChange',
  'onChangeText',
  'onContentSizeChange',
  'onEndEditing',
  'onFocus',
  'onKeyPress',
  'onLayout',
  'onScroll',
  'onSelectionChange',
  'onSubmitEditing',
   //
  'placeholder',
  'placeholderTextColor',
  'rejectResponderTermination',
  'returnKeyLabel',
  'returnKeyType',
  'scrollEnabled',
  'secureTextEntry',
  'selection',
  'selectionColor',
  'selectionState',
  'selectTextOnFocus',
  'showSoftInputOnFocus',
  'spellCheck',
  {
    'style':  [
      'borderLeftWidth',
      'borderTopWidth',
      'borderRightWidth',
      'borderBottomWidth',
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomRightRadius',
      'borderBottomLeftRadius',
    ]
  },

  'textBreakStrategy',
  'textContentType',
  'underlineColorAndroid',
  'value'
];
