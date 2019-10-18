import React, { Component } from 'react';
import { Text } from 'react-native';
// import * as Font from 'expo-font';

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
    this._loadFontAsync = this._loadFontAsync.bind(this);
    this.fontFamily = HeadingFont.name;
    this._isMounted = false;
    this._isLoaded = false;
  }

  async componentDidMount() {
    this._isMounted = true;
    await this._loadFontAsync(HeadingFont);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _setFontLoaded(){
    this._isLoaded = true;
    if (this._isMounted) {
      this.setState({ fontLoaded: true });
    }
  }

  _setFontFamily(name){
    this._familyName = name;
    if (this._isMounted) {
      this.setState({ fontFamily: name });
    }
  }

  _loadFontAsync = async (font) => {
    try {
      await _fonts.loadFont(font);
      this._setFontLoaded();
      this._setFontFamily(font.name);
    } catch (e) {
      console.log(e.message);
    }
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

  render() {
    return (
      <Text {...this.props}
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
