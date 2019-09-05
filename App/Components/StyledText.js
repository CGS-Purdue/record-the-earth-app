import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';


export default function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}

MonoText.propTypes = {
  error: PropTypes.string,
};

MonoText.defaultProps = {
  error: null,
};
