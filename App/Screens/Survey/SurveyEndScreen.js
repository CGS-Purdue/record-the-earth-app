import React, { Component, createRef } from 'react';
import { Button, ImageBackground } from 'react-native';
import { SoundscapeSchema } from '../../Components/Database/SurveyModel/SurveySchema3';
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
import { StorageConfig } from '../../Config/Storage';
import { Theme } from '../../Theme';
import * as FileSystem from 'expo-file-system';
// import * as Device from 'expo-device';
const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles = Theme.Styles;

// FileSystem.getInfoAsync
const APP_STORAGE = StorageConfig.APP_STORAGE;
const APP_STORAGE_TEMP_PATH = StorageConfig.PENDING_SOUNDFILE_PATH;

// const FILE_NAME = file_path.split('/').slice(-1);
// const TEMP_PATH = [ storage_path, file_name].join('/');

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

  getNavigationParams() {
    return this.props.navigation.state.params || {}
  }

  
  _xhrFormUpload(data) {
    const { hostname, pathname } = JSON.parse(Base64.decode(ServerConfig));
    let address = ['https:/', hostname, pathname].join('/');
    if (!hostname) {
      return false;
    }
    let formData = this.getFormData(data);
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
      } else {
      }
      request.open('POST', address);
      request.send(formData);
    };
  }

  getFormDataFilePath = (file_name) => {
    return [APP_STORAGE_TEMP_PATH, file_name].join('/');
  };

  getFormDataExtraData = () => {
    const { data } = JSON.parse(Base64.decode(ServerConfig));
    return [data[2], data[0], data[1], data[3]].join('-');
  };

  getFormData(data) {
    if (!data) {  }
    const fileUploadName = data.filename;
    const formData = new FormData();
    for (let entry of Object.entries(data)) {
      if (!typeof entry[0] === 'string') {
      }
      formData.append(entry[0], entry[1]);
    }
    let formExtra = this.getFormDataExtraData();
    formData.append('uploadToken', formExtra);
    let formFile = this.getFormDataFilePath(fileUploadName);
    formData.append('file', formFile);
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
  };

  getParsedData() {
    let parsed = this.state.soundscape_data_clean;
    return parsed;
  }

  initUpload = () => {
    let clean = this.getParsedData();
    let valid = this.validatePreFlightCheck(clean);
    if (!valid) {
      return false;
    }
    this._xhrFormUpload(clean);
  };

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
              <Section justify={'center'} align={'stretch'} weight={1} />

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
