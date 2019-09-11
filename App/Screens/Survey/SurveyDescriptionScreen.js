import React, { Component } from 'react';
import { View, Button } from 'react-native';
// import { NavigationScreenProp } from 'react-navigation';
import { Theme } from '../../Theme';
import { RootView, CenterColView, PadView } from '../../Components/Views';
import { StyledTextArea } from '../../Components/Forms/StyledTextArea';
import { HeadingText } from '../../Components/Text/HeadingText';

const _styles = Theme.Styles;
const _colors = Theme.Colors;
const ButtonStyles = Object.assign(
  _styles.button_default,
);
const flexi = { flex: 0 };

class SurveyDescriptionScreen extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handle_submit_description = this.handle_submit_description.bind(this);
    this.forwardedTextRef = React.createRef();

    this.state = {
      text: '',
    };
   }

  handle_submit_description = () => {
    console.log('handle submit');
    console.log(this.state);
    let surveyDescription = this.state.text;
    this.props.navigation.navigate('SurveyBio', { survey_data: { description: surveyDescription } })
  }

  render() {
    return (
      <RootView>
        <CenterColView >
          <PadView padding={[1]}>
            <HeadingText>Describe the sounds you heard</HeadingText>
              <StyledTextArea
                ref={this.forwardedTextRef}
                placeholder={'Sounds of ...'}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
              />

              <Button
                title="Continue"
                style={ButtonStyles}
                color={_colors.PRIMARY}
                accessibilityLabel="Go to next"
                onPress={this.handle_submit_description}
              />

              </PadView>
          </CenterColView>
      </RootView>
    );
  }
}

SurveyDescriptionScreen.navigationOptions = {
  title: 'SurveyDescription',
};

export { SurveyDescriptionScreen };
 ll
