import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { SurveyScreen } from './SurveyScreen';
import { SurveyMainScreen } from './SurveyMainScreen';
import SurveyBioScreen from './SurveyBioScreen';
import SurveyGeoScreen from './SurveyGeoScreen';
import SurveyAntScreen from './SurveyAntScreen';
import SurveyEmoScreen from './SurveyEmoScreen';
import CombinedSurvey from './CombinedSurvey';

const SurveyStack = createStackNavigator({
  SurveyHome: { screen: SurveyScreen },
  SurveyMain: { screen: SurveyMainScreen },
  BioSurvey: { screen: SurveyBioScreen },
  EmoSurvey: { screen: SurveyEmoScreen },
  GeoSurvey: { screen: SurveyGeoScreen },
  AntSurvey: { screen: SurveyAntScreen },
  CombinedSurvey: { screen: CombinedSurvey },
}, {
  headerMode: 'none',
  initialRouteName: 'SurveyHome'
});

SurveyStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return { tabBarVisible };
};

export { SurveyStack };
