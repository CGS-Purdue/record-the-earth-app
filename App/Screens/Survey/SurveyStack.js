import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { SurveyDescriptionScreen } from './SurveyDescriptionScreen';
import { SurveyBioScreen } from './SurveyBioScreen';
import { SurveyEmoScreen } from './SurveyEmoScreen';
import { SurveyGeoScreen } from './SurveyGeoScreen';
import { SurveyAntScreen } from './SurveyAntScreen';
import { SurveyEndScreen } from './SurveyEndScreenDev';

const SurveyStack = createStackNavigator({
    SurveyDescription: { screen: SurveyDescriptionScreen },
    SurveyBio: { screen: SurveyBioScreen },
    SurveyEmo: { screen: SurveyEmoScreen },
    SurveyGeo: { screen: SurveyGeoScreen },
    SurveyAnt: { screen: SurveyAntScreen },
    SurveyEnd: { screen: SurveyEndScreen },
  }, {
    headerMode: 'none',
    initialRouteName: 'SurveyDescription',
  }
);

SurveyStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return { tabBarVisible };
};

export { SurveyStack };
