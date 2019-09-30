import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

import { Theme } from '../../Theme';

const _fonts = Theme.Fonts;

function getpreloadFontByType ( ){
  if (_fonts.FontConfig.TITLE_FONT) {
    return _fonts.FontConfig.TITLE_FONT;
  } else {
    return loadFontMap(_fonts.FontType.TITLE_FONT);
  }
}

const TitleTextFontStyle = {
  fontFamily: _fonts.type.TITLE_FONT,
};


export default function TitleText(props) {
 return (<Text {...this.props} style={[this.props.style, { TitleTextFontStyle }]} />);
}

export { TitleText };
