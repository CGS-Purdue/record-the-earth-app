import React from 'react';
import { Text } from 'react-native';
import { Theme } from '../../Theme';

const _fonts = Theme.Fonts;

const fontKey =_fonts.getFontKey('TITLE_FONT');
const TitleFont = _fonts.getFont(fontKey);
const TitleFontStyle = { fontFamily: TitleFont.name, };

export default function TitleText(props) {
 return (<Text style={[this.props.style,  TitleFontStyle ]} {...this.props} />);}

export { TitleText };
