import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import Recorder from '../../Components/Recorder';
import { CenterView } from '../../Views/CenterView';
import { RootView } from '../../Views/RootView';
import { DebugStyles } from '../../Theme/Stylesheet';
import { ThemeColors } from '../../Theme';

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
