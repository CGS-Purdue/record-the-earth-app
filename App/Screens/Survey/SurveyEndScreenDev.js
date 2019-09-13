import React, { Component, createRef } from 'react';
import { ImageBackground, View, Button } from 'react-native';
import { Theme } from '../../Theme';
import { RootView, CenterView, PadView } from '../../Components/Views';
import { SoundDB } from '../../Components/Database/SoundDB';
import { MonoText } from '../../Components/Text/MonoText';
const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _dbRef = createRef();

let suvery = {
  tags: {
    biophony: {
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
    geophony: {
      "rain": true,
      "thunder": true,
      "water": true,
      "wind": false,
    },
    anthrophony: {
      "alarms": false,
      "machines": true,
      "talking": true,
      "vehicles": false,
    }
  },
  description: "test",
};

let survey_data = {
  "emotion": "talking,machines",
  "biophony": "",
  "anthrophony": "",
  "description": "year",
  "emo": "happy,relax,curious",
  "geophony": "rain,water,thunder",
}
let survery_string = '{"description":"year","bio":"","emo":"happy,relax,curious","geo":"rain,water,thunder","ant":"talking,machines"}';


const surveyRecord = {
  datetime: new Date(),
  path: 'na',
  filename: 'na',
  description: '',
  duration: 0,
  location: '0,0',
  emotion: '',
  biophony: '',
  geophony: '',
  anthrophony: '',
  cultural: '',
  pid: null,
  isUploaded: false,
};


class SurveyEndScreen extends Component {
  constructor(props) {
    super(props);
    this.ref = _dbRef;
    this.state = {
      upload_complete: false,
      result : '',
    };
    this.state._survey = suvery;
    this.connection = false;
    this.dbConnection = new SoundDB({ autoconnect: true});
  }

  dataToString = (data) => {
    return JSON.stringify(data);
  }

  onComponentDidMount(){
    this.dbConnection.setConnection();
    let connection = this.dbConnection.getConnection()
    console.log(connection);
    console.log('connectionStatus', this.dbConnection.connectionStatus);
    this.connection = connection;
    return connection;
  }

  saveSurvey(data){
    const dbRecord = {
      datetime: new Date().toString(),
      path: 'na',
      filename: 'na',
      description: 'soundcape',
      duration: 0,
      location: '0,0',
      emotion: 'none',
      biophony: 'none',
      geophony: 'none',
      anthrophony: 'none',
      cultural: 'none',
      pid: 'none',
      isUploaded: false,
    };

    let insertData = Object.assign(dbRecord, data);
    const insertArgs = [
      insertData.datetime,
      insertData.path,
      insertData.filename,
      insertData.description,
      insertData.duration,
      insertData.location,
      insertData.emotion,
      insertData.biophony,
      insertData.geophony,
      insertData.anthrophony,
      insertData.cultural,
      insertData.pid,
      insertData.isUploaded
    ];

    console.log('insertArgs');
    console.log(insertArgs);
    console.log('using', this.dbConnection);
    this.dbConnection.insert(insertArgs);
    this.connection.insert(insertArgs);
    // this.dbConnection.connection
  }

  mapSurveyToTags = (data) => {
    let items = Object.keys(data);
    let tagData = items.map(function(item){
      let values = data[item];
      // console.log('item', item, values);
      let taglist = [];
      for (let tag of Object.keys(values)) {
        if (values[tag]) {
          taglist.push(tag)
        }
      }
      // let returnItem = Object.create({});
      // Object.defineProperty(returnItem, `${item}`, {
      //   value: taglist.join(','),
      //   writable: false,expo
      // });
      // return returnItem;
        return {[item]:taglist.join(',')}
    });

    return Object.assign(...tagData)
  }

  submitSurvey = () => {
    // console.log('SoundDB', SoundDB);
    let { tags, ...rest } = this.state._survey;
    let surveyTags = this.mapSurveyToTags(tags);
    let survey = Object.assign({...rest}, surveyTags);
    // console.log(survey);
    this.saveSurvey(survey);
    let surveyString = this.dataToString(survey);
    console.log(surveyString);
    this.props.navigation.navigate('Home')
    this.setState({result : surveyString })
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
    <ImageBackground style={_styles.bgImg} source={_assets.images.img_bg_cliff}>
      <RootView>
        <PadView padding={[1]}>
          <CenterView>
            <View>
              <Button
                title="Submit"
                style={[_styles.button_default,{ padding: 10, fontSize: 40, color: 'red'}]}
                color={_colors.PRIMARY}
                accessibilityLabel="Submit"
                onPress={this.submitSurvey}
              />
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
