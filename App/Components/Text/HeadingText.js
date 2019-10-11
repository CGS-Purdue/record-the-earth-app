import React, { Component } from 'react';
import { Text } from 'react-native';

import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _fonts = Theme.Fonts;
const HeadingFont = _fonts.HEADING_FONT;

class HeadingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      fontFamily: 'System',
    };
  }
  getHeadingStyle = () => {
    const HeadStyles = [
      _styles.H1,
      _styles.H2,
      _styles.H3,
      _styles.H4,
      _styles.H5,
    ];
    let level = this.props.level + 1;
    return HeadStyles[level];
  };

  componentDidMount() {
    this._loadFontAsync(HeadingFont);
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
    return (
      <Text
        {...this.props}
        style={[
          this.props.style,
          { fontFamily: this.state.fontFamily },
          this.getHeadingStyle(),
        ]}
      />
    );
  }
}

HeadingText.defaultProps = {
  level: 3,
};

export { HeadingText };
