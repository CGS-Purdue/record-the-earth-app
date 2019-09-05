import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import { HomeStack } from './HomeStack';
import { LinksStack } from './LinksStack';

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
      backgroundColor: 'blue',
    },
  }
});
MainTabNavigator.path = '';
MainTabNavigator.navigationOptions = {};

export { MainTabNavigator }
