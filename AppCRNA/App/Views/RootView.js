import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ThemeColors } from '../Theme/Colors';




function RootView ({ children }, props) {
  let style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: 0,
    margin: 0,
    flex: 1,
  };

  if (props.background) {
    style.background = props.background;
  } else {
    style.color = ThemeColors.bgMain;
    style.background = ThemeColors.colorMain;
  }

  return (
    <View  {...props} style={style}>
        {children}
    </View>
  )
}

RootView.defaultProps = {
  children: null,
  absolute: false,
  background: null,
};

RootView.propTypes = {
  children: PropTypes.node,
};


export { RootView }
