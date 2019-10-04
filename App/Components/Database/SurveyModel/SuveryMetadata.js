
const SurveyDefaults = {
  datetime: '',
  path: '',
  filename: '',
  description: '',
  duration: 0,
  location: '0,0',
  pid: null,
  isUploaded: false,
};

class Survey {
  constructor(options) {
    this.datetime = SurveyDefaults.datetime;
    this.path = SurveyDefaults.path;
    this.filename = SurveyDefaults.filename;
    this.description = SurveyDefaults.description;
    this.duration = SurveyDefaults.duration;
    this.location = SurveyDefaults.location;
    this.pid = SurveyDefaults.pid;
    this.isUploaded = SurveyDefaults.isUploaded;
  }
}

function initSoundscapeSuvey () {
  let survey = new Survey();
  let timestamp = Date.toISOString();
  survey.datetime = timestamp.toISOString();
  return survey;
}

export { Survey, initSoundscapeSuvey };
