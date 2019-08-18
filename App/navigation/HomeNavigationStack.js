import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import { RootNavigationStack } from './RootNavigationStack';
import TabBarIcon from '../components/TabBarIcon';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeNavigationStack = createStackNavigator({
    Home: RootNavigationStack,
  },
  config
);

HomeNavigationStack.navigationOptions = ({ navigation }) => {
  let tabBarLabel = 'Home';
  let tabBarIcon = ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  );
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel,
    tabBarIcon
  };
}
HomeNavigationStack.path = '';

export { HomeNavigationStack };
