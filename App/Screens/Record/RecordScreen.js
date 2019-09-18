import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { AudioRecorderPermission } from '../../Components/Audio/AudioRecordWithPermission';
import { CenterView, RootView } from '../../Components/Views';
import { Theme } from '../../Theme';
const _assets = Theme.Assets;
const _styles = Theme.Styles;

class RecordScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('LOADED');
  }

  render() {
    return (
    <ImageBackground style={_styles.bgImg} source={_assets.images.img_background}>
      <RootView>
        <CenterView>
          <AudioRecorderPermission />
        </CenterView>
      </RootView>
    </ImageBackground>
    );
  }
}

RecordScreen.navigationOptions = {
  header: null,
  mode: 'modal',
  headerMode: 'none',
  tabBarVisible: false,
  title: 'recorder',
};

export { RecordScreen };
