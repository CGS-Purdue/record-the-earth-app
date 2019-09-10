import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { MainTabNavigator } from './Main/MainTabNavigator';
import { RecordStack } from './Record/RecordStack';
import { SurveyStack } from './Survey/SurveyStack';

const RootNavigation = createSwitchNavigator({
    Main: { screen: MainTabNavigator },
    Record: { screen: RecordStack },
    Survey: { screen: SurveyStack },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
    backBehavior: 'initialRoute',
  }
);

// defaultNavigationOptions: {
//   headerStyle: {
//     backgroundColor: '#f4511e',
//   },
//   headerTintColor: '#123',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// },
//
const AppNavContainer = createAppContainer(RootNavigation);

export { AppNavContainer };