import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Recorder } from '../components/Recorder';

export default function RecordScreen() {
  return (
    <View>
      <Recorder />
     </View>
  );
}
RecordScreen.navigationOptions = {
  header: null,
  tabBarVisible: false,
  title: 'recorder',
};
