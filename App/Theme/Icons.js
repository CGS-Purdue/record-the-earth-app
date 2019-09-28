import * as IconFunctions from '../Components/Icon/IconFunctions';
import { IconAssets } from './Assets';

const ICON_MAP = {
  icon_emblem: ['icon-emblem.png', 40, 40],
};

const IconDictionary = IconFunctions.getThemeIcons(ICON_MAP, IconAssets);

const ThemeIcons = {
  Icons: IconDictionary,
  load: IconFunctions.loadThemeIcons,
  createIcon: IconFunctions.createIcon,
  getIcon: IconFunctions.getIcon,
};

export { ThemeIcons };
