import Ionicons from "@expo/vector-icons"
import { Asset } from 'expo-asset';
import { ICON_ASSETS } from './Assets';

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

const ICON_MAP = {
  'record':    ['record.png', 70, 119],
  'recording': ['recording.png', 20, 14],
  'play':      ['play.png', 34, 51],
  'pause':     ['pause.png', 34, 51],
  'stop':      ['stop.png', 22, 22],
  'list':      ['list.png', 50, 50],
  'muted':     ['muted.png', 67, 58],
  'unmuted':   ['unmuted.png', 67, 58],
  'thumb1':   ['thumb1.png', 18, 19],
  'track1':   ['track1.png', 166, 5],
  'thumb2':   ['thumb2.png', 15, 19],
};

const ThemeIcons = getThemeIcons(ICON_MAP, ICON_ASSETS);

export {
  ThemeIcons,
  Ionicons,
}
