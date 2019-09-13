import React, { Component } from 'react';
import { Text } from 'react-native';
import { Theme } from '../../Theme'

const _styles = Theme.Styles;
const _fonts = Theme.Fonts;

class MonoText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appIsReady: false,
    };
  }

  // TODO: FUTURE WORK
  // REF https://github.com/expo/new-project-template/blob/d6a440b01801fbeb323265e39a155d969ab6827f/App.js
  componentDidMount () {
    this._loadAssetsAsync();

  }

  async _loadAssetsAsync() {
      try {
        // await cacheAssetsAsync({fonts: [_fonts.FontType.MONO_FONT]});
      } catch (e) {
        console.warn(
          'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
        );
        console.log(e.message);
      } finally {
        this.setState({ appIsReady: true });
      }
    }

  render() {
    return (
      <Text {...this.props} style={[this.props.style, _styles.font.font_mono]} />
    );
  }
}


export { MonoText }
