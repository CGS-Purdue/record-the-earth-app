import React from 'react';
import { Audio } from 'expo-av';
import { StyleSheet, Button, Text, View, } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Recorder from '../../Components/Recorder';
import { CenterView, CenterColView } from '../../Views/CenterView';
import { RootView } from '../../Views/RootView';

import { ThemeFonts }          from '../../Theme/Fonts';
import { debugStyles }         from '../../Theme/Stylesheet';
import { ThemeIcons }          from '../../Theme/Icons';
import { ThemeVariables, ThemeColors, Colors } from '../../Theme';





const ModalRecordScreen= ({
  navigaion
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <RootView style={[debugStyles.highlight]}>
    <CenterView style={[{backgroundColor:Colors.GRN_300},debugStyles.highlight]}>
      <Recorder />
    </CenterView>
  </RootView>
);


ModalRecordScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};



export { ModalRecordScreen }
