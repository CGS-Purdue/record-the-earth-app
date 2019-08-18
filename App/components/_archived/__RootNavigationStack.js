import React from 'react';
import { createStackNavigator, NavigationScreenProp } from 'react-navigation';

import { SurveyStackNavigation } from './SurveyStackNavigation';
import { ModalRecordStack } from './ModalRecordStack';
import HomeScreen from '../screens/HomeScreen';

const RootNavigationStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Record: { screen: ModalRecordStack },
    Survey: { screen: SurveyStackNavigation },
  }, {
    mode: 'modal',
    tabBarVisible: false,
    headerMode: 'none',
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

export { RootNavigationStack }
