import React, { Component, createRef } from 'react';
import { Button, ImageBackground } from 'react-native';
import { CenterView, PadView, Section, RootView } from '../../Components/Views';
import { MonoText } from '../../Components/Text/MonoText';
import { SoundDB } from '../../Components/Database/SoundDB';
import { SoundscapeSchema } from '../../Components/Database/SurveyModel/SurveySchema3';
import { getAppData } from '../../Utilities/AppData';
import { Base64 } from '../../Utilities/Base64';
import * as FileSystem from 'expo-file-system';
import { getAudioFileFromTemp, updatePendingtToUploaded } from '../../Utilities/Filesystem';
import { json2FormData, xhrPost } from '../../Utilities/Networking';
import { object_keys_checksum } from '../../Utilities/Functions';
import { StorageConfig } from '../../Config/Storage';
import ServerConfig from '../../Config/Server';
import { Theme } from '../../Theme';



/// NOTE:
/// NEEDS TO MATCH EXISTING FORMAT FOR TAG LABELING
/// function tagify(tag){
//
// EXAMPLE:
// ```
//   tag=tag.trim();
//   tag=tag.toLowerCase();
//   // BIOPHONY
//   if (tag == "birds"){ $('#tags-bio #tBirds').addClass('tag-selected');  }
//   if (tag == "frogs and reptiles"){ $('#tags-bio #tFrogs').addClass('tag-selected');  }
//   if (tag == "insects"){ $('#tags-bio #tInsects').addClass('tag-selected');  }
//   if (tag == "mammals"){ $('#tags-bio #tMammals').addClass('tag-selected');  }
//   // GEOPHONY
//   if (tag == "rain"){ $('#tags-geo #tRain').addClass('tag-selected');  }
//   if (tag == "wind"){ $('#tags-geo #tWind').addClass('tag-selected');  }
//   if (tag == "rushing water"){ $('#tags-geo #tWater').addClass('tag-selected');  }
//   if (tag == "thunder"){ $('#tags-geo #tThunder').addClass('tag-selected');  }
//   // ANTHROPHONY
//   if (tag == "talking"){ $('#tags-ant #tTalking').addClass('tag-selected');  }
//   if (tag == "vehicles"){ $('#tags-ant #tVehicles').addClass('tag-selected');  }
//   if (tag == "sirens alarms"){ $('#tags-ant #tAlarms').addClass('tag-selected');  }
//   if (tag == "machines"){ $('#tags-ant #tMachines').addClass('tag-selected');  }
//   // EMOTION
//   if (tag == "relax me"){ $('#tags-emo #tRelaxed').addClass('tag-selected');  }
//   if (tag == "make me happy"){ $('#tags-emo #tHappy').addClass('tag-selected');  }
//   if (tag == "stress me out"){ $('#tags-emo #tStressed').addClass('tag-selected');  }
//   if (tag == "amaze me"){ $('#tags-emo #tAmazed').addClass('tag-selected');  }
//   if (tag == "make me curious"){ $('#tags-emo #tCurious').addClass('tag-selected');  }
//   // EMOTION VERSION 2.0
//   if (tag == "positive"){ $('#tags-emo #tRelaxed').addClass('tag-selected');  }
//   if (tag == "neutral"){ $('#tags-emo #tCurious').addClass('tag-selected');  }
//   if (tag == "negative"){ $('#tags-emo #tStressed').addClass('tag-selected');  }
// ```





// import * as Device from 'expo-device';
const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles = Theme.Styles;

// const sdb = new SoundDB({ autoconnect: false });

const getFormDataExtraData = () => {
  const { data } = JSON.parse(Base64.decode(ServerConfig));
  return [data[2], data[0], data[1], data[3]].join('-');
};

const getSurveyFormData = (data) => {
  let formData = json2FormData(data);
  let formExtra = getFormDataExtraData();
  formData.append('uploadToken', formExtra);
  return formData;
};

const getConfigUploadUrl = (data) => {
  const { hostname, pathname } = JSON.parse(Base64.decode(ServerConfig));
  if (!hostname) {
    return false;
  }
  return ['https:/', hostname, pathname].join('/');
};

const reduceTagList = (tagObj) => {
  var keylist = [];
  if (typeof(tagObj) === 'string') {
    return tagObj.trim().replace(/[^a-zA-Z0-9, ]/g, '').toLowerCase();
  }
  var result = Object.entries(tagObj).forEach((tag) => {
    if (tag[1]) {
      keylist.push(tag[0]);
    }
  });
  return JSON.stringify(keylist.join(','));
};

const SoundscapeSubmitRef = createRef();

class SoundscapeSubmitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundscape_data: null,
      data_parsed: {},
      saved_local_db: false,
      saved_local_file: false,
      saved_remote_upload: false,
      survey_data_clean: null,
      survey_data_formdata: false,
      upload_disabled: false,
      upload_ready: false,
      upload_completed: false,
      upload_started: false,
      upload_failed: false,
      fileinfo_uri: false,
      fileinfo_ext: false,
      fileinfo_size: false,
      upload_progress: 0,
    };

    this.ref = SoundscapeSubmitRef;
    this.sdb = new SoundDB({ autoconnect: true });
    this.navigateForward = this.navigateForward.bind(this);
    this.soundscape_data = this.props.navigation.state.params.soundscape_data;
  }

  // COMPONENT MOUNTS
  componentDidMount() {
    this.getIncomingSurveyData();
    this.parseSurveyData();
    this.initUpload();
  }

  getIncomingSurveyData() {
    let params = this.getNavigationParams();
    this.incoming_data = params;
    if (params.soundscape_data) {
      this.soundscape_data = params.soundscape_data;
    }
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
      await FileSystem.readAsStringAsync()
        .then((filedata) => {
          uploadOptions.contentLength = filedata.length;
          console.log('file length', filedata.length);
          formData.append('file', filedata.trim(), fileName);
        })
        .catch((err) => {
          console.log('[submitRemoteAsync] readAsStringAsync', err);
        })
        .done(() => {
          // uploadResult = xhrPost(url, formData, uploadOptions);
          uploadResult = 'test done'
          this.updateSoundfile(fileName);
          this.setState({ upload_started: true });
        })
        .finally(() => {
          console.log('uploadResult', uploadResult);
        });
    } catch (err) {
      console.log('[submitRemoteAsync]', err);
      return false;
    }
  };

  submitLocalDb = (data) => {
    // let connection = sdb.getConnection();
    // this.connection = this.sdb.getConnection();
    console.log('[submit Db]', this.sdb, this.sdb.connection);
    console.log('[submit Db]', data);

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
    console.log('SUBMITTING LOCAL DB');
    this.submitLocalDb(parsed);
  }

  initSubmitRemoteAsync = () => {
    let parsed = this.getParsedData();
    let fileName = parsed.filename;
    let formData = getSurveyFormData(parsed);
    console.log('SUBMITTING REMOTE');
    this.submitRemoteAsync(formData, fileName);
  }

  validatePreFlightCheck = (data) => {
    let schema = SoundscapeSchema;
    let schema_size = Object.keys(schema).length;
    let schema_sum = object_keys_checksum(schema);

    // QUICK CHECK THAT NO KEYS ARE MISSING
    if (Object.keys(data).length !== schema_size) {
      console.log('tested:', Object.keys(data).length, 'expected', schema_size);
      return false;
    }

    // QUICK CHECK THAT NO KEYS ARE THE SAME
    if (object_keys_checksum(data) !== schema_sum) {
      console.log( 'keys missing or invalid got:', object_keys_checksum(data), 'expected', schema_size);
      this.setState({ reason: 'keys missing or invalid' });
      return false;
    }
    this.setState({ dataIsValid: true });
    return true;
  };

  // USER SUBMISSION DATA ENTRY POINT
  parseSurveyData = () => {
    let datetime = new Date();
    let soundscape_data = this.soundscape_data;
    var parsed_data = soundscape_data;
    parsed_data.filename = soundscape_data.filename;
    parsed_data.datetime = datetime.toISOString();
    parsed_data.description = soundscape_data.description;
    parsed_data.LatLong = soundscape_data.LatLong;
    parsed_data.bio = reduceTagList(soundscape_data.bio);
    parsed_data.emotion = reduceTagList(soundscape_data.emotion);
    parsed_data.geo = reduceTagList(soundscape_data.geo);
    parsed_data.anthro = reduceTagList(soundscape_data.anthro);
    parsed_data.appVersion = getAppData('appVersion');
    parsed_data.osVersion = getAppData('osVersion');
    parsed_data.deviceModel = getAppData('deviceModel');

    // CHECKS AT START INSTEAD OF REPEATING
    // AFTER EVERY FUNCTION DOWNSTREAM
    // IF THE INPUT IS GOOD HERE IT WILL BE
    // FOR ALL FOR ALL OF THE OTHER FUNCTIONS
    let valid = this.validatePreFlightCheck(parsed_data);
    if (!valid) { return false }
    this.setState({data_parsed: parsed_data});
    return parsed_data;
  };

  getParsedData() {
    return this.state.data_parsed;
  }

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

export { SoundscapeSubmitScreen };


// formData.append('file', {
//   name: fileName,
//   // uri: filePath,
//   type: 'audio/m4a',
//   // type: 'text/plain'
// });
