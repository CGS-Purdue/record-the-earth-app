import React, { Component } from 'react';
import { WebView, View } from 'react-native';

// const _assets = Theme.Assets;
// const _styles = Theme.Styles;
// const _colors = Theme.Colors;
// const _vars = Theme.Variables;
// import { Theme } from '../../Theme';
const WebViewStyles={
  flex: 1,
  margin: 0,
  padding: 0,
  backgroundColor: 'rgba(0,0,0,.0)'
};

class HtmlWebView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <WebView
          originWhitelist={['*']}
          javaScriptEnabled={false}
          geolocationEnabled={false}
          thirdPartyCookiesEnabled={false}
          renderError={(err)=>{console.log(err)}}
          style={[WebViewStyles,this.props.style]}
          source={{ html: this.props.content }}
          />
      );
  }
}

export { HtmlWebView };
