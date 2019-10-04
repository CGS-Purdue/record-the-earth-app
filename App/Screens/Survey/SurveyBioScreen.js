import { BlackFade } from '../../Components/Effects/LinearGradient';
import { Button, View, ImageBackground } from 'react-native';
import { CenterView, Section, PadView, RootView } from '../../Components/Views';
import { CheckButton } from '../../Components/Button/CheckButton';
import { HeadingText } from '../../Components/Text/HeadingText';
import { filterFalse } from '../../Utilities/Functions';
import { Theme } from '../../Theme';
import React, { Component } from 'react';

const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;

class SurveyBioScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyData: 'none',
      insects: false,
      birds: false,
      mammals: false,
      frogs: false,
    };

    this.soundscape_data = null;
    this.surveyPosition = 2;
    this.surveyKey = 'bio';
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
      insects: this.state.insects,
      birds: this.state.birds,
      mammals: this.state.mammals,
      frogs: this.state.frogs,
    });
    if (!_surveyData){
      _surveyData = 'none';
    }
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
      routeName: 'SoundscapeSurveyEmo',
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
        source={_assets.images.img_bg_frog}
      >
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <BlackFade />
        </View>
        <RootView>
          <PadView padding={[2, 2]}>
            <CenterView>
              <Section weight={1} expand={true} shrink={true}>
                <HeadingText level={3} style={_styles.survey_screen_title}>
                  {'Did you hear any of these sounds?'}
                </HeadingText>
              </Section>

              <Section
                weight={3}
                expand={true}
                justify={'flex-start'}
                align={'stretch'}
              >
                <CheckButton
                  id={'insects'}
                  onchecked={this._setSuveryItemState}
                  text={'Insects'}
                />
                <CheckButton
                  id={'Birds'}
                  onchecked={this._setSuveryItemState}
                  text={'Birds'}
                />
                <CheckButton
                  id={'mammals'}
                  onchecked={this._setSuveryItemState}
                  text={'Mammals'}
                />
                <CheckButton
                  id={'frogs'}
                  onchecked={this._setSuveryItemState}
                  text={'Frogs and Reptiles'}
                />
                <View
                  style={{
                    height: 10,
                    backgroundColor: _colors.TRANSPARENT,
                  }}
                />
                <Button
                  title={'Continue'}
                  style={_styles.button_default}
                  color={_colors.PRIMARY}
                  accessibilityLabel="Go to next"
                  onPress={this.onTaskCompleted}
                />
              </Section>
            </CenterView>
          </PadView>
        </RootView>
      </ImageBackground>
    );
  }
}


export { SurveyBioScreen };
