import { loadAsync as loadFontsAsync}  from 'expo-font';
import { Asset } from 'expo-asset';

const REL_PATH = '..';
const ASSET_DIR = 'assets';
const FONT_DIR = 'assets';
const IMAGE_DIR = 'images';
const ICON_DIR = 'icons';

const ICON_ASSETS = {
  record:    require('../assets/icons/stop.png'),
  recording: require('../assets/icons/record.png'),
  play:      require('../assets/icons/play.png'),
  pause:     require('../assets/icons/pause.png'),
  stop:      require('../assets/icons/stop.png'),
  muted:     require('../assets/icons/muted.png'),
  unmuted:   require('../assets/icons/unmuted.png'),
  thumb1:    require('../assets/icons/thumb1.png'),
  track1:    require('../assets/icons/track1.png'),
  thumb2:    require('../assets/icons/thumb2.png'),
}

const IMAGE_ASSETS = {

}

const FONT_ASSETS = {
  'space-mono' :require('../assets/fonts/SpaceMono-Regular.ttf'),
  'cutive-mono': require('../assets/fonts/CutiveMono-Regular.ttf'),
  'ionicons': require('../assets/fonts/ionicicons.ttf'),
}


async function loadResourcesAsync() {
  const loadIcons = (images) => {
    for (image_module of Object.values(images)) {
      Asset.fromModule(image_module).downloadAsync();
    }
  };
  await Promise.all([
    loadIcons(ICON_ASSETS),
    loadFontsAsync(FONT_ASSETS),
  ]);
}

export {
  IMAGE_ASSETS,
  FONT_ASSETS,
  ICON_ASSETS,
  loadResourcesAsync,
}
