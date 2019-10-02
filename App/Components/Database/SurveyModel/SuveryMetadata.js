import { obMerge } from '../../../Utilities/Functions';


const Soundfile = {
  datetime: '',
  path: '',
  filename: '',
  description: '',
  duration: 0,
  location: '0,0',
  pid: null,
  isUploaded: false,
};

class SurveySoundfile {
  constructor(options) {
    this.datetime = '';
    this.path = '';
    this.filename = '';
    this.description = '';
    this.duration = 0;
    this.location = '0,0';
    this.pid = null;
    this.isUploaded = false;
  }
}




function NewSoundscapeSuvey () {
  timestamp = Date.toISOString();
  let soundscapeSchema = Object.create(null);
  soundscapeSchema.datetime = timestamp.toISOString();
  soundscapeSchema.location = '0,0';
  soundscapeSchema.pid = null;
  soundscapeSchema.isUploaded = false;
  soundscapeSchema.duration = 0;
  soundscapeSchema.filename = '';
  soundscapeSchema.path = '';
  soundscapeSchema.description = '';
}





export { SurveySoundfile };
