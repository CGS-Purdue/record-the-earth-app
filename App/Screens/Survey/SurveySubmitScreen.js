import React, { Component, createRef } from 'react';
import { Button, ImageBackground } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { getAudioFileFromTemp, updatePendingtToUploaded } from '../../Utilities/Filesystem';
import { CenterView, PadView, Section, RootView } from '../../Components/Views';
import { json2FormData, xhrPost } from '../../Utilities/Networking';
import { object_keys_checksum } from '../../Utilities/Functions';
import { SoundscapeSchema } from '../../Components/Database/SurveyModel/SurveySchema3';
import { StorageConfig } from '../../Config/Storage';
import { getAppData } from '../../Utilities/AppData';
import ServerConfig from '../../Config/Server';
import { MonoText } from '../../Components/Text/MonoText';
import { SoundDB } from '../../Components/Database/SoundDB';
import { Base64 } from '../../Utilities/Base64';
import { Theme } from '../../Theme';

// import * as Device from 'expo-device';
const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles = Theme.Styles;

// const sdb = new SoundDB({ autoconnect: false });

const getFormDataExtraData = () => {
  const { data } = JSON.parse(Base64.decode(ServerConfig));
  return [data[2], data[0], data[1], data[3]].join('-');
}


const getConfigUploadUrl = (data) => {
  const { hostname, pathname } = JSON.parse(Base64.decode(ServerConfig));
  if (!hostname) { return false }
  return ['https:/', hostname, pathname].join('/');
}


const getSurveyFormData = (data) => {
  let formData = json2FormData(data);
  let formExtra = getFormDataExtraData();
  formData.append('uploadToken', formExtra);
  return formData;
};


const reduceTagList = (tagObj) => {
  const keylist = [];
  if (typeof (tagObj) === 'string') {
    return tagObj.trim()
      .replace(/[^a-zA-Z0-9, ]/g, '')
      .toLowerCase();
  }

  Object.entries(tagObj).forEach((tag) => {
    if (tag[1]) { keylist.push(tag[0]) }
  });

  if (!keylist) { return 'none' }
  return keylist.join(',').trim()
}


const SoundscapeSubmitRef = createRef();


class SurveySubmitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundscape_data: null,
      data_parsed: {},
      saved_local_file: false,
      survey_data_formdata: false,
      upload_progress: 0,
    };
    const sdb = new SoundDB({ autoconnect: true });
    this.sdb = sdb;
    this.survey_json_string = null;
    // this.submitLocalDb = this.submitLocalDb.bind(this);
    // this.soundscape_data = this.props.navigation.state.params.soundscape_data;
    this.navigateForward = this.navigateForward.bind(this);
  }


  // COMPONENT MOUNTS
  componentDidMount() {
    let soundscape_data = this.getIncomingSurveyData();
    this.soundscape_data = soundscape_data;
    let parsed = this.parseSurveyData(soundscape_data);
    this.survey_json_string = JSON.stringify(parsed);
    this.submitLocalDb(parsed);
    this.submitRemoteAsync(parsed);
  }


  getIncomingSurveyData() {
    let params = this.getNavigationParams();
    this.incoming_data = params;
    if (params.soundscape_data) {
      this.soundscape_data = params.soundscape_data;
    }
    return params.soundscape_data;
  }


  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }


  onUploadCompleted() {
    this.props.navigation.navigate('Main');
  }


  navigateForward() {
    this.props.navigation.navigate({
      key: 'Main',
      routeName: 'Home',
      params: {},
    });
  }


  updateSoundfile = (fileName) => {
    let updated = updatePendingtToUploaded(fileName);
    if (updated) {
      this.setState({ saved_local_file: true });
    }
  };


  submitRemoteAsync = async (formData, fileName) => {
    let uploadOptions = {
      contentType: 'multipart/form-data',
    };
    let uploadResult = null;
    let url = getConfigUploadUrl();
    let filePath = [StorageConfig.PENDING_SOUNDFILE_PATH].join('/');
    try {
      console.log('filePath', filePath);
      let filedata = await FileSystem.readAsStringAsync();
      uploadOptions.contentLength = filedata.length;
      console.log('file length', filedata.length);
      formData.append('file', filedata.trim(), fileName);
      uploadResult = 'test done';
        // .then((filedata) => {
        // })
        // .catch((err) => {
        // })
        // .done(() => {
        // uploadResult = xhrPost(url, formData, uploadOptions);
        // this.updateSoundfile(fileName);
        // this.setState({ upload_started: true });
        // })
        // .finally(() => {
        //   console.log('uploadResult', uploadResult);
        // });
    } catch (err) {
      console.log('[readAsStringAsync]', err);
      return false;
    }
  };

  submitLocalDb = (data) => {
    let _upload_pid = data.pid ? data.pid : -1;
    let _is_uploaded = data.isUploaded ? true : false;
    this.sdb.insert({
      datetime: data.datetime,
      filepath: [StorageConfig.UPLOADED_SOUNDFILES, data.filename].join('/'),
      filename: data.filename,
      description: data.description,
      duration: data.duration,
      LatLong: data.LatLong,
      emotion: data.emotion,
      bio: data.bio,
      geo: data.geo,
      anthro: data.anthro,
      cultural: 'none',
      pid: _upload_pid,
      isUploaded: _is_uploaded,
    });
  }


  initUpload = () => {
    this.initSubmitRemoteAsync();
    this.initSubmitLocalDb();
  }

  initSubmitLocalDb = () => {
    let parsed = this.getParsedData();
    this.submitLocalDb(parsed);
  }

  initSubmitRemoteAsync = () => {
    let parsed = this.getParsedData();
    let fileName = parsed.filename;
    let formData = getSurveyFormData(parsed);
    this.submitRemoteAsync(formData, fileName);
  }


  validatePreFlightCheck = (data) => {
    let schema = SoundscapeSchema;
    let schema_size = Object.keys(schema).length;
    let schema_sum = object_keys_checksum(schema);

    // QUICK CHECK THAT NO KEYS ARE MISSING
    if (Object.keys(data).length !== schema_size) {
      console.log(
        'tested key length:', Object.keys(data).length,
        'expected:', schema_size
      );
      this.setState({ reason: 'keys missing' });
      return false;
    }

    // QUICK CHECK THAT NO KEYS ARE THE SAME
    if (object_keys_checksum(data) !== schema_sum) {
      console.log(
        'keys different or invalid got:', object_keys_checksum(data),
        'expected', schema_size
      );
      this.setState({ reason: 'invalid keys' });
      return false;
    }
    return true;
  }


  getParsedData() {
    return this.state.data_parsed;
  }


  // USER DATA ENTRY POINT
  parseSurveyData = (soundscape_data) => {
    let datetime = new Date();
    var parsed = soundscape_data;
    parsed.filename = soundscape_data.filename;
    parsed.datetime = datetime.toISOString();
    parsed.description = soundscape_data.description;
    parsed.LatLong = soundscape_data.LatLong;
    parsed.bio = reduceTagList(soundscape_data.bio);
    parsed.emotion = reduceTagList(soundscape_data.emotion);
    parsed.geo = reduceTagList(soundscape_data.geo);
    parsed.anthro = reduceTagList(soundscape_data.anthro);
    parsed.appVersion = getAppData('appVersion');
    parsed.osVersion = getAppData('osVersion');
    parsed.deviceModel = getAppData('deviceModel');

    // CHECKS AT START INSTEAD OF REPEATING
    // AFTER EVERY FUNCTION DOWNSTREAM
    // IF THE INPUT IS GOOD HERE IT WILL BE
    // FOR ALL FOR ALL OF THE OTHER FUNCTIONS
    let valid = this.validatePreFlightCheck(parsed);
    if (!valid) { return false; }
    this.setState({data_parsed: parsed});
    return parsed;
  };

  render() {
    return (
      <ImageBackground style={_styles.bgImg} source={_assets.images.img_bg_cliff}>

        <RootView>
          <PadView padding={[1]}>
            <CenterView>
              <Section justify={'center'} align={'stretch'} weight={1}>
                <Button
                  title={'Submit'}
                  onPress={this.initUpload}
                  style={_styles.button_default}
                  color={_colors.PRIMARY}
                  accessibilityLabel={'Submit'}
                />
                <Button
                  title={'LocalDb Only'}
                  onPress={this.initSubmitLocalDb}
                  style={_styles.button_default}
                  color={_colors.PRIMARY}
                />
                <Button
                  title={'Remote Only'}
                  onPress={this.initSubmitRemoteAsync}
                  style={_styles.button_default}
                  color={_colors.PRIMARY}
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

export { SurveySubmitScreen };


// formData.append('file', {
//   name: fileName,
//   // uri: filePath,
//   type: 'audio/m4a',
//   // type: 'text/plain'
// });
