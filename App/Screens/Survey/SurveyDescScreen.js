import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PadView, Section, ImgBgFill, CenterView, RootView } from '../../Components/Views';
import { HeadingText } from '../../Components/Text/HeadingText';
import { MultilineTextInput } from '../../Components/Forms/MultilineTextInput';
import { BlackFade, Scrim, MirageGrad } from '../../Components/Effects/LinearGradient';
import { AwesomeButton, AwesomeBlueButton, AwesomeButtonBojack, AwesomeButtonBruce  } from '../../Components/Button/AwesomeButton';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _assets = Theme.Assets;
const _layout = Theme.Layout;

class SurveyDescScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundscape_data: {},
      surveyData: '',
    };
    this.surveyPosition = 1;
    this.surveyKey = 'description';
    this.navigateForward = this.navigateForward.bind(this);
  }

  componentDidMount() {
    this.setIncomingSurveyData();
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }

  setIncomingSurveyData() {
    let params = this.getNavigationParams();
    this.incoming_data = params;
    if (params.soundscape_data) {
      this.soundscape_data = params.soundscape_data;
    }
  }

  updateSurveyData(data){
    this.setState({ surveyData: data });
  }

  getSurveyData = () => {
    let surveyData = this.state.surveyData;
    let surveyKey = this.surveyKey;
    return {
      key: surveyKey,
      data: surveyData,
    };
  };

  updateSoundscapeData = (key, data) => {
    let current = this.soundscape_data;
    let surveyData = this.getSurveyData();
    let update = { [surveyData.key]: surveyData.data };
    let soundscapeData = Object.assign({}, current, update);
    this.setState({ soundscape_data: soundscapeData });
    return soundscapeData;
  };

  navigateForward() {
    let data = this.updateSoundscapeData();
    this.props.navigation.navigate({
      routeName: 'SoundscapeSurveyBio',
      params: { soundscape_data: data },
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImgBgFill source={_assets.images.img_background}>
        <RootView>
          <BlackFade />
          <PadView padding={[2, 3]}>
            <CenterView>
              <Section weight={1} expand={true} shrink={true}>
                <HeadingText style={_styles.survey_desc_title}>
                  {'Describe the sounds you heard'}
                </HeadingText>
              </Section>

              <Section
                weight={3}
                expand={true}
                justify={'flex-start'}
                align={'stretch'}
              >
                <View style={_styles.survey_desc_textinput_container}>
                  <MultilineTextInput
                    label={'Description'}
                    style={_styles.survey_desc_textinput}
                    value={this.state.surveyData}
                    onChangeText={text => this.updateSurveyData(text)}
                    mode={'outlined'}
                    placeholder={'Describe the sound you just recorded'}
                    multiline={true}
                    ExtraContent={<MirageGrad/>}
                    numberOfLines={3}
                  />
                </View>
              </Section>
              <Section justify={'space-around'} align={'stretch'} weight={4}>


                  <AwesomeBlueButton
                    activeOpacity={0.75}
                    backgroundActive="rgba(0,0,0,0)"
                    backgroundColor={_colors.BLU_200}
                    backgroundDarker={_colors.BLU_400}
                    borderRadius={1}
                    borderColor={_colors.GRA_100}
                    ExtraContent={<Scrim/>}
                    raiseLevel={0}
                    size="small"
                    progress={true}
                    progressLoadingTime={360}
                    textSize={12}
                    stretch={true}
                    style={_styles.button_awesome}
                    textColor={_colors.SHADE_LIGHTER_80}
                    type="anchor"
                    width={null}
                   >
                <Text style={{color: _colors.SHADE_LIGHTER_80}}>{'Continue'}</Text>
                  </AwesomeBlueButton>


                  <AwesomeButtonBruce
                    size="small"
                    progress={true}
                    progressLoadingTime={360}
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
                    raiseLevel={1}
                    ExtraContent={<MirageGrad/>}
                    stretch={true}
                   >
                    {'Continue'}
                  </AwesomeButtonBruce>


                  <AwesomeButtonBojack
                    size="small"
                    progress={true}
                    progressLoadingTime={360}
                    textSize={12}
                    type="secondary"
                    backgroundColor={_colors.RED_200}
                    backgroundDarker={_colors.RED_400}
                    borderRadius={1}
                    backgroundActive="rgba(0,0,0,0)"
                    activeOpacity={0.75}
                    width={null}
                    textColor={_colors.SHADE_LIGHTER_80}
                    stretch={true}
                    raiseLevel={1}
                    ExtraContent={<MirageGrad/>}
                    style={_styles.button_awesome}
                   >
                    {'Continue'}
                  </AwesomeButtonBojack>
              </Section>
            </CenterView>
          </PadView>
        </RootView>
      </ImgBgFill>
    );
  }
}

export { SurveyDescScreen };

// <AwesomeButtonRick
//   size="small"
//   type="primaryFlat"
//   backgroundActive="rgba(0,0,0,0)"
//   activeOpacity={0.75}
//   width={null}
//   stretch={true}
//  >
// <Button
//   title={'Continue'}
//   style={_styles.button_awesome}
//   color={_colors.PRIMARY}
//   accessibilityLabel={'Go to next'}
//   onPress={this.navigateForward}
// />
