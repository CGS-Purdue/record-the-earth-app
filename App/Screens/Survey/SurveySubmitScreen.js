import React, { Component, createRef } from 'react';
import { Button, ImageBackground } from 'react-native';
import * as FileSystem from 'expo-file-system';
// import { getAudioFileFromTemp, updatePendingtToUploaded } from '../../Utilities/Filesystem';
import { updatePendingtToUploaded } from '../../Utilities/Filesystem';
import { CenterView, PadView, Section, RootView } from '../../Components/Views';
import { json2FormData, xhrPost, fetchPostForm } from '../../Utilities/Networking';
import { object_keys_checksum } from '../../Utilities/Functions';
import { SoundscapeSchema } from '../../Components/Database/SurveyModel/SurveySchema3';
import { StorageConfig } from '../../Config/Storage';
import { getAppData } from '../../Utilities/AppData';
import ServerConfig from '../../Config/Server';
import { MonoText } from '../../Components/Text/MonoText';
import { SoundDB } from '../../Components/Database/SoundDB';
import { Base64 } from '../../Utilities/Base64';
import { _dev } from '../../Utilities/Log';
import { Theme } from '../../Theme';

// import * as Device from 'expo-device';
const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles = Theme.Styles;
const LOG_CTX = 'SurveySubmitScreen';

/// SHOULD NEVER HAVE TO WAIT MORE THAN
/// 10 SECONDS TO COMPLETE THE UPLAOD
/// IN THE FOREGROUND
const MAX_SUBMIT_WAIT = 10000;
const SoundscapeSubmitRef = createRef();
const sdb = new SoundDB({ autoconnect: true });

const getConfigUploadUrl = (data) => {
  const { hostname, pathname } = JSON.parse(Base64.decode(ServerConfig));
  if (!hostname) { return false }
  return ['https:/', hostname, pathname].join('/');
}

const getFormDataExtraData = () => {
  const { data } = JSON.parse(Base64.decode(ServerConfig));
  return [data[2], data[0], data[1], data[3]].join('-');
}


const getSurveyFormData = (data) => {
  let formData = json2FormData(data);
  let formExtra = getFormDataExtraData();
  formData.append('uploadToken', formExtra);
  return formData;
};


const reduceTagList = (tagObj) => {
  if (!tagObj || tagObj.length < 1) {
    return tagObj;
  }
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


class SurveySubmitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parsed_data: {},
      reason: '',
      saved_local_file: false,
      survey_data_formdata: false,
      upload_progress: 0,
    };
    this.ref = SoundscapeSubmitRef;
    this.done = 0;
    this.incoming_data = null;
    this.soundscape_data = null;
    this.survey_json_string = null;
    this.initUpload = this.initUpload.bind(this);
    this._onFinishButton = this._onFinishButton.bind(this);
    this.processSurveyData = this.processSurveyData.bind(this);
    this._isMounted = false;
    // this.submitLocalDb = this.submitLocalDb.bind(this);
    // this.soundscape_data = this.props.navigation.state.params.soundscape_data;
  }

  // COMPONENT MOUNTS
  componentDidMount() {
    this._isMounted = true;
    console.log('%c[SurveySubmitScreen] component did mount', 'color:lime;font-weight:bold;');
    _dev(LOG_CTX, 'state', this.state);
    let soundscape_data = this.getIncomingSoundscapeData();
    this.survey_json_string = JSON.stringify(soundscape_data);
    this.initUpload(soundscape_data);
  }

  componentWillUnmount() {
    if (sdb.connectionStatus === 'connected') {
      _dev(LOG_CTX, sdb);
      // sdb.connection.disconnect();
    }
    this._isMounted = false;
  }

  setSoundscapeData(data) {
    _dev([LOG_CTX, 'setSoundscapeData'], 'soundscape_data', data);
    if (!data) { return false; }
    this.soundscape_data = data || false;
  }

  setIncomingNavivationData(data) {
    this.incoming_data = data || false;
  }

  getIncomingSoundscapeData() {
    let params = this.getNavigationParams();
    _dev([LOG_CTX, 'getIncomingSoundscapeData'], 'params', params);

    this.setIncomingNavivationData(params);
    let soundscape_data = params.soundscape_data;
    if (soundscape_data) {
      _dev([LOG_CTX, 'getIncomingSoundscapeData'], 'soundscape_data', soundscape_data);
      this.setSoundscapeData(soundscape_data);
    }
    return soundscape_data;
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }

  initUpload(data) {
    let parsed = this.processSurveyData(data);
    this.parsed_data = parsed;
    this.setParsedDataState(parsed);
    this.initSubmitLocalDb(parsed);
    this.initSubmitRemoteAsync(parsed);
    _dev([LOG_CTX, 'initUpload state'], 'soundscape_data', JSON.stringify(this.state.parsed_data));
  }

  initSubmitLocalDb(_parsed) {
    if (!_parsed){
      _parsed = this.getParsedData();
      this.setParsedDataState(_parsed);
    }
    _dev([LOG_CTX, 'initSubmitLocalDb'], 'getParsed', _parsed);
    if (!_parsed){ return false }
    this.submitLocalDb(_parsed)
  }

  initSubmitRemoteAsync(_parsed) {
    if (!_parsed){
      _parsed = this.getParsedData();
      this.setParsedDataState(_parsed);
    }
    _dev([LOG_CTX, 'initSubmitRemoteAsync'], 'state', JSON.stringify(this.state.parsed_data));
    let fileName = _parsed.filename;
    let formData = getSurveyFormData(_parsed);
    _dev([LOG_CTX, 'initSubmitRemoteAsync'], 'initSubmitRemoteAsync getFormData', formData);

    if (!formData || !fileName){ return false; }
    this.submitRemoteAsync(formData, fileName);
  }

  submitRemoteAsync = async (formData, fileName) => {
    _dev([LOG_CTX, 'submitRemoteAsync'], fileName, formData);
    _dev([LOG_CTX, 'submitRemoteAsync'], 'state', JSON.stringify(this.state.parsed_data));

    if (!fileName) {return false;}
    let uploadOptions = {
      contentType: 'multipart/form-data',
      // contentType: 'application/x-www-form-urlencoded',
      // accept: 'application/json',
    };

    let url = getConfigUploadUrl();
    let filePath = [StorageConfig.STORAGE_PENDING_SOUNDFILES, fileName].join('/');

    _dev([LOG_CTX, 'submitRemoteAsync'], `\n${filePath}`);

    try {
      // let filedata = await FileSystem.readAsStringAsync(filePath, {
      //   encoding: FileSystem.EncodingType.UTF8
      // encoding: FileSystem.EncodingType.Base64
      // });

        // _dev([LOG_CTX, 'submitRemoteAsync'], 'file.length', filedata.length);
      // formData.append("file", { uri: FILE_URI, type: 'audio/m4a', name: FILE_NAME });
      // uploadOptions.contentLength = filedata.length;

      formData.append("file", filePath, { type: 'audio/m4a', name: fileName });
      formData.append("file", { uri: filePath, type: 'audio/m4a', name: fileName });

      // formData.append('file', filedata);
      // formData.append('file', filedata, `${fileName}.mp4`);
      // formData.append('file', {
      //   uri: filePath,
      //   type: 'audio/m4a',
      //   name: fileName,
      // });

      // { name: fileName, uri: filePath, type: 'text/plain' }
      // formData.append('file', filePath, {
      //   uri: filePath,
      //   name: fileName,
      //   type: 'audio/m4a',
      // });

      // _dev([LOG_CTX, 'submitRemoteAsync'], 'xhrPost\n\n', filedata.slice(0, 300), '\n\n');
      let uploadResult = xhrPost(url, formData, uploadOptions);
      // let uploadResult = await fetchPostForm(url, formData);
      // this.updateSoundfile(fileName);
      _dev([LOG_CTX, 'submitRemoteAsync fetch Results'], uploadResult);

    } catch (err) {
      console.log(err);
      return false;
    }
  }


  submitLocalDb(data) {
    if (!data) { return false; }
    let _upload_pid = data.pid ? data.pid : -1;
    let _is_uploaded = data.isUploaded ? true : false;

    sdb.insert({
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


  // USER DATA ENTRY POINT
  processSurveyData(_data) {
    if (!_data) { return false; }
    _dev([LOG_CTX, 'SurveySubmitScreen'], 'processSurveyData data', _data);
    let datetime = new Date();
    var parsed = _data;
    parsed.filename = _data.filename;
    parsed.datetime = datetime.toISOString();
    parsed.description = _data.description;
    parsed.LatLong = _data.LatLong;
    parsed.bio = reduceTagList(_data.bio);
    parsed.emotion = reduceTagList(_data.emotion);
    parsed.geo = reduceTagList(_data.geo);
    parsed.anthro = reduceTagList(_data.anthro);
    parsed.appVersion = getAppData('appVersion');
    parsed.osVersion = getAppData('osVersion');
    parsed.deviceModel = getAppData('deviceModel');

    // CHECKS AT START INSTEAD OF REPEATING
    // AFTER EVERY FUNCTION DOWNSTREAM
    // IF THE INPUT IS GOOD HERE IT WILL BE
    // FOR ALL FOR ALL OF THE OTHER FUNCTIONS
    let valid = this.validatePreFlightCheck(parsed);

    if (!valid) {
      console.warn('[SurveySubmitScreen] validatePreFlightCheck reason', this.state.reason);
      return false;
    }
    _dev([LOG_CTX, 'SurveySubmitScreen'], 'this', this);
    return parsed;
  };

  setParsedData(data) { this.parsed_data = data }

  setParsedDataState(_data) {
    if (this._isMounted) {
      _dev([LOG_CTX, 'SurveySubmitScreen'],
         'setState',
         JSON.stringify(_data)
      );
      this.setState({parsed_data: _data});
    }
  }


  getParsedData() {
    let parsed = this.state.parsed_data;
    _dev([LOG_CTX, 'SurveySubmitScreen'], 'getParsedData', parsed);
    if(!parsed) { return false; }
    return parsed;
  }

  validatePreFlightCheck = (_data) => {
    let schema = SoundscapeSchema;
    _dev([LOG_CTX, 'validatePreFlightCheck'], 'schema', schema);
    let schema_size = Object.keys(schema).length;
    let schema_sum = object_keys_checksum(schema);

    // QUICK CHECK THAT NO KEYS ARE MISSING
    if (Object.keys(_data).length !== schema_size) {
      this.setState({ reason: 'keys missing' });
      console.log(
        '[validatePreFlightCheck] keys vs schema length 1',
        `'tested key length: ${Object.keys(_data).length}`,
        `expected:', ${schema_size}`
      );
      return false;
    }

    // QUICK CHECK THAT NO KEYS ARE THE SAME
    if (object_keys_checksum(_data) !== schema_sum) {
      this.setState({ reason: 'invalid keys' });
      console.log(
        '[validatePreFlightCheck] keys vs schema sum 2',
        'keys different or invalid got:', object_keys_checksum(_data),
        'expected', schema_size
      );

      return false;
    }

    return true;
  }


  updateSoundfile = (fileName) => {
    if (this._isMounted) {
      let updated = updatePendingtToUploaded(fileName);
      if (updated) { this.setState({ saved_local_file: true }) }
    }
  };


  onUploadCompleted() {
    // STOP HANDLING STATE UPDATES ==========
    // DO ALL UPDATES IN BACKGORUND OR IGNORE
    if (this.isCancelled) { this.naviateToHome() }
    if (this.done === 111) { this.naviateToHome() }
    else {
      // STARTS A COUNTDONW AFTER THE SUBMITTER
      // RETURN SUCESSFULLY. AFTER THE TIMEOUT
      // REFERENCE THE VALUE OF DONE TO DETERMINE
      // WHICH PROCESS IS NOT WORKING CORRECTLY AND
      // MOVE IT TO BACKGROUND OR SCHEDULE IT FOR
      // THE NEXT LOGIN/JOB CYCLE ===============
      this.submitTimeout = setTimeout(
        ()=>{this.onActivityTimeout()},
        MAX_SUBMIT_WAIT
      );
    }
  }


  onActivityFinished() {
    if (this.submitTimeout){ clearTimeout(this.submitTimeout); this.submitTimeout = null; }
    this.finishInBackground = true;
    this.naviateToHome();
  }

  _onFinishButton() { this.onActivityFinished() }
  onActivityTimeout (){ this.isCancelled = true }
  onDoneUploadRemote () { this.done = this.done + 100; this.onUploadCompleted() }
  onDoneSaveDatabase () { this.done = this.done + 10; this.onUploadCompleted() }
  onDoneUpdateLocalId () { this.done = this.done + 1; this.onUploadCompleted() }
  naviateToHome() { this.props.navigation.navigate('Main') }

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
                  title={'Finish'}
                  onPress={this._onFinishButton}
                  style={_styles.button_default}
                  color={_colors.PRIMARY}
                />
                <MonoText style={{color: 'white'}}>
                  {this.state.survey_data_formdata
                    ? JSON.stringify(this.state.survey_data_formdata)
                    : JSON.stringify(this.state.soundscape_data)}
                </MonoText>
                <MonoText style={{color: 'white'}}>{this.survey_json_string}</MonoText>
              </Section>
            </CenterView>
          </PadView>
        </RootView>
      </ImageBackground>
    );
  }
}

export { SurveySubmitScreen };
