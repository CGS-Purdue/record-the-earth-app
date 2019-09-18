import React, { Component } from 'react';
import { View } from 'react-native';
import { Theme } from '../../Theme';

//
const _styles = Theme.Styles;

const SectionStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
};

class Section extends Component {
  constructor(props) {
    super(props);
    // this.sectionStyle = this.getStyle();
    this.style = Object.assign(SectionStyle, _styles.section, this.props.style);

    let flexWt = this.props.weight;
    this.style.flex = flexWt;
    this.style.justifyContent = this.props.justify;
    this.style.alignItems = this.props.align;
    this.style.flexGrow = this.props.expand  ? (1 * flexWt) : 0;
    this.style.flexShrink = this.props.collapse ? 1 : 0;
  }

  getStyle() {
    let style = Object.assign(SectionStyle, this.props.style);
    let flexWt = this.props.weight;
    style.flex = flexWt;
    style.justifyContent = this.props.justify;
    style.alignItems = this.props.align;
    style.flexGrow = this.props.expand ? (1 * flexWt) : 0;
    style.flexShrink = this.props.collapse ? 1 : 0;
  }


  render() {
    return (
      <View style={this.style}>
        {this.props.children}
      </View>
    );
  }
}

Section.defaultProps = {
  weight: 1,
  align: 'center',
  justify: 'center',
  expand: true,
  collapse: false,
  maxWidth: '100%',
};


export { Section };
