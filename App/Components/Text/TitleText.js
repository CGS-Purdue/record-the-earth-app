import React, { Component } from 'react';
import { Text } from 'react-native';
import { Theme } from '../../Theme';

const _fonts = Theme.Fonts;
const TitleFont = _fonts.TITLE_FONT;

class TitleText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      fontFamily: 'System',
    };
  }

  componentDidMount() {
    this._loadFontAsync(TitleFont);
  }

  async _loadFontAsync(font) {
    try {
      font = await _fonts.loadFont(font);
    } catch (e) {
      console.log(e.message);
    }
    this.setState({
      loaded: true,
      fontFamily: font.name,
    });
  }

  render() {
    return (<Text {...this.props}/>);
  }
}

export { TitleText };
