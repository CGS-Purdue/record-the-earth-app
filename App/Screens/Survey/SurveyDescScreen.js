import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { PadView, Section, ImgBgFill, CenterView, RootView } from '../../Components/Views';
import { SoundscapeSchemaKeys, SoundscapeSchema } from '../../Components/Database/SurveyModel/SurveySchema3';
import { HeadingText } from '../../Components/Text/HeadingText';
// import { BlurBgView } from '../../Components/Effects/BlurView';
import { ThemeTextInput } from '../../Components/Forms/TextInput';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _assets = Theme.Assets;

const soundscapeSchema = SoundscapeSchema;

// const APP_STORAGE
export default class CustomTexInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <ThemeTextInput
        value={this.state.text}
        onChangeText={(text) => this.setState({ text })}
      />
    );
  }
}

class SurveyDescScreen extends Component {
  constructor(props) {
    super(props);
    let timestamp = new Date();
    this.soundscape = Object.assign({}, soundscapeSchema);
    this.soundscape.datetime = timestamp.toISOString();
    this.soundscape.filename = this.props.navigation.state.params.soundfile;
    this.soundscape.LatLong = this.props.navigation.state.params.location;
    this.soundscape.duration = 20;
    this.state = {
      soundscape_data: this.soundscape,
      text: '',
    };

    this.surveyPosition = 1;
    this.surveyKey = 'description';
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {}
  }

  updateSoundscapeData = (key, data) => {
    let currentData = this.state.soundscape_data;
    let newSoundscapeData = Object.assign(Object.create(null), currentData, {
      [key]: data,
    });
    this.setState({ soundscape_data: newSoundscapeData });
    return newSoundscapeData;
  };

  getData = () => {
    let surveyData = this.state.text;
    let surveyKey = this.surveyKey;
    return {
      key: surveyKey,
      data: surveyData,
    };
  };

  render() {
    return (
      <ImgBgFill source={_assets.images.img_background}>
        <RootView>
          <PadView padding={[2, 3]}>
            <CenterView>
              <Section weight={1} expand={true} shrink={true}>
                <HeadingText style={_styles.survey_desc_title}>{'Describe the sounds you heard'}</HeadingText>
              </Section>

              <Section
                weight={3}
                expand={true}
                justify={'flex-start'}
                align={'stretch'}
              >
                <View style={_styles.survey_desc_textinput_container}>
                  <ThemeTextInput
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
                align={'stretch'}
                weight={1}
              >
                <Button
                  title={'Continue'}
                  style={_styles.button_default}
                  color={_colors.PRIMARY}
                  accessibilityLabel={'Go to next'}
                  onPress={() => {
                    let _data = this.getData();
                    let _updatedSoundscape = this.updateSoundscapeData( _data.key, _data.data);
                    this.props.navigation.navigate('SurveyBio', { soundscape_data: _updatedSoundscape});
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

SurveyDescScreen.DisplayName = 'Survey Submit Screen';
SurveyDescScreen.navigationOptions = {
  title: 'SurveySubmit',
};

export { SurveyDescScreen };
