import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { Recorder } from '../../Components/Recorder';
import { CenterView, RootView } from '../../Views';
import { ThemeColors, DebugStyles } from '../../Theme';

const ModalRecordScreen = ({ navigaion }: {
  navigation: NavigationScreenProp<NavigationState & any>
}) => (
  <RootView style={[DebugStyles.highlight]}>
    <CenterView style={[{backgroundColor: ThemeColors.GRN_300}, DebugStyles.highlight]}>
      <Recorder />
    </CenterView>
  </RootView>
);

ModalRecordScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export { ModalRecordScreen };
