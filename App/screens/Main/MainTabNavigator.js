import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { HomeStack } from './HomeStack';
import { LinksStack } from './LinksStack';
import { ThemeColors } from '../../Theme';

const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: ThemeColors.tintcolor,
    },
  }
});
MainTabNavigator.path = '';
MainTabNavigator.navigationOptions = {};

export { MainTabNavigator }
