import React, { Component, createRef } from 'react';
import { Button, ImageBackground, View } from 'react-native';
import { MonoText } from '../../Components/Text/MonoText';
import { CenterView, PadView, RootView } from '../../Components/Views';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles = Theme.Styles;
const SoundDB = {};
// const sdb = SoundDB;



class SurveyEndScreen extends Component {
  constructor(props) {
    super(props);
    this.surveyPosition = 4;
    this.surveyKey = 'emo';

    this.ref = createRef();
    this.state = {
      upload_complete: false,
      result: '',
    };
    this.state._survey = this.props.navigation.state.params.survey_data;
    // sdb.create();
  }

  dataToString = (data) => {
    return JSON.stringify(data);
  };

  mapSurveyToTags = (data) => {
    let items = Object.keys(data);
    let tagData = items.map(function(item) {
      let values = data[item];
      console.log('item', item, values);
      let taglist = [];
      for (let tag of Object.keys(values)) {
        if (values[tag]) {
          taglist.push(tag);
        }
      }

      // let returnItem = Object.create({});
      // Object.defineProperty(returnItem, `${item}`, {
      //   value: taglist.join(','),
      //   writable: false,
      // });
      // return returnItem;
      return { [item]: taglist.join(',') };
    });

    return Object.assign(...tagData);
  };

  submitSurvey = () => {
    let { tags, ...rest } = this.state._survey;
    let surveyTags = this.mapSurveyToTags(tags);
    let survey = Object.assign({ ...rest }, surveyTags);
    let surveyString = this.dataToString(survey);
    this.setState({ result: surveyString });
    this.props.navigation.navigate('Main');
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={_styles.bgImg}
        source={_assets.images.img_bg_cliff}
      >
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
              <MonoText>{this.state.surveyText}</MonoText>
                <MonoText>{this.state.result}</MonoText>
              </View>
            </CenterView>
          </PadView>
        </RootView>
      </ImageBackground>
    );
  }
}

export { SurveyEndScreen };
