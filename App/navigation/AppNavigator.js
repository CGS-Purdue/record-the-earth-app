import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';


import { SurveyStack } from '../screens/Survey/SurveyStack';
import { HomeScreen } from '../screens/HomeScreen';

export default createAppContainer(
  createSwitchNavigator({
    Main: HomeScreen,
    Survey:  SurveyStack,
  }, {
    initialRouteName: 'Main',
    backBehavior: 'initialRoute'
  })
);
// backBehavior: initialRoute|order|history|none
// defaultNavigationOptions:
