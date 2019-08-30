import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, Button } from 'react-native';
import { ThemeDefaultVariables } from '../../Theme/Variables';

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
  size: ThemeDefaultVariables.ButtonSize,
  color: ThemeDefaultVariables.ButtonColor,
  iconStyle: ThemeDefaultVariables.ButtonIconStyle,
  borderRadius: ThemeDefaultVariables.ButtonBorderRadius,
  backgroundColor: ThemeDefaultVariables.ButtonBackgroundColor,
};

TouchableNativeButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};


const button_style = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const ThemeButton = ( props ) => {
  if (props.style) {
    Object.assign(button_style, props.style);
  }
  return (
    <button
      onClick={props.onClick}
      style={button_style}>
        {props.children}
    </button>
  );
};

ThemeButton.defaultProps = {
  children: null,
  onPress: null,
  onClick: () => { console.log('clicked');},
  size: ThemeDefaultVariables.ButtonSize,
  color: ThemeDefaultVariables.ButtonColor,
  iconStyle: ThemeDefaultVariables.ButtonIconStyle,
  borderRadius: ThemeDefaultVariables.ButtonBorderRadius,
  backgroundColor: ThemeDefaultVariables.ButtonBackgroundColor,
};
ThemeButton.displayName = 'Button';


ThemeButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};


export { ThemeButton, TouchableNativeButton };
