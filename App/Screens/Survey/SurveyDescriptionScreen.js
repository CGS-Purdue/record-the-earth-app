import React, { Component } from 'react';
import { Button, View, TextInput } from 'react-native';
// import { BlurBgView } from '../../Components/Effects/BlurView';
import { HeadingText } from '../../Components/Text/HeadingText';
import { PadView, Section, ImgBgFill, CenterView, RootView } from '../../Components/Views';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _assets = Theme.Assets;
const _colors = Theme.Colors;

const TextAreaStyle = Object.assign({
    borderBottomLeftRadius: 1 ,
    borderBottomRightRadius: 1 ,
    borderTopLeftRadius: 1 ,
    borderTopRightRadius: 1 ,
  },
  _styles.stretch,
  _styles.br.br_w1,
  _styles.form_input_multiline_text_3,
  _styles.m.mb20,
);

const TextAreaContainerStyle = Object.assign(
  _styles.form_textarea_input_container_3
);

const ButtonStyles = Object.assign(_styles.button_default);

class SurveyDescriptionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    // this.handle_submit_description = this.handle_submit_description.bind(this);
  }

  handle_submit_description = () => {
    console.log(this.state);
    let surveyDescription = this.state.text;
    this.props.navigation.navigate('SurveyBio', {
      survey_data: { description: surveyDescription },
    });
  };

  render() {
    return (
      <ImgBgFill source={_assets.images.img_background}>
        <RootView>
          <PadView padding={[2, 3]}>
          <CenterView>
            <Section weight={1} expand={true} shrink={true}>
              <HeadingText>{'Describe the sounds you heard'}</HeadingText>
            </Section>
            <Section weight={2}>
              <View style={_styles.form_textarea_input_container_3}>
                <TextInput
                  style={TextAreaStyle}
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                  multiline={true}
                  numberOfLines={3}
                  maxLength={256}
                />
              </View>
            </Section>
            <Section justify={'flex-start'} align={'stretch'} weight={3}>
              <Button
                title="Continue"
                style={ButtonStyles}
                color={_colors.PRIMARY}
                accessibilityLabel="Go to next"
                onPress={this.handle_submit_description}
              />
            </Section>
            </CenterView>
          </PadView>
        </RootView>
      </ImgBgFill>
    );
  }
}

SurveyDescriptionScreen.DisplayName = "SurveyDescriptionScreen";

SurveyDescriptionScreen.navigationOptions = {
  title: 'SurveyDescription',
};

export { SurveyDescriptionScreen };
