import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { CenterView, RootView } from '../../Components/Views';
// import { AudioRecordWithPermission } from '../../Components/AudioRecorder/AudioRecordWithPermission';
import { AudioRecord } from '../../Components/AudioRecorder/AudioRecord';
import { Theme } from '../../Theme';
const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;

class RecordScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  _onRecordingFinished () {
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
    <ImageBackground style={_styles.bgImg} source={_assets.images.img_background}>
      <RootView>
        <CenterView>
          <AudioRecord />
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
