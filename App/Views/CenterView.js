import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const style = {
  centered_outer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered_inner: {
    flexBasis: '100%',
    flexGrow: 1,
    flexShrink: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center_row: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center_col: {
    flexBasis: '100%',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function CenterRowView({ children }) {
  return <View style={style.center_row}>{children}</View>;
}

function CenterColView({ children }) {
  return <View style={style.center_col}>{children}</View>;
}

function CenterView({ children }) {
  return (
    <View style={style.centered_outer}>
      <View style={style.centered_inner}>
        {children}
      </View>
    </View>
  )
}


CenterView.defaultProps = {
  children: null,
  direction : 'both',
};

CenterView.propTypes = {
  children: PropTypes.node,
};


export { CenterView, CenterColView, CenterRowView }
