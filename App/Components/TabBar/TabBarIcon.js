import { Ionicons } from '@expo/vector-icons';
import React, { Component }  from 'react';

import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _layout = Theme.Layout;
const _styles = Theme.Styles;

export default function TabBarIcon(props) {
  const empty = Object.create(null);
  const iconSize = props.size ? props.size : _layout.TEXT_SIZE_4;
  const iconColor = props.color ? props.color : _colors.TEXT_COLOR;
  const iconDefaultStyle = {
    fontSize: iconSize,
    paddingTop: 0,
    paddingBottom: 0,
  };

  const iconStyle = Object.assign(empty, iconDefaultStyle, props.style);

  return (
    <Ionicons
      name={props.name}
      size={iconSize}
      style={iconStyle}
      color={iconColor}
    />
  );
}


export { TabBarIcon };
