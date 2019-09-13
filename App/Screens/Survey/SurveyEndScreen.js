import React, { Component, createRef } from 'react';
import { View, Button } from 'react-native';
import { Theme } from '../../Theme';
import { RootView, CenterView, PadView } from '../../Components/Views';
// import { SoundDB } from '../../Database/Model/SoundDB';
import { MonoText } from '../../Components/Text/MonoText';

const _styles = Theme.Styles;
const _colors = Theme.Colors;

const SoundDB = {};
const sdb = SoundDB;



class SurveyEndScreen extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      upload_complete: false,
      result : '',
    };
    this.state._survey = this.props.navigation.state.params.survey_data;
    sdb.create();
  }

  dataToString = (data) => {
    return JSON.stringify(data);
  }

  mapSurveyToTags = (data) => {
    let items = Object.keys(data);
    let tagData = items.map(function(item){
      let values = data[item];
      console.log('item', item, values);
      let taglist = [];
      for (let tag of Object.keys(values)) {
        if (values[tag]) {
          taglist.push(tag)
        }
      }

      // let returnItem = Object.create({});
      // Object.defineProperty(returnItem, `${item}`, {
      //   value: taglist.join(','),
      //   writable: false,
      // });
      // return returnItem;
        return {[item]:taglist.join(',')}
    });

    return Object.assign(...tagData)
  }

  submitSurvey = () => {
    console.log('sdb', sdb);
    let { tags, ...rest } = this.state._survey;
    let surveyTags = this.mapSurveyToTags(tags);
    let survey = Object.assign({...rest}, surveyTags);
    console.log(survey);
    let surveyString = this.dataToString(survey);
    console.log(surveyString);
    this.setState({result : surveyString })
  }


  render() {
    console.log('sdb', sdb);
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
              <MonoText>{this.state.result}</MonoText>
            </View>
          </CenterView>
        </PadView>
      </RootView>
    );
  }
}

export { SurveyEndScreen };
