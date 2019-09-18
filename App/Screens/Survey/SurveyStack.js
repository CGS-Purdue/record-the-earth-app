import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import { SurveyAntScreen } from './SurveyAntScreen';
import { SurveyBioScreen } from './SurveyBioScreen';
import { SurveyDescriptionScreen } from './SurveyDescriptionScreen';
import { SurveyEmoScreen } from './SurveyEmoScreen';
import { SurveyEndScreen } from './SurveyEndScreenDev';
import { SurveyGeoScreen } from './SurveyGeoScreen';

const SurveyStack = createStackNavigator(
  {
    SurveyDescription: { screen: SurveyDescriptionScreen },
    SurveyBio: { screen: SurveyBioScreen },
    SurveyEmo: { screen: SurveyEmoScreen },
    SurveyGeo: { screen: SurveyGeoScreen },
    SurveyAnt: { screen: SurveyAntScreen },
    SurveyEnd: { screen: SurveyEndScreen },
  },
  {
    headerMode: 'none',
    initialRouteName: 'SurveyDescription',
  }
);

SurveyStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return { tabBarVisible };
};

export { SurveyStack };
