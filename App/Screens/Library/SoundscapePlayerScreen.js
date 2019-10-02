import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { CenterView, RootView } from '../../Components/Views';
// import { AudioRecordWithPermission } from '../../Components/AudioRecorder/AudioRecordWithPermission';
import { ErrorBoundary } from '../../Utilities/ErrorBoundary';
import { AltPlayer } from '../../Components/AudioPlayer/AltPlayer';
import { Theme } from '../../Theme';
const _assets = Theme.Assets;
const _styles = Theme.Styles;

class SoundscapePlayerScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  _onRecordingFinished() {
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <ImageBackground
        style={_styles.bgImg}
        source={_assets.images.img_background}
      >
        <RootView>
          <CenterView>
            <ErrorBoundary>
              <AltPlayer />
            </ErrorBoundary>
          </CenterView>
        </RootView>
      </ImageBackground>
    );
  }
}

export { SoundscapePlayerScreen };
