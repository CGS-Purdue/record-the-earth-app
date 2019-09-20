import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { CenterView, RootView } from '../../Components/Views';
import { AudioRecordWithPermission } from '../../Components/AudioRecorder/AudioRecordWithPermission';
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

  _onRecordingFinished () {
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
    <ImageBackground style={_styles.bgImg} source={_assets.images.img_background}>
      <RootView>
        <CenterView>
          <AudioRecordWithPermission
            onRecordingFinished={this._onRecordingFinished} />
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
