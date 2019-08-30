import Ionicons from "@expo/vector-icons"
import { Asset } from 'expo-asset';
import { IconAssets } from './Assets';

class Icon {
  constructor(name, module, width, height) {
    this.name = name
    this.module = module;
    this.width = width;
    this.height = height;
    Asset.fromModule(this.module).downloadAsync();
  }
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
  'list':      ['list.png', 50, 50],
  'muted':     ['muted.png', 67, 58],
  'pause':     ['pause.png', 34, 51],
  'play':      ['play.png', 34, 51],
  'record':    ['record.png', 70, 119],
  'recording': ['recording.png', 20, 14],
  'stop':      ['stop.png', 22, 22],
  'thumb1':   ['thumb1.png', 18, 19],
  'thumb2':   ['thumb2.png', 15, 19],
  'track1':   ['track1.png', 166, 5],
  'unmuted':   ['unmuted.png', 67, 58],
};

const ThemeIcons = getThemeIcons(ICON_MAP, IconAssets);

export { ThemeIcons, Ionicons }
