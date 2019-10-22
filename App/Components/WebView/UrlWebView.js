import React, { Component } from 'react';
import { WebView } from 'react-native';

// const _assets = Theme.Assets;
// const _styles = Theme.Styles;
// const _colors = Theme.Colors;
// const _vars = Theme.Variables;
// import { Theme } from '../../Theme';

class UrlWebView extends Component {
  render() {
      return (
      <WebView
        source={{ uri: 'https://recordtheearth.org' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}



export { UrlWebView }
