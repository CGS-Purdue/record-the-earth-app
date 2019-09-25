import React, { Component, createRef } from 'react';
import { Button, ImageBackground } from 'react-native';
import { SoundscapeSchema} from '../../Components/Database/SurveyModel/SurveySchema3';
import { CenterView, PadView, Section, RootView } from '../../Components/Views';
import { MonoText } from '../../Components/Text/MonoText';
import { getAudioFileFromTemp } from '../../Utilities/Filesystem';
import { Base64 } from '../../Utilities/Base64';
import {
  isPromise,
  isDefined,
  isArray,
  isObject,
  isString,
} from '../../Utilities/Valid';
import ServerConfig from '../../Config/Server';
import * as StorageConfig from '../../Config/Storage';
import { Theme } from '../../Theme';
import * as FileSystem from 'expo-file-system';
// import * as Device from 'expo-device';
const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles = Theme.Styles;

// FileSystem.getInfoAsync
const APP_STORAGE = FileSystem.documentDirectory;
const MEDIA_DIR = 'media';
const MEDIA_TEMP = 'soundscape_temp';
const APPSTORAGE_TEMP_PATH = [APP_STORAGE, MEDIA_TEMP].join('');
// const APPSTORAGE_MEDIA_PATH = [APP_STORAGE, MEDIA_DIR].join('');


// const FILE_NAME = file_path.split('/').slice(-1);
// const TEMP_PATH = [ storage_path, file_name].join('/');
// console.log(temp_path);

// const DATA_DIR = 'data';
// const DB_DIR = 'SQLite';
// const prefix = 'file://';

// const SoundDB = {};
// const sdb = SoundDB`;

///  appVersion   , "v3.0.0"
///  bio          , "Birds, Insects, Frogs and Reptiles, Mammals"
///  description  , "upload from new rte3"
///  datetime     , "08/04/2019 01:52"
///  emotion      , "Make me curious, Amaze me, Stress me out, Make me happy, Relax me"
///  filename     , 'FILE_NAME'
///  geo          , "Wind, Water, Thunder, Rain"
///  anthro       , "Machines, Vehicles, Sirens Alarms, Talking"
///  LatLong      , "40.422968,-86.922710"
///  duration     , "20"
///  deviceModel  , "motorola one X"
///  file         , file://sound_file
///  osVersion    , "Android OS 4.1.2 / API-16 (JZO54K/S7710XXAND2)"

const UploaderRef = createRef('SoundscapeSurveyFormUploadRef');


class SurveyEndScreen extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      soundscape_data: this.props.navigation.state.params.soundscape_data,
      survey_data_clean: null,
      survey_data_string: '',
      survey_data_formdata: false,
      upload_disabled: false,
      upload_ready: false,
      upload_completed: false,
      upload_failed: false,
      upload_progress: false,
      fileinfo_uri: false,
      fileinfo_ext: false,
    };

    this.soundscape_data = this.props.navigation.state.params.soundscape_data;
  }

  _xhrFormUpload(data){

    const { hostname, pathname } = JSON.parse(Base64.decode(ServerConfig));
    let address = ['https:/', hostname, pathname].join('/');

    console.log('[_xhrFormUpload] hostname pathname', address);

    console.log('data', data);

    if (!hostname) {
      return false
    }

    let formData = this.getFormData(data);
    console.log('formData', formData);;

    var request = new XMLHttpRequest();
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('success', request.responseText);
      } else {
        console.warn('error', e);
      }
      request.open('POST', address);
      request.send(formData);
    }
  }

  dataToString = (data) => {
    return JSON.stringify(data);
  };

  object_keys_checksum = (obj) => {
    return Object.getOwnPropertyNames(obj)
    .join('')
    .split('')
    .map((a) => {
      return a.codePointAt(0) - 96;
    })
    .reduce((a, b) => {
      return a + b;
    });
  };

  validatePreFlightCheck = (data) => {
    if (Object.keys(data) === Object.keys(SoundscapeSchema)) {
      console.log('tested:', Object.keys(data).length, 'expected');
      console.log(data, SoundscapeSchema);
      return false;
    }

    // if (
      //   object_keys_checksum(data) !==
      //   {
      //     object_keys_checksum,
      //   }(SoundscapeSchema)
      // ) {
      //   this.setState({
      //     upload_ready: false,
      //     reason: 'keys missing or invalid',
      //   });
      //   console.log(' validatePreFlightCheck keys missing or invalid');
      //   return false;
    // }

    console.log('data input looks good, sending forwa');
    this.setState({ dataIsValid: true });
    return true;
  };

  reduceTagList(tagList) {
    var keylist = [];
    var result = Object.entries(tagList).forEach(function(tag) {
      if (tag[1]) {
        keylist.push(tag[0]);
      }
    });
    return JSON.stringify(keylist.join(','));
  }

  asyncGetFileFromTemp = async (name) => {
    try {
      let response = await getAudioFileFromTemp(name);
      console.log('response', response);
      let file_info = await response.uri;
      console.log('file_info', file_info);

      // this.updateState(file_info);

      this.setState({
        soundfile_uri: file_info.uri,
        soundfile_status: 'file-loaded',
      });
      console.log('file_info', file_info);
    } catch (error) {
      console.error(error);
    }
    return file_info;
  };



  getFormDataFilePath = (file_name) => {
    return [APPSTORAGE_TEMP_PATH, file_name ].join('/');
  };


  getFormDataExtraData = () => {
    const { data } = JSON.parse(Base64.decode(ServerConfig));
    return  [data[2], data[0], data[1], data[3]].join('-');
  }


  getFormData(data) {
    if (!data) {
      console.log('[getSurvey2FormData] no data', data);
    }

    console.log('form data', data);
    const fileUploadName = data.filename;

    const formData = new FormData();

    for (let entry of Object.entries(data)) {
      if (!typeof entry[0] === 'string') {
        console.log(`issue with form key ${entry[0]}`);
      }
      formData.append(entry[0], entry[1]);
      console.log('apend formData', entry);
    }
    let formExtra = this.getFormDataExtraData();
    formData.append('uploadToken',  formExtra);

    let formFile = this.getFormDataFilePath( fileUploadName );

    console.log(formFile)

    formData.append('file',  formFile);

    console.log('[getSurvey2FormData] FormData', JSON.stringify(formData));

    this.setState({
      survey_formdata: formData,
      upload_ready: true,
    });
    return formData;

  }

  parseSurveyData = () => {
    var clean = this.state.soundscape_data;
    // let resultfile = this.asyncGetFileFromTemp();
    // resultfile.then((resolved) => {
    clean.bio = this.reduceTagList(this.state.soundscape_data.bio);
    clean.emotion = this.reduceTagList(this.state.soundscape_data.emotion);
    clean.geo = this.reduceTagList(this.state.soundscape_data.geo);
    clean.anthro = this.reduceTagList(this.state.soundscape_data.anthro);
    clean.deviceModel = 'motorola one X';
    clean.osVersion = 'Android OS 4.1.2 / API-16 (JZO54K/S7710XXAND2)';
    this.setState({
      soundscape_data_clean: clean,
    });
    return clean;
  }

  getParsedData() {
    let parsed = this.state.soundscape_data_clean;
    return parsed;
  }

  initUpload = () => {
    let clean = this.getParsedData();
    console.log('CLEAN ', clean);
    let valid = this.validatePreFlightCheck(clean);
    if (!valid){
      console.log('issue with survey data', valid);
      return false;
    }
    console.log('sending');
    this._xhrFormUpload(clean);

  }

  componentDidMount() {
    this.parseSurveyData();
  }


  render() {
    return (
      <ImageBackground
        style={_styles.bgImg}
        source={_assets.images.img_bg_cliff}
      >
        <RootView>
          <PadView padding={[1]}>
            <CenterView>
              <Section justify={'center'} align={'stretch'} weight={1}>

              </Section>

              <Section justify={'center'} align={'stretch'} weight={1}>
                <Button
                  title={'Submit'}
                  onPress={this.initUpload}
                  style={_styles.button_default}
                  color={_colors.PRIMARY}
                  accessibilityLabel={'Submit'}
                />
                <MonoText style={{ color: 'white' }}>
                  {this.state.survey_data_formdata
                    ? JSON.stringify(this.stat.survey_data_formdata)
                    : JSON.stringify(this.state.soundscape_data)}
                </MonoText>
                <MonoText style={{ color: 'white' }}>
                  {this.survey_json_string}
                </MonoText>
              </Section>
            </CenterView>
          </PadView>
        </RootView>
      </ImageBackground>
    );
  }
}

export { SurveyEndScreen };
// <HttpsUpload
//   ref={UploaderRef}
//   dataBus={this.state.upload_data}
//   uploadDisabled={this.state.upload_disabled}
// />
