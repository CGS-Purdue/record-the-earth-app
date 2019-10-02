import { BlackFade } from '../../Components/Effects/LinearGradient';
import { Button, View, ImageBackground } from 'react-native';
import { CenterView, Section, PadView, RootView } from '../../Components/Views';
import { CheckButton } from '../../Components/Button/CheckButton';
import { filterFalse } from '../../Utilities/Functions';
import { HeadingText } from '../../Components/Text/HeadingText';
import { Theme } from '../../Theme';
import React, { Component } from 'react';

const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles = Theme.Styles;

class SoundscapeSurveyHumScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyData: 'none',
      talking: false,
      vehicles: false,
      alarms: false,
      machines: false,
    };

    this.soundscape_data = null;
    this.surveyPosition = 5;
    this.surveyKey = 'anthro';
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
      talking: this.state.talking,
      vehicles: this.state.vehicles,
      alarms: this.state.alarms,
      machines: this.state.machines,
    })
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
    let soundscapeUpdate =  { [surveyData.key]: surveyData.data }
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
      routeName: 'SoundscapeSubmit',
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
        source={_assets.images.img_bg_cuddling}
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
                  id={'talking'}
                  onchecked={this._setSuveryItemState}
                  text={'Talking'}
                />
                <CheckButton
                  id={'vehicles'}
                  onchecked={this._setSuveryItemState}
                  text={'Vehicles'}
                />
                <CheckButton
                  id={'alarms'}
                  onchecked={this._setSuveryItemState}
                  text={'Sirens or Alarms'}
                />
                <CheckButton
                  id={'machines'}
                  onchecked={this._setSuveryItemState}
                  text={'Machines'}
                />
                <View
                  style={{
                    height: 10,
                    backgroundColor: _colors.TRANSPARENT,
                  }}
                />
                <Button
                  title={'Continue Button'}
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

export { SoundscapeSurveyHumScreen };
