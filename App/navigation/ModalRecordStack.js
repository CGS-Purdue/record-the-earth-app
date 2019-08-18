import React from 'react';
import { createStackNavigator,  NavigationScreenProp } from 'react-navigation';

import { ModalRecordScreen } from '../screens/ModalRecordScreen';
import { ModalRecordStartScreen } from '../screens/ModalRecordStartScreen';
import { ModalRecordEndScreen } from '../screens/ModalRecordEndScreen';

const ModalRecordStack = createStackNavigator({
    Rexord: { screen: ModalRecordScreen },
    RecordStart: { screen: ModalRecordStartScreen },
    RecordEnd: { screen: ModalRecordEndScreen },
  }, {
    headerMode: 'none',
  }
);
ModalRecordStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return {
    tabBarVisible,
  };
};

export { ModalRecordStack }
