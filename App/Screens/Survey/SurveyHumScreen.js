import React, { Component } from 'react';
import { Button, View, ImageBackground } from 'react-native';
import { CheckButton } from '../../Components/Button/CheckButton';
import { HeadingText } from '../../Components/Text/HeadingText';
import { CenterView, Section, PadView, RootView } from '../../Components/Views';
import { BlackFade } from '../../Components/Effects/LinearGradient';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles = Theme.Styles;

class SurveyHumScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundscape_data: this.props.navigation.state.params.soundscape_data,
      talking: false,
      vehicles: false,
      alarms: false,
      machines: false,
    };

    this.surveyPosition = 5;
    this.surveyKey = 'anthro';

    this.ref = React.createRef();
  }

  updateSoundscapeData = (key, data) => {
    let soundscapeData = this.state.soundscape_data;
    let { survey, ...rest } = soundscapeData;
    this.soundscape_data = Object.assign({}, this.soundscape_data, {
      [key]: data,
    });
    // soundscapeData.survey = Object.assign(Object.create(null), survey,);

    this.setState({ soundscape_data: soundscapeData });
    return soundscapeData;
  };

  getSurveyData = () => {
    let surveyData = {
      talking: this.state.talking,
      vehicles: this.state.vehicles,
      alarms: this.state.alarms,
      machines: this.state.machines,
    };
    let surveyKey = this.surveyKey;
    return {
      key: surveyKey,
      data: surveyData,
    };
  };

  getSurveyState = () => {
    let empty = Object.create(null);
    let surveyHum = {};
    let _surveydata = this.state._survey;
    _surveydata.tags = Object.assign(empty, this.state._survey.tags, {
      hum: surveyHum,
    });
    return _surveydata;
  };

  _setSuveryItemState = (item) => {
    let newState = Object.create(null);
    newState[item.id] = item.checked;
    this.setState(newState);
  };

  _setPreviousSurveyData = (data) => {
    this.setState({ _survey: data });
  };

  render() {
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
          <PadView padding={[1, 2]}>
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
                  onPress={() => {
                    let _currSurvey = this.getSurveyData();
                    let _updatedSoundscape = this.updateSoundscapeData(
                      _currSurvey.key,
                      _currSurvey.data
                    );
                    console.log('_updatedSoundscape', _updatedSoundscape);
                    this.props.navigation.navigate('SurveyEnd', {
                      soundscape_data: _updatedSoundscape,
                    });
                  }}
                />
              </Section>
            </CenterView>
          </PadView>
        </RootView>
      </ImageBackground>
    );
  }
}

SurveyHumScreen.navigationOptions = {
  title: 'SurveyHumScreen',
};

export { SurveyHumScreen };
