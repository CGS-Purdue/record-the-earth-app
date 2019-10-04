import React, {Component} from 'react';
import { Text } from 'react-native';

import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _fonts = Theme.Fonts;


// import { Font } from 'expo-font';
// async componentWillMount() {
//   await Font.loadAsync({
//     Roboto: require('native-base/Fonts/Roboto.ttf'),
//     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
//   });
//   this.setState({ loading: false });
// }


const fontKey =_fonts.getFontKey('TITLE_FONT');
const TitleFont = _fonts.getFont(fontKey);

// const TITLE_FONT = _fonts.FontMap(_fonts.FontConfig.TITLE_FONT);
// color // fontSize // lineHeight

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
  }
  componentDidMount() {
    this._loadFontAsync();
    // (async () => {
    //   // await Font.loadAsync({});
    //   await this._loadFontAsync();
    //   // this.setState({
    //     // loaded: false,
    //     // fontProps: null,
    //   // });
    // })();
  }
  async _loadFontAsync() {
      try {
        // let headingFont = await _fonts.loadFont({[TitleFont.name ] : TitleFont.src });
        let headingFont = await _fonts.loadFont({[TitleFont.name ] : TitleFont.src });
        console.log('\n\n[fontKey]\n\n', fontKey);
        console.log('\n\n[headingFont]\n\n', TitleFont);
        console.log('\n\n\n');
      } catch (e) {
        console.log(e.message);
      }
      this.setState({
        loaded: true,
        fontFamily: TitleFont.name,
      });
    }

  render() {
    return (
      <Text {...this.props}
        style={[
          this.props.style,
          { fontFamily: this.state.fontFamily },
          this.getHeadingStyle(),
      ]}/>
    );
  }
}




HeadingText.defaultProps = {
  level: 3,
};

export { HeadingText };
