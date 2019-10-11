import React, { Component } from 'react';
import { View, Slider, Text } from 'react-native';
import AudioPlayer from './AudioPlayer';

const AUDIO_CLIP_URL = '';

export default class AudioPlayerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundFileInfo: 'sound file information will appear here',
      viewToShow: 'HOME',
      loading: true,
    };
  }

  playerComplete = () => {
    this.setState({
      viewToShow: 'HOME',
    });
  };
  showPlayer = () => {
    this.setState({ viewToShow: 'player' });
  };

  render() {
    return (
      <View style={styles.audioplayer_screen}>
        <Text>Sound Player</Text>
        <AudioPlayer
          style={{ flex: 1 }}
          onComplete={this.playerComplete.bind(this)}
          completeButtonText={'Return Home'}
          uri={AUDIO_CLIP_URL}
          showDebug={true}
          showBackButton={true}
          playbackSlider={(renderProps) => {
            console.log({ 'maximumValue: ': renderProps.maximumValue });
            return (
              <Slider
                minimimValue={0}
                maximumValue={renderProps.maximumValue}
                onValueChange={renderProps.onSliderValueChange}
                value={renderProps.value}
                style={{
                  width: '100%',
                }}
              />
            );
          }}
        />
      </View>
    );
  }
}

const styles = {
  audioplayer_screen: {
    display: 'flex',
    flex: 1,
  },
};
