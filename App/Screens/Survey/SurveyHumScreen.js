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
      talking: false,
      vehicles: false,
      alarms: false,
      machines: false,
    };

    this.surveyPosition = 4;
    this.surveyKey = 'emo';

    this.SurveyHumRef = React.createRef();
    this.state._survey = this.props.navigation.state.params.survey_data;
  }

  getSurveyState = () => {
    let empty = Object.create(null);
    let surveyHum = {
      talking: this.state.talking,
      vehicles: this.state.vehicles,
      alarms: this.state.alarms,
      machines: this.state.machines,
    };
    let _survey_data = this.state._survey;
    _survey_data.tags = Object.assign(empty, this.state._survey.tags, {
      hum: surveyHum,
    });
    return _survey_data;
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
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={_styles.bgImg}
        source={_assets.images.img_bg_cuddling}
      >
        <View style={{flex: 1, position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
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
                <View style={{
                    height: 10,
                    backgroundColor: _colors.TRANSPARENT,
                  }}></View>
                <Button
                  title={'Continue Button'}
                  style={_styles.button_default}
                  color={_colors.PRIMARY}
                  accessibilityLabel="Go to next"
                  onPress={() => {
                    let _survey_data = this.getSurveyState();
                    navigate('SurveyEnd', { survey_data: _survey_data });
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
