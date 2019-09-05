import React, {Component} from 'react';
import {
  NavigationScreenProp,
  SwitchActions,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';



// import { HomeStack } from './Main/HomeStack';
import { MainTabNavigator } from './Main/MainTabNavigator';
import { RecordStack } from './Record/RecordStack';
import { SurveyStack } from './Survey/SurveyStack';


const RootNavigation = createSwitchNavigator({
    Home: { screen: MainTabNavigator },
    Record: { screen: RecordStack },
    Survey: { screen: SurveyStack },
  }, {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
    backBehavior: 'initialRoute',
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
RootNavigation.navigationOptions = {

};

export default createAppContainer(RootNavigation);
