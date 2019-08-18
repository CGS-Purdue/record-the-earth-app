import Ionicons from '@expo/vector-icons';
import { Asset } from 'expo-asset';
import { IMAGE_ASSETS } from './Assets';

class Icon {
  constructor(name, module, width, height) {
    this.name = name
    this.module = module;
    this.width = width;
    this.height = height;
    Asset.fromModule(this.module).downloadAsync();
  };
};


function getIcon(name, module, width, height) {
  return new Icon(name, module, width, height);
}

function getThemeIcons(map, assets) {
  let icons = {};
  for (let key of Object.keys(map)) {
    let config = map[key];
    icons[key] = getIcon( key, assets[key], config[1], config[2]);
  }
  return icons;
}

const RECORD_BUTTON    = new Icon('record', IMAGE_ASSETS['record'], 70, 119);
const RECORDING        = new Icon('recording', IMAGE_ASSETS['recording'], 20, 14);
const PLAY_BUTTON      = new Icon('play', IMAGE_ASSETS['play'], 34, 51);
const PAUSE_BUTTON     = new Icon('pause', IMAGE_ASSETS['pause'], 34, 51);
const STOP_BUTTON      = new Icon('stop', IMAGE_ASSETS['stop'], 22, 22);
const MUTED_BUTTON     = new Icon('muted', IMAGE_ASSETS['muted'], 67, 58);
const UNMUTED_BUTTON   = new Icon('unmuted', IMAGE_ASSETS['unmuted'], 67, 58);
const THUMB_1          = new Icon('thumb_1', IMAGE_ASSETS['thumb_1'], 18, 19);
const TRACK_1          = new Icon('track_1', IMAGE_ASSETS['track_1'], 166, 5);
const THUMB_2          = new Icon('thumb_2', IMAGE_ASSETS['thumb_2'], 15, 19);


const ICON_MAP = {
  'record':    ['stop_button.png', 70, 119],
  'recording': ['record_icon.png', 20, 14],
  'play':      ['play_button.png', 34, 51],
  'pause':     ['pause_button.png', 34, 51],
  'stop':      ['stop_button.png', 22, 22],
  'muted':     ['muted_button.png', 67, 58],
  'unmuted':   ['unmuted_button.png', 67, 58],
  'thumb_1':   ['thumb_1.png', 18, 19],
  'track_1':   ['track_1.png', 166, 5],
  'thumb_2':   ['thumb_2.png', 15, 19],
};

const ThemeIcons = getThemeIcons(ICON_MAP, IMAGE_ASSETS);

export {
  ThemeIcons,
  Ionicons,
  RECORD_BUTTON,
  RECORDING,
  PLAY_BUTTON,
  PAUSE_BUTTON,
  STOP_BUTTON,
  MUTED_BUTTON,
  UNMUTED_BUTTON,
  THUMB_1,
  TRACK_1,
  THUMB_2,
}
