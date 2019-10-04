import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button,TouchableNativeFeedback } from 'react-native';

import { Theme } from '../../Theme';

const _var = Theme.Variables;

//
// Example:
// renderButton: function() {
//   return (
//     <TouchableOpacity onPress={this._onPressButton}>
//       <Image
//         style={styles.button}
//         source={require('./myButton.png')}
//       />
//     </TouchableOpacity>
//   );
// },

// Props
// accessibilityLabel
// color  - Color of the text (iOS), or background color of the button (Android)
// disabled
// hasTVPreferredFocus
// nextFocusDown
// nextFocusForward
// nextFocusLeft
// nextFocusRight
// nextFocusUp
// onPress
// testID
// title
// touchSoundDisabled




export default function TouchableNativeButton({ onPress, children }) {
  return <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>;
}

TouchableNativeButton.defaultProps = {
  children: null,
  onPress: null,
  size: _var.BUTTON_SIZE,
  color: _var.BUTTON_COLOR,
  iconStyle: _var.BUTTON_ICON_STYLE,
  borderRadius: _var.BUTTON_BORDER_RADIUS,
  backgroundColor: _var.BUTTON_BGCOLOR,
};

TouchableNativeButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};


const button_style = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
  marginTop: 20,
};




const ThemeButton = ( props ) => {
  if (props.style) {
    Object.assign(button_style, props.style);
  }
  return (
    <Button
      onClick={props.onClick}
      style={button_style}>
        {props.children}
    </Button>
  );
};

ThemeButton.defaultProps = {
  children: null,
  onPress: null,
  onClick: () => { console.log('clicked');},
  size: _var.BUTTON_SIZE,
  color: _var.BUTTON_COLOR,
  iconStyle:  _var.BUTTON_ICON_STYLE,
  borderRadius: _var.BUTTON_BORDER_RADIUS,
  backgroundColor: _var.BUTTON_BGCOLOR,
};
ThemeButton.displayName = 'Button';


ThemeButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};


export { ThemeButton, TouchableNativeButton };
