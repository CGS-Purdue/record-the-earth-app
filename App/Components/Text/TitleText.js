import React from 'react';
import { Text } from 'react-native';
import { ThemeFonts } from '../../Theme';
import PropTypes from 'prop-types';

export default function TitleText(props) {
  return (
    <Text {...this.props} style={[this.props.style, { fontFamily: ThemeFonts.Config.TITLE_FONT }]} />
  );
}

TitleText.propTypes = {
  error: PropTypes.string,
};

TitleText.defaultProps = {
  error: null,
};


export { TitleText }
