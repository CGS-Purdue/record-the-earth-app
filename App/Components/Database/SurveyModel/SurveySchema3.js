// soundscape android
//
// $_POST ["anthro"]
// $_POST ["bio"]
// $_POST ["emotion"]
// $_POST ["geo"]
//
// $_POST ["description"]
// $_POST ["datetime"]
// $_POST ["LatLong"]; | Lat,Long
// $_POST ["filename"]
// $_POST ["duration"]
// $_POST ["appVersion"]
// $_POST ["deviceModel"]
// $_POST ["osVersion"]
//
// $_POST ["uploadToken"]
//
// DEPRECATED VALUES
// ($_POST["LocationEnabled"])
// ($_POST["Date"])
// ($_POST["Time"])
// ($_POST["Altitude"])

const bio = {
  birds: false,
  frogs: false,
  insects: false,
  mammals: false,
};

const emotion = {
  curious: false,
  happy: false,
  relax: false,
  stress: false,
};

const geo = {
  rain: false,
  thunder: false,
  water: false,
  wind: false,
};

const anthro = {
  alarms: false,
  machines: false,
  talking: false,
  vehicles: false,
};

const obMerge = (base, update, ...override) => {
  return Object.assign({}, base, update, ...override);
};

const TagsSchema = obMerge({ bio }, { emotion }, { geo }, { anthro });

const SounscapeData = obMerge(TagsSchema, {
  description: '',
  datetime: '',
  LatLong: '0,0',
  filename: null,
  duration: 0,
  appVersion: 'record-the-earth@latest',
  deviceModel: '',
  osVersion: '',
});

var SoundscapeSchema = obMerge({}, SounscapeData, TagsSchema);
var SoundscapeSchemaKeys = Object.keys(SounscapeData);

export { SoundscapeSchema, SoundscapeSchemaKeys };
