import LogoMain  from '../assets/img/logo/logo-rte-lg.png';
import BgMain  from '../assets/img/bg.jpg';
import Splash  from '../assets/img/splash.jpg';


import { loadAsync as loadFontsAsync}  from 'expo-font';
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

// // fonts
//
// import 'NunitoSans-Black.ttf'                  as nunitosans_black_ttf;
// import 'Daniel-Black.otf'                      as daniel_black_otf;
// import 'NunitoSans-Regular.ttf'                as nunitosans_regular_ttf ;
// import 'NunitoSans-Bold.ttf'                   as nunitosans_bold_ttf;
// import 'OpenSans-Light-webfont.ttf'            as opensans_lightwebfont_ttf;
// import 'OpenSans-Regular-webfont.woff'         as opensans_regularwebfont_woff;
// import 'OpenSans-Light-webfont.svg'            as opensans_lightwebfont_svg;
// import 'OpenSans-Regular-webfont.svg'          as opensans_regularwebfont_svg;
// import 'OpenSans-Regular-webfont.eot'          as opensans_regularwebfont_eot;
// import 'OpenSans-Light-webfont.eot'            as opensans_lightwebfont_eot;
// import 'OpenSans-Light-webfont.woff'           as opensans_lightwebfont_woff;
// import 'OpenSans-Regular-webfont.ttf'          as opensans_regularwebfont_ttf;
//
//
// const OpenSans = {
//   { opensans_lightwebfont_ttf  }
//   { opensans_regularwebfont_woff  }
//   { opensans_lightwebfont_svg  }
//   { opensans_regularwebfont_svg  }
//   { opensans_regularwebfont_eot  }
//   { opensans_lightwebfont_eot  }
//   { opensans_lightwebfont_woff  }
//   { opensans_regularwebfont_ttf  }
//
// }



const REL_PATH = '..';
const ASSET_DIR = 'assets';
const FONT_DIR = 'assets';
const IMAGE_DIR = 'images';
const ICON_DIR = 'icons';

const ICON_ASSETS = {
  record:    require('../assets/icons/record.png'),
  recording: require('../assets/icons/recording.png'),
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
