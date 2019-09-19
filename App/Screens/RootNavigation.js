import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { MainTabNavigator } from './MainTabNavigator';
import { RecordScreen } from './Record/ReordScreen';
import { SurveyStack } from './Survey/SurveyStack';

import { Theme } from './.../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _layout = Theme.ThemeLayout;

// OR GROUPS OF ACTIVITES WITHIN THE APP.
// ROUTES ON SWITCH NAVIGATOR ARE DISCONNECTED FROM THEIR
// SIBILINGS.  UNLIKE THE STACK NAVIGATOR WHICH CAN BE
// MOVED UP AND DOWN ON A SWITCH NAVIGATOR SWTICHES CONTEXT

const RootNavigation = createSwitchNavigator({
    Main: { screen: MainTabNavigator },
    Record: { screen: RecordScreen },
    Survey: { screen: SurveyStack },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
    backBehavior: 'initialRoute',
  }
);


export default  createAppContainer(RootNavigation);
