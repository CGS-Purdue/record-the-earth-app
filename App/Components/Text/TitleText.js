import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function TitleText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}

TitleText.propTypes = {
  error: PropTypes.string,
};

TitleText.defaultProps = {
  error: null,
};


export { TitleText }
