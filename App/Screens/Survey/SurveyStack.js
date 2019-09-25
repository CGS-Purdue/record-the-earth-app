import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { SurveyDescScreen } from './SurveyDescScreen';
import { SurveyBioScreen } from './SurveyBioScreen';
import { SurveyEmoScreen } from './SurveyEmoScreen';
import { SurveyGeoScreen } from './SurveyGeoScreen';
import { SurveyHumScreen } from './SurveyHumScreen';
import { SurveyEndScreen } from './SurveyEndScreen';

import { Theme } from '../../Theme';
const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _layout = Theme.ThemeLayout;

const SurveyStack = createStackNavigator(
  {
    SurveyDescription: {
      screen: SurveyDescScreen,
      path: 'soundscape/survey/descrption',
    },
    SurveyBio: {
      screen: SurveyBioScreen,
      path: 'soundscape/survey/bio',
    },
    SurveyEmo: {
      screen: SurveyEmoScreen,
      path: 'soundscape/survey/emo',
    },
    SurveyGeo: {
      screen: SurveyGeoScreen,
      path: 'soundscape/survey/geo',
    },
    SurveyHum: {
      screen: SurveyHumScreen,
      path: 'soundscape/survey/hum',
    },
    SurveyEnd: {
      screen: SurveyEndScreen,
      path: 'soundscape/survey/end',
    },
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
