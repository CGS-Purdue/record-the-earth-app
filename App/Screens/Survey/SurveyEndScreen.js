import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Theme } from '../../Theme';
import { RootView, CenterView, PadView } from '../../Components/Views';

const _styles = Theme.Styles;
const _colors = Theme.Colors;

class SurveyEndScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload_complete: false,
    };
    this.state._survey = this.props.navigation.state.params;
  }

  submitSurvey = () => {
    let surveyData = this.state._survey;
    console.log(surveyData);
  }

  dataToString(data) {
    return JSON.stringify(data);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <RootView>
        <PadView padding={[1]}>
          <CenterView>
            <View>
              <Button
                title="Submit"
                style={_styles.button_default}
                color={_colors.PRIMARY}
                accessibilityLabel="Submit"
                onPress={this.submitSurvey}
              />
            </View>
          </CenterView>
        </PadView>
      </RootView>
    );
  }
}

export { SurveyEndScreen };
