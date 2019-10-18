import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { MainTabNavigator } from './MainTabNavigator';
import { SurveyStack } from './SurveyStack';
import { RecordScreen } from '../Screens/Record/RecordScreen';

export default createAppContainer(
  createSwitchNavigator({
      Main: MainTabNavigator,
      Record: { screen: RecordScreen },
      Survey: SurveyStack,
    },  {
      mode: 'modal',
      headerMode: 'none',
      initialRouteName: 'Main',
      backBehavior: 'initialRoute',
    }
  )
);
