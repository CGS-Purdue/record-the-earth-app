import React from 'react';
import { createStackNavigator } from '../node_modules/react-navigation-stack/lib/module';
import { IonicFontIcon } from '../Components/Icon/FontIcon';
import { AboutScreen } from '../Screens/Infopages/AboutScreen';
import { TermsScreen } from '../Screens/Infopages/TermsScreen';
import { FaqScreen } from '../Screens/Infopages/FaqScreen';

const InfoPageStack = createStackNavigator(
  {
    AboutPage: { screen: AboutScreen },
    TermsPage: { screen: TermsScreen },
    FaqPage: { screen: FaqScreen },
    DeviceInfoScreen: { screen: FaqScreen },
    PluginExamplesScreen: { screen: FaqScreen },
    ThemeScreen: { screen: FaqScreen },
    FaqScreen: { screen: FaqScreen },
  },
  {
    cardStyle: {
      opacity: 1,
      backgroundColor: '#3e243f',
    },
    initialRouteName: 'AboutScreen',
    headerMode: 'none',
    navigationOptions: {
      header: {
        left: (
          <IonicFontIcon
            onPress={() => {
              console.log('test');
            }}
            style={{ marginHorizontal: 10 }}
            name={'close-circle-outline'}
          />
        ),
      },
      style: { backgroundColor: '#3e243f' },
    },
  }
);

export { InfoPageStack };
