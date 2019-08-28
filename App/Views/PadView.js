import React, { Component } from 'react';
import { View } from 'react-native';
import { Layout, Styles } from '../Theme';

export default class PadView extends Component {
  constructor(props) {
    super(props);
  }

  getPaddingStyle(pad) {
    // `SPACING_UNIT_1` = (1 * FONT_SIZE) / 3
    // IS A FRACTION VALUE RELATIVE TO THE THEME
    // TEXT SIZE, THIS SHOULD PROVUDE MORE UNIFORM
    //  SCALING THROUGHOUT THE APP
    switch (pad.length) {
      case 1:
        return {
          paddingTop: pad[0] * Layout.SPACING_UNIT_1,
          paddingRight: pad[0] * Layout.SPACING_UNIT_1,
          paddingBottom: pad[0] * Layout.SPACING_UNIT_1,
          paddingLeft: pad[0] * Layout.SPACING_UNIT_1
        };
      case 2:
        return {
          paddingTop: pad[0] * Layout.SPACING_UNIT_1,
          paddingRight: pad[1] * Layout.SPACING_UNIT_1,
          paddingBottom: pad[0] * Layout.SPACING_UNIT_1,
          paddingLeft: pad[1] * Layout.SPACING_UNIT_1
        };
      case 4:
        return {
          paddingTop: pad[0] * Layout.SPACING_UNIT_1,
          paddingRight: pad[1] * Layout.SPACING_UNIT_1,
          paddingBottom: pad[2] * Layout.SPACING_UNIT_1,
          paddingLeft: pad[3] * Layout.SPACING_UNIT_1
        };
      default:
        return {
          paddingTop: pad[0] * Layout.SPACING_UNIT_1,
          paddingRight: pad[0] * Layout.SPACING_UNIT_1,
          paddingBottom: pad[0] * Layout.SPACING_UNIT_1,
          paddingLeft: pad[0] * Layout.SPACING_UNIT_1
        };
    }
  }

  setPadding() {
    let pad = this.props.padding;

    if (!pad) {
      pad = [0];
    }

    if (typeof pad === 'function') {
      // DISALLOW FUNCTIONS
      return this.getPaddingStyle([1]);
    }

    if (typeof pad === 'number') {
      // SCALE BY PAD
      return this.getPaddingStyle([pad]);
    }

    if (typeof pad === 'string') {
      // PARSE FROM STRING
      return this.getPaddingStyle(pad.trim().split(/[\s,]/g));
    }

    if (typeof pad === 'object') {
      // SEND ARRAY/OBJECT AS IS
      return this.getPaddingStyle(pad);
    }
  };

  render() {
    const padding = this.setPadding();
    return <View style={[padding, Styles.padView]}>{this.props.children}</View>;
  }
}

export { PadView };
