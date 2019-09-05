import React, { Component } from 'react';
import { Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { RootView, CenterColView, PadView } from '../../Components/Views';
import { HeadingText } from '../../Components/Text/HeadingText';
import { CheckButton } from '../../Components/Button/CheckButton';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _styles  = Theme.Styles;

class SurveyEmoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      happy: true,
      relax: false,
      stress: false,
      curious: true,
    };
    this.state._survey = this.props.navigation.state.params;
    console.log('update survey', this.state._survey);
  }

  getSurveyState = () => {
    let empty = Object.create(null);
    let surveyEmo = {
      happy: this.state.happy,
      relax: this.state.relax,
      stress: this.state.stress,
      curious: this.state.curious,
    };
    let survey_data = Object.assign(empty, this.state._survey, {surveyEmo});
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
            <CheckButton id={'happy'}
              onchecked={this._setSuveryItemState}
              text={'Make me happy'}
            />
            <CheckButton id={'relax'}
              onchecked={this._setSuveryItemState}
              text={'Relax me'}
            />
            <CheckButton id={'curious'}
              onchecked={this._setSuveryItemState}
              text={'Make me curious'}
            />
            <CheckButton id={'stress'}
              onchecked={this._setSuveryItemState}
              text={'Stress me out'}
            />

            <Button
              title={"Continue Button"}
              style={_styles.button_default}
              color={_colors.PRIMARY}
              accessibilityLabel="Go to next"
                onPress={() => {
                  let result = this.getSurveyState();
                  navigate('SurveyGeo', { survey_data: result })
                }}
            />
        </PadView>
      </CenterColView>
    </RootView>
    );
  }
}


SurveyEmoScreen.navigationOptions = {
  title: 'SurveyEmoScreen',
}

export { SurveyEmoScreen }
