import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { Recorder } from '../../Components/Recorder';
import { CenterView, RootView } from '../../Components/Views';
import { Theme,ThemeColors } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;
console.log('HomeScreen', _styles);

const ModalRecordScreen = ({
  navigaion,
}: {
  navigation: NavigationScreenProp<NavigationState & any>,
}) => (
  <RootView style={[_styles.DebugStyles.highlight]}>
    <CenterView style={[{ backgroundColor: ThemeColors.GRN_300 }, _styles.DebugStyles.highlight]}>
      <Recorder />
    </CenterView>
  </RootView>
);

ModalRecordScreen.navigationOptions = {
  header: null,
  tabBarVisible: false,
};

export { ModalRecordScreen };
