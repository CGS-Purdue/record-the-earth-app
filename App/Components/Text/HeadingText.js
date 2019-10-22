import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';

import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _fonts = Theme.Fonts;

class HeadingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      fontFamily: 'System'
    };

    this._font = _fonts.HEADING_FONT;
    this._loadFontAsync = this._loadFontAsync.bind(this);
    this._isMounted = false;
    this._isLoaded = false;
  }

  async componentDidMount() {
    this._isMounted = true;
    await this._loadFontAsync(_fonts.HEADING_FONT);
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

  async _loadFontAsync(font) {
    try {
      // await _fonts.loadFont(font);
      // let font =_fonts.HEADING_FONT
      let name = font.name;
      let module = font.module;
      let src = await Font.loadAsync({ [name]: module });
      console.log(src);
      this._setFontFamily(font.name);
      this._setFontLoaded();
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          this.state.fontLoaded ? (
            <Text
              style={[this.props.style, { fontFamily: this.state.fontFamily }, this.getHeadingStyle()] }
              {...this.props}/>
          ) : null
        }
      </View>

    );
  }
}

HeadingText.defaultProps = {
  level: 3,
};

export { HeadingText };
