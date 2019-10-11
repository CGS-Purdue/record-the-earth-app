import React from 'react';
import { Text } from 'react-native';
import { Theme } from '../../Theme';

const _fonts = Theme.Fonts;
const LightFont = _fonts.LIGHT_FONT;
// <Text style={[this.props.style, { fontFamily: LightFont.name }]} {...this.props} />

export default function LightText(props) {
  return (
    <Text {...this.props} />
  );
}

export { LightText };
