import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Theme } from '../../Theme';
import { RootView, CenterView, PadView } from '../../Components/Views';
import { StyledTextArea } from '../../Components/Forms/TextArea';

const _styles = Theme.Styles;
const _colors = Theme.Colors;

class SurveyDescriptionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Description',
      name: 'soundscape_description',
      error: false,
    };
  }

  handle_submit_description(text) {
    console.log(text);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <RootView>
        <PadView padding={[1]}>
          <CenterView>
            <View>
              <StyledTextArea
                containerStyle={_styles.form_text_input_container}
                inputContainerStyle={_styles.form_text_input}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
              />

              <Button
                title="Continue"
                style={_styles.button_default}
                color={_colors.PRIMARY}
                accessibilityLabel="Go to next"
                onPress={() => navigate('SurveyBio', { survey_data: this.state.text })}
              />
            </View>
          </CenterView>
        </PadView>
      </RootView>
    );
  }
}

SurveyDescriptionScreen.navigationOptions = {
  title: 'SurveyDescription',
};

export { SurveyDescriptionScreen };
