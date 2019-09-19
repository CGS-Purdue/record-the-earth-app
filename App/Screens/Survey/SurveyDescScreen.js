import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { HeadingText } from '../../Components/Text/HeadingText';
import {
  PadView,
  Section,
  ImgBgFill,
  CenterView,
  RootView,
} from '../../Components/Views';
// import { BlurBgView } from '../../Components/Effects/BlurView';
import { TextInput } from 'react-native-paper';
import { Theme } from '../../Theme';


const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _assets = Theme.Assets;
const Empty = Object.create(null);
export default class PaperTexInput extends React.Component {
  constructor (props){
      super(props)
      this.surveyPosition = 1;
      this.surveyKey = 'description';
      this.state = {survey_data : {Empty}}
  }

  render() {
    return (
      <TextInput
        value={this.state.text}
        onChangeText={(text) => this.setState({ text })}
      />
    );
  }
}

class SurveyDescScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handle_submit_description = () => {
    let surveyDescription = this.state.text;
    this.setState({
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
                <HeadingText style={_styles.survey_desc_title}>
                  {'Describe the sounds you heard'}
                </HeadingText>
              </Section>

              <Section
                weight={3}
                expand={true}
                justify={'flex-start'}
                align={'stretch'}
              >
                <View style={_styles.survey_desc_textinput_container}>
                  <TextInput
                    label={'Description'}
                    style={_styles.survey_desc_textinput}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text })}
                    mode={'outlined'}
                    placeholder={'Descript the sound you just recorded'}
                    multiline={true}
                    numberOfLines={3}
                  />
                </View>
              </Section>

              <Section
                justify={'flex-start'}
                shrink={true}
                shrink={true}
                align={'stretch'}
                weight={1}
              >
                <Button
                  title={'Continue'}
                  style={_styles.button_default}
                  color={_colors.PRIMARY}
                  accessibilityLabel={'Go to next'}
                  onPress={this.handle_submit_description}
                  onPress={() => {
                    let _survey_data = this.getSurveyState();
                    this.props.navigation.navigate('SurveyGeo', {
                      survey_data: _survey_data,
                    });
                  }}
                />
              </Section>
            </CenterView>
          </PadView>
        </RootView>
      </ImgBgFill>
    );
  }
}

SurveyDescScreen.DisplayName = 'Survey-Description-Screen';

SurveyDescScreen.navigationOptions = {
  title: 'SurveyDescription',
};

export { SurveyDescScreen };
