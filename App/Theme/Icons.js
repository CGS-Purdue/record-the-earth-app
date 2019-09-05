import Ionicons from '@expo/vector-icons';
import { Icon } from '../Components/Icon';
import { IconAssets } from './Assets';

// class Icon {
//   constructor(name, module, width, height) {
//     this.name = name
//     this.module = module;
//     this.width = width;
//     this.height = height;
//     Asset.fromModule(this.module).downloadAsync();
//   }
// };

// NEEDS TO LOAD AT THE SAME TIME AS THE OTHER ASSETS IN THE BUNDLE
function createIcon(name, module, width, height) {
  return new Icon(name, module, width, height);
}

function getIcon(key, map) {
  var result = map[key];
  return {
    name: result.name,
    module: result.module,
    width: result.width,
    height: result.height,
  };
}

// NEEDS TO LOAD AT THE SAME TIME AS THE OTHER ASSETS IN THE BUNDLE
function mapIcon(name, module, width, height) {
  return {
    name: name,
    module: module,
    width: width,
    height: height,
  };
}

function getThemeIcons(map, assets) {
  let icons = {};

  for (let key of Object.keys(map)) {
    let config = map[key];
    icons[key] = mapIcon(key, assets[key], config[1], config[2]);
  }
  return icons;
}

function loadThemeIcons(set) {
  let icons = {};
  for (let key of Object.keys(set)) {
    let icon = set[key];
    icons[key] = new Icon(icon.name, icon.module, icon.width, icon.height);
  }
  return icons;
}

const ICON_MAP = {
  icon_list: ['list.png', 50, 50],
  icon_muted: ['muted.png', 67, 58],
  icon_pause: ['pause.png', 34, 51],
  icon_play: ['play.png', 34, 51],
  icon_record: ['record.png', 70, 119],
  icon_recording: ['recording.png', 20, 14],
  icon_stop: ['stop.png', 22, 22],
  icon_thumb1: ['thumb1.png', 18, 19],
  icon_thumb2: ['thumb2.png', 15, 19],
  icon_track1: ['track1.png', 166, 5],
  icon_unmuted: ['unmuted.png', 67, 58],
};

const _icon_assets = IconAssets;

const IconDictionary = getThemeIcons(ICON_MAP, _icon_assets);

const ThemeIcons = {
  Icons: IconDictionary,
  load: loadThemeIcons,
  createIcon: createIcon,
  getIcon: getIcon,
};

export { ThemeIcons, Ionicons };
