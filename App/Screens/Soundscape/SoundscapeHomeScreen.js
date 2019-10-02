import React, { Component } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { Section, CenterView, PadView, RootView } from '../../Components/Views';
import { RippleButton } from '../../Components/Button/RippleButton';
import { FadeOutView } from '../../Components/Transition/FadeInOutView';
import { SoundscapeSchema } from '../../Components/Database/SurveyModel/SurveySchema3';
import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;
const AppBgImg = Theme.Variables.APP_CONTAINER_BGIMG;
const _fonts = Theme.Fonts;
const _title_font_key = _fonts.FontConfig.TITLE_FONT;

const _title_font = _fonts.getFont('TITLE_FONT');

function getpreloadFontByType ( ){
  if (_fonts.FontConfig.TITLE_FONT) {
    return _fonts.FontConfig.TITLE_FONT;
  } else {
    return loadFontMap(_fonts.FontType.TITLE_FONT);
  }
}

class SoundscapeHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.soundscape_data = null;
    this.state = {
      showing: true,
    };

    this.navigateForward = this.navigateForward.bind(this);
  }

  componentDidMount() {
    this.initSoundscape();
  }

  initSoundscape() {
    this.soundscape_data = Object.assign({}, SoundscapeSchema);
  }

  getSoundscape() {
    return this.state.soundscape_data;
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }

  setInitalData() {
    let timestamp = new Date();
    this.soundscape_data.datetime = timestamp.toISOString();
    this.setState({
      soundscape_data: this.soundscape_data,
    });
  }

  navigateForward() {
    this.setState({ showing: false });
    let data = this.getSoundscape();
    this.props.navigation.navigate({
      key: 'Soundscape',
      routeName: 'SoundscapeRecord',
      params: {
        soundscape_data: data,
      },
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={_styles.soundscape_rootview}>
        <View style={_styles.soundscape_inner_wrap}>
          <Image style={_styles.soundscape_bgimg} source={AppBgImg} />
          <CenterView>
            <Section weight={4} expand={true}>
              <FadeOutView>
                <View>
                  <Image
                    source={_assets.logos.logo_large}
                    style={_styles.logo_main}
                  />
                </View>
              </FadeOutView>
            </Section>
            <Section weight={5} align={'center'}>
              <PadView padding={[5, 3]} styles={{ backgroundColor: 'red' }}>
                <RippleButton
                  image={_assets.buttons.btn_record_start}
                  style={_styles.btn_rec_start}
                  onPress={this.navigateForward}
                />
              </PadView>
            </Section>
          </CenterView>
        </View>
      </View>
    );
  }
}

export { SoundscapeHomeScreen };
