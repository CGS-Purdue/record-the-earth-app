import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { HomeNavigationStack } from './HomeNavigationStack';
import { LinksNavigationStack } from './LinksNavigationStack';
import { SettingsNavigationStack } from './SettingsNavigationStack';

const mainTabNavigator = createBottomTabNavigator({
  HomeNavigationStack,
  LinksNavigationStack,
  SettingsNavigationStack,
});
mainTabNavigator.path = '';


export default mainTabNavigator;
