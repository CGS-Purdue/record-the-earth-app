import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { PadView, Section, ImgBgFill, CenterView, RootView } from '../../Components/Views';
import { HeadingText } from '../../Components/Text/HeadingText';
import { ThemeTextInput } from '../../Components/Forms/TextInput';
import { BlackFade } from '../../Components/Effects/LinearGradient';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _assets = Theme.Assets;


class SurveyDescScreen extends Component {
  constructor(props) {
    super(props);

    const surveyIncoming = this.props.navigation.state.params.soundscape_data;

    this.state = {
      soundscape_data: surveyIncoming,
      surveyData: '',
    };
    this.surveyPosition = 1;
    this.surveyKey = 'description';
    this.navigateForward = this.navigateForward.bind(this);
  }



  componentDidMount() {
    this.getIncomingSurveyData();
  }

  getIncomingSurveyData() {
    let params = this.getNavigationParams();
    this.incoming_data = params;
    if (params.soundscape_data) {
      let soundscape_data = params.soundscape_data;
      return this.soundscape_data;
    }
    return params;
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }

  updateSurveyData(data){
    console.log('update updateSurveyData', this.state);
    this.setState({ surveyData: data });
  }

  getSurveyData = () => {
    let surveyData = this.state.surveyData;
    let surveyKey = this.surveyKey;
    console.log( 'getSurveyData', surveyData);
    return {
      key: surveyKey,
      data: surveyData,
    };
  };

  updateSoundscapeData = (key, data) => {
    let current = this.state.soundscape_data;
    let surveyData = this.getSurveyData();
    let update =  { [surveyData.key]: surveyData.data };
    console.log( 'updateSurveyData getSurveyData', surveyData, update  );
    let soundscapeData = Object.assign({}, current, update);
    console.log( 'updateSurveyData soundscapeData', soundscapeData  );
    this.setState({ soundscape_data: soundscapeData });
    return soundscapeData;
  };

  navigateForward() {
    console.log( 'navigateForward', this  );
    let data = this.updateSoundscapeData();
    this.props.navigation.navigate({
      // key: 'Soundscape',
      routeName: 'SoundscapeSurveyBio',
      params: {
        soundscape_data: data,
      },
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImgBgFill source={_assets.images.img_background}>
        <RootView>
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
                  <ThemeTextInput
                    label={'Description'}
                    style={_styles.survey_desc_textinput}
                    value={this.state.surveyData}
                    onChangeText={text => this.updateSurveyData(text)}
                    mode={'outlined'}
                    placeholder={'Descript the sound you just recorded'}
                    multiline={true}
                    numberOfLines={3}
                  />
                </View>
              </Section>

              <Section
                justify={'flex-start'}
                shrink={true}
                align={'stretch'}
                weight={1}
              >
                <Button
                  title={'Continue'}
                  style={_styles.button_default}
                  color={_colors.PRIMARY}
                  accessibilityLabel={'Go to next'}
                  onPress={this.navigateForward}
                />
              </Section>
            </CenterView>
          </PadView>
        </RootView>
      </ImgBgFill>
    );
  }
}

SurveyDescScreen.DisplayName = 'Survey Submit Screen';

export { SurveyDescScreen };
