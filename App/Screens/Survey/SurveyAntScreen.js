import React, { Component } from 'react';
import { ImageBackground, Button } from 'react-native';
import { RootView, CenterColView, PadView } from '../../Components/Views';
import { HeadingText } from '../../Components/Text/HeadingText';
import { CheckButton } from '../../Components/Button/CheckButton';
import { Theme } from '../../Theme';
const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles  = Theme.Styles;


class SurveyAntScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      talking: true,
      vehicles: false,
      alarms: false,
      machines: true,
    };
    this.surveyAntRef = React.createRef();
    this.state._survey = this.props.navigation.state.params.survey_data;
  }

  getSurveyState = () => {
    let empty = Object.create(null);
    let surveyAnt = {
      talking: this.state.talking,
      vehicles: this.state.vehicles,
      alarms: this.state.alarms,
      machines: this.state.machines,
    };

    let _survey_data = this.state._survey;
    console.log(_survey_data);
    _survey_data.tags = Object.assign(empty, this.state._survey.tags, {ant: surveyAnt});
     return _survey_data;
  }

  _setSuveryItemState = (item) => {
    let newState = Object.create(null);
    newState[item.id] = item.checked;
    this.setState(newState);
  }

  _setPreviousSurveyData = (data) => {
    this.setState({ _survey : data });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={_styles.bgImg} source={_assets.images.img_background}>
        <RootView>
          <CenterColView>
            <PadView padding={[1,2]}>
              <HeadingText level={3}>
                 Did you hear any of these sounds?
              </HeadingText>
              <CheckButton id={'talking'}
                onchecked={this._setSuveryItemState}
                text={'Talking'}
              />
              <CheckButton id={'vehicles'}
                onchecked={this._setSuveryItemState}
                text={'Vehicles'}
              />
              <CheckButton id={'alarms'}
                onchecked={this._setSuveryItemState}
                text={'Sirens or Alarms'}
              />
              <CheckButton id={'machines'}
                onchecked={this._setSuveryItemState}
                text={'Machines'}
              />

              <Button
                title={"Continue Button"}
                style={_styles.button_default}
                color={_colors.PRIMARY}
                accessibilityLabel="Go to next"
                onPress={() => {
                  let _survey_data = this.getSurveyState();
                  navigate('SurveyEnd', { survey_data: _survey_data })
                }}
              />
          </PadView>
        </CenterColView>
      </RootView>
      </ImageBackground>
    );
  }
}

SurveyAntScreen.navigationOptions = {
  title: 'SurveyAntScreen',
}

export { SurveyAntScreen }
