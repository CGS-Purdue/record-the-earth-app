import React from 'react';
import { createStackNavigator,  NavigationScreenProp } from 'react-navigation';

import { RecordScreen } from './RecordScreen';
import { ModalRecordScreen } from './ModalRecordScreen';
import { ModalRecordStartScreen } from './ModalRecordStartScreen';
import { ModalRecordEndScreen } from './ModalRecordEndScreen';

const RecordStack = createStackNavigator({
    RecordA: { screen: RecordScreen },
    RecordMain: { screen: ModalRecordScreen },
    RecordStart: { screen: ModalRecordStartScreen },
    RecordEnd: { screen: ModalRecordEndScreen },
  }, {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'RecordMain',
    tabBarVisible: false,

  }
);
RecordStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return {
    tabBarVisible,
  };
};

export { RecordStack }
