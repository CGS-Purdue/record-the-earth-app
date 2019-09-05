import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { ThemeColors } from '../Theme/Colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? ThemeColors.tabIconSelected : ThemeColors.tabIconDefault}
    />
  );
}
