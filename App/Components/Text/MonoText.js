import React, { Component } from 'react';
import { Text } from 'react-native';

import { Theme } from '../../Theme';

const _fonts = Theme.Fonts;
const MonoFont = _fonts.MONO_FONT;

class MonoText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false,
      fontFamily: 'System',
    };
  }

  componentDidMount() {
    this._loadAssetsAsync(MonoFont);
  }

  async _loadAssetsAsync(font) {
    try {
      font = await _fonts.loadFont(font);
    } catch (e) {
      console.log(e.message);
    } finally {
      this.setState({
        loaded: true,
        fontFamily: font.name,
      });
    }
  }

  render() {
    return (<Text {...this.props}/>);
  }
}

export { MonoText };

// style={[this.props.style, { fontFamily: this.state.fontFamily }]}
