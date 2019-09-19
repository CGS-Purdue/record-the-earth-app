import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { Theme } from  '../../Theme';


const _styles = Theme.Styles;


function CenterRowView({ children }) {
  return <View style={_styles.centered_row}>{children}</View>;
}

function CenterColView({ children }) {
  return <View style={_styles.centered_col}>{children}</View>;
}

function CenterView(props) {
  const { children, style} = props;
  const innerStyle = Object.assign(_styles.centered_col, style);
  return (
    <View style={_styles.centered_row}>
      <View style={innerStyle}>{children}</View>
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
