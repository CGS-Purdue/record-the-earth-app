import React, {Component} from 'react';
import { Text } from 'react-native';

import { Theme } from '../../Theme';

const _styles = Theme.Styles;


// color // fontSize // lineHeight

class HeadingText extends Component {
  constructor(props) { super(props); }
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

  render() {
    let head_style = this.getHeadingStyle();
    return (
      <Text {...this.props} style={[this.props.style, _styles.font.font_title, head_style]} />
    );
  }
}



HeadingText.defaultProps = {
  level: 3,
};

export { HeadingText };
