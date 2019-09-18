import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { MainTabNavigator } from './Main/MainTabNavigator';
import { RecordScreen } from './Record/RecordScreen';
import { SurveyStack } from './Survey/SurveyStack';

const RootNavigation = createSwitchNavigator({
    Main: { screen: MainTabNavigator },
    Record: { screen: RecordScreen },
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

// class ThemeAppNavContainer extends Component {
//   render() {
//     return (<AppNavContainer theme={"dark"}/>)
//   }
// }
// function createThemeAppContainer (Navigation, themeName) {
// }
// const ThemeAppNavContainer = createThemeAppContainer(RootNavigation);
//
//  AppNavContainer

const AppNavContainer = createAppContainer(RootNavigation);
export { AppNavContainer }
