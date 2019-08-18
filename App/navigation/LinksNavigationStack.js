import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import LinksScreen from '../screens/LinksScreen';
import TabBarIcon from '../components/TabBarIcon';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const LinksNavigationStack = createStackNavigator({
    Links: LinksScreen,
  },
  config
);
LinksNavigationStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
LinksNavigationStack.path = '';

export { LinksNavigationStack };
