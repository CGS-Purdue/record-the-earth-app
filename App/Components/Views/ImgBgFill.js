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


// style.resizeMode = contain, cover, stretch, center, repeat

// backgroundColor: color
// tintColor: color
// Changes the color of all the non-transparent pixels to the tintColor

// ## Props
// source: The currently supported formats are png, jpg, jpeg, bmp, gif, webp (Android only), psd (iOS only).
//
// blurRadius: the blur radius of the blur filter added to the image
// onLoad
// Invoked when load completes successfully.
// onLoadEnd
// Invoked when load either succeeds or fails.
// onLoadStart
// Invoked on load start.
// defaultSource
// A static image to display while loading the image source.
// resolveAssetSource()
// Image.resolveAssetSource(source);
//
// getSize()
// Image.getSize(uri, success, [failure]);
// getSizeWithHeaders()
// Image.getSizeWithHeaders(uri, headers, success, [failure])

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

export { ImgBgFill }
