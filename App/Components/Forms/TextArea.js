import React, { Component } from 'react';
import { TextInput, View} from 'react-native';

import { Theme } from '../../Theme';
/// https://github.com/facebook/react-native/blob/master/Libraries/vendor/document/selection/DocumentSelectionState.js
// https://github.com/facebook/react-native/commit/3b7067a62ddf8dace0fd2e197718cf435a246a83


// multiline={false}
// maxLength={252}
// inputAccessoryViewID="sounscape_description_input"
// autoFocus={true}
// clearTextOnFocus={true}
// defaultValue=""
// maxFontSizeMultiplier={}
// placeholder="Enter a description for your soundscape"
// placeholderTextColor={ThemeColors.GRA_300}
// label="Label"
// inlineImageLeft={search_icon}
// inlineImagePadding={}
// errorMessage={this.state.error}
//
// onBlur
// onChange
// onChangeText
// onContentSizeChange
// onEndEditing
// onFocus
// onKeyPress
// onLayout
// onScroll
// onSelectionChange
// onSubmitEditing
// placeholder
// placeholderTextColor
// returnKeyLabel
// returnKeyType
// rejectResponderTermination
// scrollEnabled
// secureTextEntry
// selection
// selectionColor
// selectionState
// selectTextOnFocus
// showSoftInputOnFocus
// spellCheck
// textContentType
// textBreakStrategy
// underlineColorAndroid
// value
// // ios
// inputAccessoryViewID={}
// enablesReturnKeyAutomatically={false}
// keyboardAppearance={'default'}
// // android
// importantForAutofill={'noExcludeDescendants'}
// disableFullscreenUI={false}
// dataDetectorTypes={false}
// clear()
// isFocused();


const _styles = Theme.Styles;
const _colors = Theme.Colors;


const TextInputStyle = Object.assign({
    borderBottomLeftRadius: 1 ,
    borderBottomRightRadius: 1 ,
    borderBottomWidth: 1 ,
    borderLeftWidth: 1 ,
    borderRightWidth: 1 ,
    borderTopLeftRadius: 1 ,
    borderTopRightRadius: 1 ,
    borderTopWidth: 1 ,
  },
  // _styles.form_text_input
);

console.log('TextInputStyle',TextInputStyle);
// {
//   width: 200,
//   height: 44,
//   padding: 8,
//   borderWidth: 1,
//   borderColor: '#ccc'
// }
//
// allowFontScaling={true}
// autoCapitalize={'none'}
// autoCompleteType={'off'}
// autoCorrect={true}
// autoFocus={true}
// blurOnSubmit={false}
// clearTextOnFocus={true}
// contextMenuHidden={false}
// defaultValue={'Describe the sounds you heard.'}
// editable={true}
// keyboardType={'default'}

export default class StyledTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Placeholder',
      name: 'none',
      error: false,
    };

    this.getText = this.getText.bind(this);
  }

 _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  getText() {
    return this.state.text;
  }

  render() {
    const { text } = this.state;
    return (
      <View style={_styles.form_text_input_container}>
        <TextInput
          value={this.state.inputValue}
          multiline={true}
          numberOfLines={3}
          onChangeText={(text) => this.setState({text})}
          // onChangeText={this._handleTextChange}
          // style={TextInputStyle}
        />
     </View>
    );
  }
}

export { StyledTextArea };



// ["borderBottomLeftRadius","borderBottomRightRadius","borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopLeftRadius","borderTopRightRadius","borderTopWidth","flex","borderColor","backgroundColor","color","fontSize","width","height","padding","display","start","end","top","left","right","bottom","minWidth","maxWidth","minHeight","maxHeight","margin","marginVertical","marginHorizontal","marginTop","marginBottom","marginLeft","marginRight","marginStart","marginEnd","paddingVertical","paddingHorizontal","paddingTop","paddingBottom","paddingLeft","paddingRight","paddingStart","paddingEnd","borderWidth","borderStartWidth","borderEndWidth","position","flexDirection","flexWrap","justifyContent","alignItems","alignSelf","alignContent","overflow","flexGrow","flexShrink","flexBasis","aspectRatio","zIndex","direction","shadowColor","shadowOffset","shadowOpacity","shadowRadius","transform","transformMatrix","decomposedMatrix","scaleX","scaleY","rotation","translateX","translateY","backfaceVisibility","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","borderStartColor","borderEndColor","borderRadius","borderTopStartRadius","borderTopEndRadius","borderBottomStartRadius","borderBottomEndRadius","borderStyle","opacity","elevation","fontFamily","fontStyle","fontWeight","fontVariant","textShadowOffset","textShadowRadius","textShadowColor","letterSpacing","lineHeight","textAlign","textAlignVertical","includeFontPadding","textDecorationLine","textDecorationStyle","textDecorationColor","textTransform","writingDirection"]"
