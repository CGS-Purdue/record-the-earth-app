import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

import { Theme } from '../../Theme';

const _fonts = Theme.Fonts;

export default function TitleText(props) {
 return (<Text {...this.props} style={[this.props.style, { fontFamily: _fonts.type.TITLE_FONT }]} />);
}

export { TitleText };
