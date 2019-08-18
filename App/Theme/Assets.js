import { loadAsync as loadFontsAsync}  from 'expo-font';
import { Asset } from 'expo-asset';

const REL_PATH = '..';
const ASSET_DIR = 'assets';
const FONT_DIR = 'assets';
const IMAGE_DIR = 'images';

const IMAGE_ASSETS = {
  record:    require('../assets/images/stop_button.png'),
  recording: require('../assets/images/record_icon.png'),
  play:      require('../assets/images/play_button.png'),
  pause:     require('../assets/images/pause_button.png'),
  stop:      require('../assets/images/stop_button.png'),
  muted:     require('../assets/images/muted_button.png'),
  unmuted:   require('../assets/images/unmuted_button.png'),
  thumb_1:   require('../assets/images/thumb_1.png'),
  track_1:   require('../assets/images/track_1.png'),
  thumb_2:   require('../assets/images/thumb_2.png'),
}

const FONT_ASSETS = {
  'space-mono' :require('../assets/fonts/SpaceMono-Regular.ttf'),
  'cutive-mono': require('../assets/fonts/CutiveMono-Regular.ttf'),
  'ionicons': require('../assets/fonts/ionicicons.ttf'),
}


async function loadResourcesAsync() {
  const loadImages = (images) => {
    for (image_module of Object.values(images)) {
      Asset.fromModule(image_module).downloadAsync();
    }
  };
  await Promise.all([
    loadImages(IMAGE_ASSETS),
    loadFontsAsync(FONT_ASSETS),
  ]);
}

export {
  IMAGE_ASSETS,
  FONT_ASSETS,
  loadResourcesAsync,
}
