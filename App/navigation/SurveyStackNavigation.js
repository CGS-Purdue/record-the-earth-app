import React from 'react';
import { createStackNavigator } from 'react-navigation';

import * as SurveyScreens from '../screens/SurveyScreens';

const SurveyStackNavigation = createStackNavigator({
    Main: {          screen: SurveyScreens.SurveyScreen0 },
    Start: {         screen: SurveyScreens.StartScreen },
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
export default SurveyStackNavigation
