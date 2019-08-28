import LogoMain  from '../assets/img/logo/logo-rte-lg.png';
import BgMain  from '../assets/img/bg.jpg';
import Splash  from '../assets/img/splash.jpg';
import JungleBg  from '../assets/img/jungle-geometry2.png';


import { loadAsync as loadFontsAsync } from 'expo-font';
import { Asset } from 'expo-asset';

// import '../static/assets/img/logo/logo-rte.png'                as logo_default;
// import '../static/assets/img/logo/logo-emblem.svg'             as logo_emblem;
// import '../static/assets/img/logo/logo-rte-stacked.png'        as logo_stacked;
// import '../static/assets/img/bg/splash-bg.jpg'                 as bg_splash;
// import '../static/assets/img/bg/bg-main.png'                   as bg_main;
// import '../static/assets/img/btn/btn-record-rec.png'           as btn_rec_start;
// import '../static/assets/img/btn/btn-record-stop.png'          as btn_rec_stop;
// import '../static/assets/img/btn/microphone-record.png'        as btn_mic;
// export {
//   logo_default,
//   logo_emblem,
//   logo_stacked,
//   bg_splash,
//   bg_main,
//   btn_rec_start,
//   btn_rec_stop,
//   btn_mic,
// };
// import 'OpenSans-Regular-webfont.ttf'          as opensans_regularwebfont_ttf;
// import 'OpenSans-Light-webfont.ttf'            as opensans_lightwebfont_ttf;

const REL_PATH = '..';
const ASSET_DIR = 'assets';
const FONT_DIR = 'assets';
const IMAGE_DIR = 'images';
const ICON_DIR = 'icons';

const ICON_ASSETS = {
  list:      require('../assets/icons/list.png'),
  muted:     require('../assets/icons/muted.png'),
  pause:     require('../assets/icons/pause.png'),
  play:      require('../assets/icons/play.png'),
  record:    require('../assets/icons/record.png'),
  recording: require('../assets/icons/recording.png'),
  stop:      require('../assets/icons/stop.png'),
  thumb1:    require('../assets/icons/thumb1.png'),
  thumb2:    require('../assets/icons/thumb2.png'),
  track1:    require('../assets/icons/track1.png'),
  unmuted:   require('../assets/icons/unmuted.png'),
}

const IMAGE_ASSETS = {
  JungleBg,
  LogoMain,
  BgMain,
  Splash,
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
