import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { Theme } from '../../Theme';
// Screens
const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _vars = Theme.Variables;

export default class ButtonBox extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    text: PropTypes.string
  }

  render () {
    return (
      <TouchableOpacity style={[_styles.buttonbox_container, this.props.style]} onPress={this.props.onPress}>
        <Image resizeMode='contain' source={this.props.image} style={_styles.buttonbox_image}/>
        <Text style={_styles.buttonbox_label}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}


// leave off @2x/@3x
const Images = {
  usageExamples: require('./Dev/icon-usage-examples.png'),
  igniteClear: require('./Dev/ignite-logo-transparent.png'),
  faq: require('./Dev/faq-icon.png'),
  closeButton: require('./Dev/close-button.png'),
  api: require('./Dev/icon-api-testing.png'),
  background: require('./Dev/BG.png'),
  theme: require('./Dev/icon-theme.png'),
  components: require('./Dev/icon-components.png'),
  deviceInfo: require('./Dev/icon-device-information.png'),
};



let styles = _styles.PresentationnStyles

class AboutScreen extends React.Component {
  openStart = () => {
    this.props.navigation.navigate('AboutPage')
  }

  openFaq = () => {
    this.props.navigation.navigate('FaqPage')
  }

  openTerms = () => {
    this.props.navigation.navigate('TermsPage')
  }

  openTheme = () => {
    this.props.navigation.navigate('FaqScreen')
  }

  openDevice = () => {
    this.props.navigation.navigate('FaqScreen')
  }


  handleClose(e){
    console.log('test', e);
     console.log(this.props);
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={_assets.img_bg_solid_dark} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={this.handleClose} style={{ position: 'absolute', paddingTop: 30, paddingHorizontal: 10, zIndex: 10 }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.centered}>
            <Image source={_assets.logos.logo_large} style={styles.logo} />
          </View>
          <Text style={styles.sectionText}>Default screens for development, debugging, and alpha testing are available below.</Text>
          <View style={styles.buttonsContainer}>
            <ButtonBox
              text='Terms'
              onPress={this.openTerms}
              image={Images.components}
              style={styles.componentButton}
            />
            <ButtonBox
              text='FAQ'
              onPress={this.openUsage}
              style={styles.usageButton}
              image={Images.faq}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openApi} style={styles.apiButton} image={Images.api} text='API Testing' />
            <ButtonBox onPress={this.openTheme} image={Images.theme} text='Theme' />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openDevice} style={styles.deviceButton} image={Images.deviceInfo} text='Device Info' />
            <ButtonBox onPress={this.openFaq} style={styles.usageButton} image={Images.faq} text='FAQ' />
          </View>
        </ScrollView>
      </View>
    )
  }
}

export  { AboutScreen, ButtonBox }
