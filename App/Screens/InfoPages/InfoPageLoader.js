import React from 'react';
import { HtmlWebView } from '../../Components/WebView/HtmlWebView';
import { InfoPageContent } from './InfoPageContent';
import { Theme } from '../../Theme';

// const _styles = Theme.Styles;
// const _assets = Theme.Assets;
// const _colors = Theme.Colors;
// const _vars = Theme.Variables;
// const styles = _styles.AboutStyles;
const HtmlWebViewStyle = {
  flex: 1,
   marginTop: 20
}

class InfoPageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageKey: 'entry',
      pageContent: this._wrapHtmlContent('<h2>Loading</h2>'),
    }

    this.PageStore = InfoPageContent;
  }

  componentDidMount() {
      console.log('[InfoPageLoader] did mount' );
      console.log('[InfoPageLoader] PageStore', this.PageStore);
      this.setPage(this.state.pageKey);
  }

  _wrapHtmlContent (html) {
    let htmlClose = '</body></html>';
    let mainStyle = 'body{background:rgba(0,0,0,.2);font-family:"open sans",sans-serif;}h2{font-size:24px;color:green;}';
    let head = `<head><style>${mainStyle}</style></head>`;
    let htmlOpen = `<html>${head}<body>`;
    return `${htmlOpen}${html}${htmlClose}`;

  }

  updatePage(_key) {
    if (_key === this.state.pageKey){
      // no change
      return false;
    }
    this.setState({pageKey: _key});
  }

  setPage(key) {
    let _pageKey = this.state.pageKey;
    let html = this.getPageContent(_pageKey);
    let _pageContent = this._wrapHtmlContent(html);
    this.setState({pageContent: _pageContent});
  }

  getPageContent(key) {
    return this.PageStore(key);
  }

  render() {

    return (
      <HtmlWebView
        originWhitelist={['*']}
        content={this.state.pageContent}
        style={HtmlWebViewStyle}
        />
    );
  }
}

export { InfoPageLoader };
