import React from 'react';
import { createStackNavigator, NavigationScreenProp } from 'react-navigation';
import { Platform } from 'react-native';
import TabBarIcon from '../../Components/TabBarIcon';

import { HomeScreen } from './HomeScreen';
import { LinksStack } from './LinksStack';

const homeConfig = Platform.select({
  // web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Links: LinksStack,
  },
  homeConfig
);

HomeStack.navigationOptions = ({ navigation }) => {
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
HomeStack.path = '';


export { HomeStack };
