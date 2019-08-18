import React from 'react';
import { createStackNavigator } from 'react-navigation';

import * as SurveyScreens from '../screens/SurveyScreens';

const SurveyStackNavigation = createStackNavigator({
    SurverMain: {    screen: SurveyScreens.SurveyScreen0 },
    SurveyStart: {   screen: SurveyScreens.StartScreen },
    SurveyScreen1: { screen: SurveyScreens.SurveyScreen1 },
    SurveyScreen2: { screen: SurveyScreens.SurveyScreen2 },
    SurveyScreen3: { screen: SurveyScreens.SurveyScreen3 },
    SurveyScreen4: { screen: SurveyScreens.SurveyScreen4 },
  }, {
    headerMode: 'none',
  }
);
SurveyStackNavigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return {
    tabBarVisible,
  };
};
export { SurveyStackNavigation }
