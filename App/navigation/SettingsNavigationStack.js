import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import SettingsScreen from '../screens/SettingsScreen';
import TabBarIcon from '../components/TabBarIcon';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SettingsNavigationStack = createStackNavigator({
    Links: SettingsScreen,
  },
  config
);
SettingsNavigationStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};
SettingsNavigationStack.path = '';

export { SettingsNavigationStack };
