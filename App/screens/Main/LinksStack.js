import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import TabBarIcon from '../../Components/TabBarIcon';
import { LinksScreen } from './LinksScreen';

const config = Platform.select({
  default: {},
});

const LinksStack = createStackNavigator({
    Links: LinksScreen,
  },
  config
);
LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
LinksStack.path = '';

export { LinksStack };
