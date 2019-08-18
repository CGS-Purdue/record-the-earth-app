import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import { SurveyScreen } from '../components/SurveyScreen';

import * as SurveyScreens from '../screens/SurveyScreens';
import * as SurveyStack from '../screens/Survey/index';

const SurveyStackNavigation = createStackNavigator({
    SurveyB: { screen: SurveyScreen },
    SurveyMain: { screen: SurveyScreens.SurveyScreen0 },
    SurveyStart: {  screen: SurveyScreens.SurveyStartScreen },
    SurveyScreen1: { screen: SurveyScreens.SurveyScreen1 },
    SurveyScreen2: { screen: SurveyScreens.SurveyScreen2 },
    SurveyScreen3: { screen: SurveyScreens.SurveyScreen3 },
    SurveyScreen4: { screen: SurveyScreens.SurveyScreen4 },
  }, {
    headerMode: 'none',
    initialRouteName: 'SurveyB',
  }
);
SurveyStackNavigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return {
    tabBarVisible,
  };
};
export { SurveyStackNavigation }
