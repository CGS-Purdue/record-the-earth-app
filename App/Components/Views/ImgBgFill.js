import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Theme } from  '../../Theme';


const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _assets = Theme.Assets;



export default class ImgBgFill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ display: 'flex', width: '100%', height: '100%', flex: 1}}>
        <Image style={imgbgfill_style} source={this.props.source}/>
        <View style={{width: '100%', height: '100%', flex: 1}}>
          {this.props.children}
        </View>
      </View>
    );
  }
}


const imgbgwrap_style = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left:0,
  flex: 1,
};

const imgbgfill_style = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left:0,
  flex: 1,
};

export { ImgBgFill };
