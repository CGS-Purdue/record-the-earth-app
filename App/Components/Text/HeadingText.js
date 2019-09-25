import React, {Component} from 'react';
import { Text } from 'react-native';

import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _fonts = Theme.Fonts;

const TITLE_FONT = _fonts.getFont(_fonts.FontType.TITLE_FONT);

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
    (async () => {
      // await Font.loadAsync({});
      await this._loadFontAsync();
      // this.setState({
        // loaded: false,
        // fontProps: null,
      // });
    })();
  }

  async _loadFontAsync() {
      try {
        let headingFont = await _fonts.loadFont({[TITLE_FONT.name ] : TITLE_FONT.src });
      } catch (e) {
        console.log(e.message);
      }
      this.setState({
        loaded: true,
        fontFamily: TITLE_FONT.name,
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
