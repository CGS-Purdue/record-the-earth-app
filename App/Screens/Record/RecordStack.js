import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ModalRecordEndScreen } from './ModalRecordEndScreen';
import { ModalRecordScreen } from './ModalRecordScreen';
import { RecordScreen } from './RecordScreen';

const RecordStack = createStackNavigator({
    Record: { screen: RecordScreen },
    RecordMain: { screen: ModalRecordScreen },
    RecordEnd: { screen: ModalRecordEndScreen },
  }, {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Record',
    tabBarVisible: false,

  }
);
RecordStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  return {
    tabBarVisible,
  };
};

export { RecordStack };
