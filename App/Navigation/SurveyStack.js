import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { StackViewTransitionConfigs } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { SoundscapeSurveyDescScreen } from '../Screens/Survey/SoundscapeSurveyDescScreen';
import { SoundscapeSurveyBioScreen } from '../Screens/Survey/SoundscapeSurveyBioScreen';
import { SoundscapeSurveyEmoScreen } from '../Screens/Survey/SoundscapeSurveyEmoScreen';
import { SoundscapeSurveyGeoScreen } from '../Screens/Survey/SoundscapeSurveyGeoScreen';
import { SoundscapeSurveyHumScreen } from '../Screens/Survey/SoundscapeSurveyHumScreen';
import { SoundscapeSubmitScreen } from '../Screens/Survey/SoundscapeSubmitScreen';
import { SoundscapeSchema } from '../Components/Database/SurveyModel/SurveySchema3';

const initSoundscape = () => {
  let soundscape = Object.assign({}, SoundscapeSchema);
  let timestamp = new Date();
  soundscape.datetime = timestamp.toISOString();
  return soundscape;
}

const SurveyTemplate = initSoundscape();

const SurveyStack = createStackNavigator({
    SoundscapeSurveyDescription: { screen: SoundscapeSurveyDescScreen },
    SoundscapeSurveyBio: { screen: SoundscapeSurveyBioScreen },
    SoundscapeSurveyEmo: { screen: SoundscapeSurveyEmoScreen },
    SoundscapeSurveyGeo: { screen: SoundscapeSurveyGeoScreen },
    SoundscapeSurveyHum: { screen: SoundscapeSurveyHumScreen },
    SoundscapeSubmit: { screen: SoundscapeSubmitScreen },
  },  {
    initialRouteName: 'SoundscapeSurveyDescription',
    initialRouteParams: { soundscape_data2: SurveyTemplate },
    initialRouteKey: 'SurveyStart',
    headerMode: 'none',
    mode: 'card',
    cardOverlayEnabled: false,
    cardShadowEnabled: true,
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });
        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });
        return { opacity, transform: [{ translateX }] };
      },
    }),
  }
);

export { SurveyStack };
