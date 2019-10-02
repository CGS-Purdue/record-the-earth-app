import { Ionicons } from '@expo/vector-icons';
import React, { Component }  from 'react';
import { Platform }  from 'react-native';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _layout = Theme.Layout;
const _styles = Theme.Styles;
const PLATFORM_OS = Platform.OS;

// <TabBarIcon
//   name={iconName}
//   style={_styles.tabbar_icon}
//   size={_layout.TAB_BAR_ICON_SIZE}
//   color={tintColor}
// />

function IonicFontIcon(props) {
  let iconPrefix = 'md';
  if (PLATFORM_OS === 'ios'){ iconPrefix = 'ios';  }
    let iconName = `${iconPrefix}-${props.name}`;
  const iconSize = props.size ? props.size : _layout.TEXT_SIZE_4;
  const iconColor = props.color ? props.color : _colors.TEXT_COLOR;
  const iconDefaultStyle = {
    fontSize: iconSize,
    paddingTop: 0,
    paddingBottom: 0,
  };
  const empty = Object.create(null);
  const iconStyle = Object.assign(empty, iconDefaultStyle, props.style);

  return (
    <Ionicons
      name={iconName}
      size={iconSize}
      style={iconStyle}
      color={iconColor}
    />
  );
}


export { IonicFontIcon };
