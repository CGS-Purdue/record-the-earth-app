import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import { MainTabNavigator } from './MainTabNavigator';
import { SurveyStack } from './SurveyStack';
import { RecordScreen } from '../Screens/Record/RecordScreen';

const RootNavigation = createSwitchNavigator({
    Main: MainTabNavigator,
    Survey: SurveyStack,
    Record: { screen: RecordScreen },
  },  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
    backBehavior: 'initialRoute',
  }
);

export { RootNavigation };



//// example
// export default createAppContainer(
// createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// })
// );
