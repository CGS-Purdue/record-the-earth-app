import React from 'react';
import { createStackNavigator, NavigationScreenProp } from 'react-navigation';
import { Platform } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import { HomeScreen } from '../screens/HomeScreen';

import { ModalRecordStack } from './ModalRecordStack';


const homeConfig = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const RootNavigationStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Record: { screen: ModalRecordStack },
  }, {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#123',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

RootNavigationStack.navigationOptions = ({ navigation }) => {
  // let tabBarVisible = true;
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};



const HomeNavigationStack = createStackNavigator({
    Home: RootNavigationStack,
  },
  homeConfig
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
