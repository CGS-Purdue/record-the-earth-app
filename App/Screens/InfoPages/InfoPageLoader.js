import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { HtmlWebView } from '../../Components/WebView/HtmlWebView';
import { AwesomeButtonBruce  } from '../../Components/Button/AwesomeButton';
import { Scrim, MirageGrad } from '../../Components/Effects/LinearGradient';
import { PadView, Section, RootView } from '../../Components/Views';
import { InfoPageContent } from './InfoPageContent';
import InfoPageStyles from './content/stylesheet';
import { Theme } from '../../Theme';
import PropTypes from 'prop-types'

const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;
const styles = _styles.PresentationnStyles

class ButtonBox extends React.Component {
  constructor(props) {
    super(props);
    this._onAction = this._onAction.bind(this);
  }

  static propTypes = {
    action: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    text: PropTypes.string
  }

  _onAction(){
    // console.log('button press', this);
    this.props.action();
  }

  render () {
    return (
      <TouchableOpacity style={[_styles.buttonbox_container, this.props.style]} onPress={this._onAction}>
        <Image resizeMode='contain' source={this.props.image} style={_styles.buttonbox_image}/>
        <Text style={_styles.buttonbox_label}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const Images = {
  terms: require('../../Assets/infopages/icon-terms.png'),
  about: require('../../Assets/infopages/faq-icon.png.png'),
  list: require('../../Assets/infopages/icon-list.png'),
  category: require('../../Assets/infopages/icon-qrcode.png'),
};

const HtmlWebViewStyle = {
  flex: 1,
  marginTop: 10,
  marginBottom: 3,
  backgroundColor: 'rgba(0,0,0,0)',
  paddingHorizontal: 10,
  paddingTop: 5,
  paddingBottom: 3,
};

class InfoPageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageKey: 'earthSounds',
      pageContent: this._wrapHtmlContent('<h2>Loading</h2>'),
      modalActive: false,
    }
    this._pageStyles = InfoPageStyles;
    this._isMounted = false;
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.loadPage = this.loadPage.bind(this);
    this.PageStore = InfoPageContent;
  }

  componentDidMount() {
    this._isMounted = true;
    console.log('[InfoPageLoader] did mount' );
  }

  _wrapHtmlContent (html) {
    let htmlClose = '</body></html>';
    let head = `<head>${this._pageStyles}</head>`;
    let htmlOpen = `<html>${head}<body>`;
    return `${htmlOpen}${html}${htmlClose}`;

  }

  setPage(key) {
    if (key === this.state.pageKey) {
      console.log('rejected', key );
      return false;
    }
    if (this._isMounted){
      let prevKey = this.state.pageKey;
      this._prevKey = prevKey;
      let html = this.getPageContent(key);
      let _pageContent = this._wrapHtmlContent(html);
      this.setState({pageContent: _pageContent});
    }
  }


  loadPage(key) {
    console.log('loadPage', key );
    if (key === this.state.pageKey) {
      return false;
    }
    this.setPage(key);
    this.openModal();
  }

  getPageContent(key) {
    return this.PageStore(key);
  }

  openModal(){
    console.log('open modal');
    if (!this.state.modalActive){
      this.setState({ modalActive: true });
    }
  }

  closeModal(){
    console.log('close modal');
    if (this.state.modalActive){
      this.setState({ modalActive: false });
    }
  }

  render() {
    if (this.state.modalActive) {
      return (
      <RootView>
        <PadView padding={[0, 1]}>
          <Section weight={9} expand={true} shrink={false} align={'stretch'}>
            <HtmlWebView
              originWhitelist={['*']}
              content={this.state.pageContent}
              style={HtmlWebViewStyle}
            />
          <View style={{position: 'absolute', height: 60, width: '100%', bottom: 0}}>
            <Scrim/>
          </View>
          </Section>
          <Section shrink={true} align={'stretch'} weight={1} style={{padding: 0, marginTop: 5, marginBottom: 10}}>
            <AwesomeButtonBruce
              size="small"
              textSize={12}
              type="primary"
              borderRadius={1}
              backgroundColor={'springgreen'}
              backgroundDarker={'teal'}
              backgroundActive="rgba(0,0,0,0)"
              activeOpacity={0.75}
              width={null}
              textColor={_colors.SHADE_LIGHTER_80}
              style={_styles.button_awesome}
              raiseLevel={2}
              ExtraContent={<MirageGrad/>}
              onPress={this.closeModal}
              stretch={true}>
              {'Close'}
            </AwesomeButtonBruce>
          </Section>
        </PadView>
      </RootView>
      );
    } else {
      return (
      <View style={styles.mainContainer}>
        <Image source={_assets.img_bg_solid_dark} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.scrollContainer}
          >
          <View style={styles.centered}>
            <Image source={_assets.logos.logo_long} style={[ styles.logo, { padding: 0 }]} />
          </View>
          <Text style={styles.sectionText}>{'Join the mission to Record the Earth. Help scientists map all the sounds of the Earth.'}</Text>
          <View style={styles.buttonsContainer}>
            <ButtonBox text='About' action={()=>this.loadPage('about')} style={styles.buttonTopLeft} image={Images.about} />
            <ButtonBox text='Terms' action={()=>this.loadPage('terms')} style={styles.buttonTopRight} image={Images.terms} />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox text='Results' action={()=>this.loadPage('results')} style={styles.buttonBottomLeft} image={Images.list} />
            <ButtonBox text='Categories' action={()=>this.loadPage('categories')} style={styles.buttonBottomRight} image={Images.category} />
          </View>
          <Text style={styles.sectionText}>{'Center for Global Soundscapes.'}</Text>
        </ScrollView>
      </View>
      );
    }
  }
}

export { InfoPageLoader };
