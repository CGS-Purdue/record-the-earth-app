import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Styles } from '../Theme';

function CenterRowView({ children }) {
  return <View style={Styles.center_row}>{children}</View>;
}

function CenterColView({ children }) {
  return <View style={Styles.center_col}>{children}</View>;
}

function CenterView({ children }) {
  return (
    <View style={Styles.centered_outer}>
      <View style={Styles.centered_inner}>{children}</View>
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
