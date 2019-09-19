import React, { Component } from 'react';
import { View } from 'react-native';
import { Theme } from '../../Theme';


const _styles = Theme.Styles;

var SectionStyle = Object.assign({
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  _styles.section,
);

class Section extends Component {
  constructor(props) {
    super(props);
    this._is_mounted = false;

    this.setSectionStyle();
  }

  setSectionStyle() {
    let sStyle = Object.create(null);
    let wt = this.props.weight;
    sStyle.flex = wt;
    sStyle.flexGrow = this.props.expand  ? (1 * wt) : 0;
    sStyle.flexShrink = this.props.collapse ? 1 : 0;
    sStyle.justifyContent = this.props.justify;
    sStyle.alignItems = this.props.align;

    this.sectionStyle = Object.assign(
      Object.create(null),
      SectionStyle,
      this.props.style,
      sStyle
    );
  }

  componentDidMount() {
    this._is_mounted = true;
    this.setSectionStyle();
  }

  componentWillMount() {
    this._is_mounted = false;
  }

  getSectionStyle() {
    let pstyle = this.props.style;
    let wt = this.props.weight;
    let style = Object.assign(
      SectionStyle,
      pstyle, {
        flex : wt,
        justifyContent : this.props.justify,
        alignItems : this.props.align,
        flexGrow : this.props.expand ? (1 * wt) : 0,
        flexShrink : this.props.collapse ? 1 : 0,
      }
    )
    return style;
  }

  render() {
    return (
      <View style={this.sectionStyle}>
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
  flex: 1,
};

let defaultstyle = {
  flex: 1,
  flexGrow: 1 ,
  flexShrink: 0,
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
};
export { Section };
