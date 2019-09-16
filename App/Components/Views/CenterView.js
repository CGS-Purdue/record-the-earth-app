import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { Theme } from  '../../Theme';

const _styles = Theme.Styles;
function CenterRowView({ children }) {
  return <View style={_styles.center_row}>{children}</View>;
}

function CenterColView({ children }) {
  return <View style={_styles.center_col}>{children}</View>;
}

function CenterView({ children }) {
  return (
    <View style={_styles.centered_outer}>
      <View style={_styles.centered_inner}>{children}</View>
    </View>
  );
}

CenterView.defaultProps = {
  children: null,
  direction: 'both',
};

CenterView.propTypes = {
  children: PropTypes.node,
};

export { CenterView, CenterColView, CenterRowView };
