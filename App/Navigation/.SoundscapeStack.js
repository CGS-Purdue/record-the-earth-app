import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Animated, Easing } from 'react-native';
// import { SoundscapeHomeScreen } from '../Screens/Soundscape/SoundscapeHomeScreen';
// import { SoundscapeRecordScreen } from '../Screens/Soundscape/SoundscapeRecordScreen';
import { SoundscapeSurveyDescScreen } from '../Screens/Soundscape/SoundscapeSurveyDescScreen';
import { SoundscapeSurveyBioScreen } from '../Screens/Soundscape/SoundscapeSurveyBioScreen';
import { SoundscapeSurveyEmoScreen } from '../Screens/Soundscape/SoundscapeSurveyEmoScreen';
import { SoundscapeSurveyGeoScreen } from '../Screens/Soundscape/SoundscapeSurveyGeoScreen';
import { SoundscapeSurveyHumScreen } from '../Screens/Soundscape/SoundscapeSurveyHumScreen';
import { SoundscapeSubmitScreen } from '../Screens/Soundscape/SoundscapeSubmitScreen';
import { StackViewTransitionConfigs } from 'react-navigation';

const SoundscapeStack = createStackNavigator({
    SoundscapeSurveyDescription: { screen: SoundscapeSurveyDescScreen },
    SoundscapeSurveyBio: { screen: SoundscapeSurveyBioScreen },
    SoundscapeSurveyEmo: { screen: SoundscapeSurveyEmoScreen },
    SoundscapeSurveyGeo: { screen: SoundscapeSurveyGeoScreen },
    SoundscapeSurveyHum: { screen: SoundscapeSurveyHumScreen },
    SoundscapeSubmit: { screen: SoundscapeSubmitScreen },
  },  {
    initialRouteName: 'SoundscapeSurveyDescription',
    headerMode: 'none',
    mode: 'card',
  }
);

export { SoundscapeStack };
