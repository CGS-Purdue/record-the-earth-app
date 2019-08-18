import React from 'react';
import { createStackNavigator,  NavigationScreenProp } from 'react-navigation';

import { RecordScreen } from '../screens/RecordScreen';
import { ModalRecordScreen } from '../screens/ModalRecordScreen';
import { ModalRecordStartScreen } from '../screens/ModalRecordStartScreen';
import { ModalRecordEndScreen } from '../screens/ModalRecordEndScreen';

const ModalRecordStack = createStackNavigator({
    RecordA: { screen: RecordScreen },
    RecordMain: { screen: ModalRecordScreen },
    RecordStart: { screen: ModalRecordStartScreen },
    RecordEnd: { screen: ModalRecordEndScreen },
  }, {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'RecordA',
    tabBarVisible: false,

  }
);
ModalRecordStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return {
    tabBarVisible,
  };
};

export { ModalRecordStack }
