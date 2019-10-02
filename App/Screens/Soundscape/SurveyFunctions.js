import { SoundscapeSchema } from '../../Components/Database/SurveyModel/SurveySchema3';


const initSoundscape = () => {
  let soundscape = Object.assign({}, SoundscapeSchema);
  let timestamp = new Date();
  soundscape_data.datetime = timestamp.toISOString();
  return soundscape;
}


const getSoundscape = () => {
  return this.state.soundscape_data;
}

const getNavigationParams = () => {
    return this.props.navigation.state.params || {};
}

const getIncomingSurveyData = () => {
    let params = this.getNavigationParams();
    this.incoming_data = params;
    if (params.soundscape_data) {
      this.soundscape_data = params.soundscape_data;
    }
  }

const updateSoundscapeData = (key, data) => {
    let soundscapeData = this.soundscape_data;
    let surveyData = this.getSurveyData();
    let soundscapeUpdate =  { [surveyData.key]: surveyData.data }
    soundscapeData = Object.assign(Object.create(null), soundscapeData, soundscapeUpdate);
    this.soundscape_data = soundscapeData;
    return soundscapeData;
  }

const onTaskCompleted = () => {
    this.updateSurveyData();
    let data = this.updateSoundscapeData();
    this.navigateForward(data);
  }

const navigateForward = (data) => {
    this.props.navigation.navigate({
      routeName: 'SoundscapeSurveyEmo',
      params: {
        soundscape_data: data,
      },
    });
  }

const updateSurveyData = (key, data) => {
  let _surveyData = filterFalse({
    insects: this.state.key1,
    birds: this.state.key2,
    mammals: this.state.key3,
    frogs: this.state.key4,
  })
  if (!_surveyData){
    _surveyData = 'none';
  }
  this.setState({ surveyData: _surveyData });
};

const getSurveyData = () => {
  let surveyData = this.state.surveyData;
  let surveyKey = this.surveyKey;
  return {
    key: surveyKey,
    data: surveyData,
  };
}


const _setSuveryItemState = (item) => {
    let newState = Object.create(null);
    newState[item.id] = item.checked;
    this.setState(newState);
    this.updateSurveyData();
}
