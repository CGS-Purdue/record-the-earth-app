import * as IconFunctions from '../Components/Icon/IconFunctions';
import { IconAssets } from './Assets';

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
const IconDictionary = IconFunctions.getThemeIcons(ICON_MAP, _icon_assets);

const ThemeIcons = {
  Icons: IconDictionary,
  load: IconFunctions.loadThemeIcons,
  createIcon: IconFunctions.createIcon,
  getIcon: IconFunctions.getIcon,
};

export { ThemeIcons };
