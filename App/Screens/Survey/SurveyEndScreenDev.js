import React, { Component, createRef } from 'react';
import { View, Button } from 'react-native';
import { Theme } from '../../Theme';
import { RootView, CenterView, PadView } from '../../Components/Views';
// import { SoundDB } from '../../Model/SoundDB';
import { MonoText } from '../../Components/Text/MonoText';

const _styles = Theme.Styles;
const _colors = Theme.Colors;
const SoundDB = {};
console.log(SoundDB);

let suvery = {
  tags: {
    suveryBio: {
      "birds": false,
      "frogs": false,
      "insects": false,
      "mammals": false,
    },
    suveryEmo: {
      "curious": true,
      "happy": true,
      "relax": true,
      "stress": false,
    },
    suveryGeo: {
      "rain": true,
      "thunder": true,
      "water": true,
      "wind": false,
    },
    suveryAnt: {
      "alarms": false,
      "machines": true,
      "talking": true,
      "vehicles": false,
    }
  },
  description: "",
};

let survey_data = {
  "ant": "talking,machines",
  "bio": "",
  "description": "year",
  "emo": "happy,relax,curious",
  "geo": "rain,water,thunder",
}

let survery_string = '{"description":"year","bio":"","emo":"happy,relax,curious","geo":"rain,water,thunder","ant":"talking,machines"}';



class SurveyEndScreen extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      upload_complete: false,
      result : '',
    };
    this.state._survey = suvery;
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

    console.log('SoundDB', SoundDB);

    let { tags, ...rest } = this.state._survey;
    let surveyTags = this.mapSurveyToTags(tags);
    let survey = Object.assign({...rest}, surveyTags);
    console.log(survey);
    let surveyString = this.dataToString(survey);
    console.log(surveyString);
    this.setState({result : surveyString })
  }


  render() {
    console.log('SoundDB', SoundDB);

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
