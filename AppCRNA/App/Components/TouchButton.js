import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { ThemeColors } from '../Theme/Colors';
import { ThemeFonts } from '../Theme/Fonts';


export function TouchButton({ children }, props) {
    // backgroundColor: '#778899'

  let touchButtonStyle = {

    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: 0,
    margin: 0,
    fontFamily: ThemeFonts.MONO_FONT,
    flex: 1,
  };

  if (props.background) {
    style.background = props.background;
  } else {
    style.color = ThemeColors.bgMain;
    style.background = ThemeColors.colorMain;
  }

  function toggleState() {
    if (this.state.active) {
      this.setState(false);
    } else {
      this.setState(true);
    }
  };

  if (props.hightlight) {
    return (
      <TouchableHighlight {...props}  style={touchButtonStyle}>
        {children}
      </TouchableHighlight>
    )
  } else {
    return (
      <TouchableOpacity {...props} style={touchButtonStyle}>
        {children}
      </TouchableOpacity>
    )
  }
}


TouchButton.defaultProps = {
  error: null,
  highlight: false,
  color: ThemeColors.BACKGROUND_COLOR,
  action: toggleState,
  disabled: false,
};

TouchButton.propTypes = {
  task: PropTypes.shape({
    highlight: PropTypes.boolean,
    action: PropTypes.function,
    state: PropTypes.string,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.boolean,
};
