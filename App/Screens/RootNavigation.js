import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { MainTabNavigator } from './MainTabNavigator';
import { SoundscapeSwitch } from './SoundscapeSwitch';
// import { RecordScreen } from './Main/RecordScreen';
// import { SurveyStack } from './Survey/SurveyStack';
// import { SurveyEndScreen } from './Survey/SurveyEndScreen';
// import { FileListScreen } from './Main/FileListScreenDev';
import { Theme } from './../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _layout = Theme.ThemeLayout;

// OR GROUPS OF ACTIVITES WITHIN THE APP.
// ROUTES ON SWITCH NAVIGATOR ARE DISCONNECTED FROM THEIR
// SIBILINGS.  UNLIKE THE STACK NAVIGATOR WHICH CAN BE
// MOVED UP AND DOWN ON A SWITCH NAVIGATOR SWTICHES CONTEXT

const RootNavigation = createSwitchNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      path: 'main',
    },
    Soundscape: {
      screen: SoundscapeSwitch,
      path: 'soundscape',
    },
    // Survey: {
    //   screen: SurveyStack,
    //   path: 'survey',
    // },
    // SurveyEnd: {
    //   screen: SurveyEndScreen,
    //   path: 'survey/e6nd',
    // },
    // SoundFiles: {
    //   screen: FileListScreen,
    //   path: 'library',
    // },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
    backBehavior: 'initialRoute',
  }
);

export default createAppContainer(RootNavigation);
