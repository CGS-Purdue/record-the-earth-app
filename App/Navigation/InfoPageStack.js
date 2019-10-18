import React from 'react';
import { createStackNavigator } from '../node_modules/react-navigation-stack/lib/module';
import { IonicFontIcon } from '../Components/Icon/FontIcon';

import { AboutScreen } from '../Screens/InfoPages/AboutScreen';
import { TermsScreen } from '../Screens/InfoPages/TermsScreen';
import { FaqScreen } from '../Screens/InfoPages/FaqScreen';
import { InfoPageLoader } from '../Screens/InfoPages/InfoPageLoader';

const InfoPageStack = createStackNavigator(
  {
    LoaderPage: { screen: InfoPageLoader },
    AboutPage: { screen: AboutScreen },
    TermsPage: { screen:TermsScreen },
    FaqPage: { screen:FaqScreen },
  },
  {
    cardStyle: {
      opacity: 1,
      backgroundColor: '#3e243f',
    },
    initialRouteName: 'InfoPageLoader',
    headerMode: 'none',
    navigationOptions: {
      header: {
        left: (
          <IonicFontIcon
            onPress={() => { console.log('test')}}
            style={{ marginHorizontal:4 }}
            name={'close-circle-outline'}
          />
        ),
      },
      style: { backgroundColor: '#3e243f' },
    },
  }
);

export { InfoPageStack };
