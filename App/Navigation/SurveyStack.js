import React from 'react';
import { Animated, Easing } from 'react-native';
import { createStackNavigator } from '../node_modules/react-navigation-stack/lib/module';
import { SurveyDescScreen } from '../Screens/Survey/SurveyDescScreen';
import { SurveyBioScreen } from '../Screens/Survey/SurveyBioScreen';
import { SurveyEmoScreen } from '../Screens/Survey/SurveyEmoScreen';
import { SurveyGeoScreen } from '../Screens/Survey/SurveyGeoScreen';
import { SurveyHumScreen } from '../Screens/Survey/SurveyHumScreen';
import { SurveySubmitScreen } from '../Screens/Survey/SurveySubmitScreen';
import { SoundscapeSchema } from '../Components/Database/SurveyModel/SurveySchema3';

const initSoundscape = () => {
  let soundscape = Object.assign({}, SoundscapeSchema);
  let timestamp = new Date();
  soundscape.datetime = timestamp.toISOString();
  return soundscape;
};

const SurveyStack = createStackNavigator({
    SurveyDescScreen: { key: 'SurveyStep1', screen: SurveyDescScreen },
    SoundscapeSurveyBio: { key: 'SurveyStep2',  screen: SurveyBioScreen },
    SoundscapeSurveyEmo: { key: 'SurveyStep3',  screen: SurveyEmoScreen },
    SoundscapeSurveyGeo: { key: 'SurveyStep4',  screen: SurveyGeoScreen },
    SoundscapeSurveyHum: { key: 'SurveyStep5',  screen: SurveyHumScreen },
    SoundscapeSubmit: { key: 'SurveyStep6', screen: SurveySubmitScreen },
  }, {
    initialRouteName: 'SurveyDescScreen',
    initialRouteParams: { soundscape_data2: initSoundscape() },
    initialRouteKey: 'SurveyStep1',
    headerMode: 'none',
    mode: 'card',
    cardOverlayEnabled: false,
    cardShadowEnabled: true,
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 350,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        // const height = layout.initHeight;
        // const translateY = position.interpolate({
        //   inputRange: [index - 1, index, index + 1],
        //   outputRange: [height, 0, 0],
        // });

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return {
          opacity,
          transform: [{ translateX }]
        };
      },
    }),
  }
);

export { SurveyStack };
