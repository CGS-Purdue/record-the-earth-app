import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
  })
);

// const switch_nav_config = {
//   // initialRouteName: 'main'
//   // navigationOptions: {}
//   // defaultNavigationOptions: {}
//   // resetOnBlur: true,
//   // paths: {},
//   // backBehavior: initialRoute|order|history|none
// }
