import React, { Component } from 'react';
import { Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { RootView, CenterColView, PadView } from '../../Components/Views';
import { HeadingText } from '../../Components/Text/HeadingText';
import { CheckButton } from '../../Components/Button/CheckButton';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
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
    this.state._survey = this.props.navigation.state.params;
    console.log('update survey', this.state._survey);
  }

  getSurveyState = () => {
    let empty = Object.create(null);
    let surveyAnt = {
      talking: this.state.happy,
      vehicles: this.state.relax,
      alarms: this.state.stress,
      machines: this.state.curious,
    };

    let survey_data = Object.assign(empty, this.state._survey, {surveyAnt});
     console.log('survey_data',survey_data);
     return survey_data;
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
                  let result = this.getSurveyState();
                  navigate('SurveyEnd', { survey_data: result })
                }}
              />
          </PadView>
        </CenterColView>
      </RootView>
    );
  }
}

SurveyAntScreen.navigationOptions = {
  title: 'SurveyAntScreen',
}

export { SurveyAntScreen }
