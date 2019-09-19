import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { SurveyDescScreen } from './SurveyDescScreen';
import { SurveyBioScreen } from './SurveyBioScreen';
import { SurveyEmoScreen } from './SurveyEmoScreen';
import { SurveyGeoScreen } from './SurveyGeoScreen';
import { SurveyHumScreen } from './SurveyHumScreen';
import { SurveyEndScreen } from './SurveyEndScreenDev';
import { Theme } from '../../Theme';
const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _layout = Theme.ThemeLayout;

const SurveyStack = createStackNavigator(
  {
    SurveyDescription: { screen: SurveyDescScreen },
    SurveyBio: { screen: SurveyBioScreen },
    SurveyEmo: { screen: SurveyEmoScreen },
    SurveyGeo: { screen: SurveyGeoScreen },
    SurveyAnt: { screen: SurveyHumScreen },
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
