import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

import { Theme } from '../../Theme';

const _fonts = Theme.Fonts;
console.log(_fonts);
function getpreloadFontByType (type ){
  if (typeof(_fonts.FontConfig[type]) !== 'undefined') {
    return _fonts.FontConfig[type];
  } else {
    let font = loadFontMap(_fonts.FontType[type]);
    return font.name;
  }
}
let titleFont = getpreloadFontByType('TITLE_FONT');

const TitleTextFontStyle = {
  fontFamily: titleFont
}

console.log(TitleTextFontStyle);



export default function TitleText(props) {
 return (<Text style={[this.props.style, { TitleTextFontStyle }]} {...this.props} />);
}

export { TitleText };
