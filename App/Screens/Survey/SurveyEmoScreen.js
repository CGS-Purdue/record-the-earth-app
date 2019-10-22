import { AwesomeButton } from '../../Components/Button/AwesomeButton';
import { BlackFade, Scrim } from '../../Components/Effects/LinearGradient';
import { CenterView, Section, PadView, RootView } from '../../Components/Views';
import { CheckButton } from '../../Components/Button/CheckButton';
import { filterFalse } from '../../Utilities/Functions';
import { HeadingText } from '../../Components/Text/HeadingText';
import { Theme } from '../../Theme';
import { View, ImageBackground } from 'react-native';
import React, { Component } from 'react';

const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles = Theme.Styles;

class SurveyEmoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyData: 'none',
      happy: true,
      relax: false,
      stress: false,
      curious: true,
    };

    this.soundscape_data = null;
    this.surveyPosition = 3;
    this.surveyKey = 'emotion';
    this.ref = React.createRef();
    this.onTaskCompleted = this.onTaskCompleted.bind(this);
  }

  componentDidMount() {
    if (__DEV__){
      console.log(`[SurveyScreen] ${this.surveyKey} did mount`);
    }
    this.getIncomingSurveyData();
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }

  getIncomingSurveyData() {
    let params = this.getNavigationParams();
    this.incoming_data = params;
    if (params.soundscape_data) {
      this.soundscape_data = params.soundscape_data;
    }
  }

  _setSuveryItemState = (item) => {
    let newState = Object.create(null);
    newState[item.id] = item.checked;
    this.setState(newState);
    this.updateSurveyData();
  }

  updateSurveyData = () => {
    let _surveyData = filterFalse({
      happy: this.state.happy,
      relax: this.state.relax,
      stress: this.state.stress,
      curious: this.state.curious,
    });
    if (!_surveyData){ _surveyData = 'none'; }
    this.setState({ surveyData: _surveyData });
  }

  getSurveyData = () => {
    let surveyData = this.state.surveyData;
    let surveyKey = this.surveyKey;
    return {
      key: surveyKey,
      data: surveyData,
    };
  }

  updateSoundscapeData = (key, data) => {
    let soundscapeData = this.soundscape_data;
    let surveyData = this.getSurveyData();
    let soundscapeUpdate =  { [surveyData.key]: surveyData.data };
    soundscapeData = Object.assign(Object.create(null), soundscapeData, soundscapeUpdate);
    this.soundscape_data = soundscapeData;
    return soundscapeData;
  }

  onTaskCompleted(){
    this.updateSurveyData();
    let data = this.updateSoundscapeData();
    this.navigateForward(data);
  }

  navigateForward(data) {
    this.props.navigation.navigate({
      routeName: 'SoundscapeSurveyGeo',
      params: {
        soundscape_data: data,
      },
    });
  }


  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        style={_styles.bgImg}
        source={_assets.images.img_bg_lilyflower}
      >
        <View style={{ flex: 1, position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', }} >
          <BlackFade />
        </View>
        <RootView>
          <PadView padding={[2, 2]}>
            <CenterView>
              <Section weight={1} expand={true} shrink={true}>
                <HeadingText level={3} style={_styles.survey_desc_title}>
                  {'Describe the sounds you heard'}
                </HeadingText>
              </Section>

              <Section
                weight={3}
                expand={true}
                justify={'flex-start'}
                align={'stretch'}
              >
                <CheckButton
                  id={'happy'}
                  onchecked={this._setSuveryItemState}
                  text={'Make me happy'}
                />
                <CheckButton
                  id={'relax'}
                  onchecked={this._setSuveryItemState}
                  text={'Relax me'}
                />
                <CheckButton
                  id={'curious'}
                  onchecked={this._setSuveryItemState}
                  text={'Make me curious'}
                />
                <CheckButton
                  id={'stress'}
                  onchecked={this._setSuveryItemState}
                  text={'Stress me out'}
                />
                <View style={{ height: 10, backgroundColor: _colors.TRANSPARENT }} />

                <AwesomeButton
                  activeOpacity={0.75}
                  backgroundActive="rgba(0,0,0,0)"
                  backgroundColor={_colors.BLU_200}
                  backgroundDarker={_colors.PRIMARY}
                  borderBottomColor={_colors.GRA_500}
                  borderRadius={1}
                  ExtraContent={<Scrim/>}
                  height={45}
                  raiseLevel={1}
                  size="small"
                  textSize={12}
                  stretch={true}
                  onPress={this.onTaskCompleted}
                  style={_styles.button_awesome}
                  textColor={_colors.SHADE_LIGHTER_80}
                  type="primary"
                  width={null}
                  >
                  {'Continue'}
                </AwesomeButton>
              </Section>
            </CenterView>
          </PadView>
        </RootView>
      </ImageBackground>
    );
  }
}

export { SurveyEmoScreen };
