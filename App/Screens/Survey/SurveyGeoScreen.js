import React, { Component } from 'react';
import { Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { RootView, CenterColView, PadView } from '../../Components/Views';
import { HeadingText } from '../../Components/Text/HeadingText';
import { CheckButton } from '../../Components/Button/CheckButton';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _styles  = Theme.Styles;

class SurveyGeoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rain: true,
      wind: false,
      water: false,
      thunder: true,
    };
    this.surveyGeoRef = React.createRef();
    this.state._survey = this.props.navigation.state.params.survey_data;
  }

  getSurveyState = () => {
    let empty = Object.create(null);
    let surveyGeo = {
      rain: this.state.rain,
      wind: this.state.wind,
      water: this.state.water,
      thunder: this.state.thunder,
    };
    let _survey_data = this.state._survey;
      console.log(_survey_data);
    _survey_data.tags = Object.assign(empty, this.state._survey.tags, {geo: surveyGeo});
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
      <RootView>
        <CenterColView>
          <PadView padding={[1,2]}>
            <HeadingText level={3}>
               Did you hear any of these sounds?
            </HeadingText>
            <CheckButton
              id={'rain'}
              onchecked={this._setSuveryItemState}
              text={'Rain'}
            />
            <CheckButton
              id={'wind'}
              onchecked={this._setSuveryItemState}
              text={'Wind'}
            />
            <CheckButton
              id={'water'}
              onchecked={this._setSuveryItemState}
              text={'Rushing Water'}
            />
            <CheckButton
              id={'thunder'}
              onchecked={this._setSuveryItemState}
              text={'Thunder'}
            />
            <Button
              title={"Continue Button"}
              style={_styles.button_default}
              color={_colors.PRIMARY}
              accessibilityLabel="Go to next"
              onPress={() => {
                let _survey_data = this.getSurveyState();
                navigate('SurveyAnt', { survey_data: _survey_data })
              }}
            />
          </PadView>
        </CenterColView>
      </RootView>
    );
  }
}


SurveyGeoScreen.navigationOptions = {
  title: 'SurveyGeoScreen',
};

export { SurveyGeoScreen }
