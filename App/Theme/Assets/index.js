import BTN_MICROPHONE from './btn/microphone.png'
import BTN_RECORD_REC from './btn/record-rec.png'
import BTN_RECORD_STOP from './btn/record-stop.png'
import FONTS_CUTIVEMONO_REGULAR from './fonts/CutiveMono-Regular.ttf'
import FONTS_IONICICONS from './fonts/ionicicons.ttf'
import FONTS_OPENSANS_LIGHT_WEBFONT from './fonts/OpenSans-Light-webfont.ttf'
import FONTS_OPENSANS_REGULAR_WEBFONT from './fonts/OpenSans-Regular-webfont.ttf'
import FONTS_SPACEMONO_REGULAR from './fonts/SpaceMono-Regular.ttf'
import ICONS_LIST from './icons/list.png'
import ICONS_MUTED from './icons/muted.png'
import ICONS_PAUSE from './icons/pause.png'
import ICONS_PLAY from './icons/play.png'
import ICONS_RECORD from './icons/record.png'
import ICONS_RECORDING from './icons/recording.png'
import ICONS_STOP from './icons/stop.png'
import ICONS_THUMB1 from './icons/thumb1.png'
import ICONS_THUMB2 from './icons/thumb2.png'
import ICONS_TRACK1 from './icons/track1.png'
import ICONS_UNMUTED from './icons/unmuted.png'
import IMG_BG from './img/bg.jpg'
import IMG_JUNGLE_GEOMETRY from './img/jungle-geometry.png'
import IMG_JUNGLE_GEOMETRY2 from './img/jungle-geometry2.png'
import IMG_JUNGLE_GEOMETRY3 from './img/jungle-geometry3.png'
import IMG_SPLASH from './img/splash.jpg'
import LOGO_EMBLEM from './logo/logo-emblem.svg'
import LOGO_GLOW from './logo/logo-glow.png'
import LOGO_LONG from './logo/logo-long.png'
import LOGO_LARGE from './logo/logo-rte-lg.png'

const IconAssets = {
  list: ICONS_LIST,
  muted: ICONS_MUTED,
  pause: ICONS_PAUSE,
  play: ICONS_PLAY,
  record: ICONS_RECORD,
  recording: ICONS_RECORDING,
  stop: ICONS_STOP,
  thumb1: ICONS_THUMB1,
  thumb2: ICONS_THUMB2,
  track1: ICONS_TRACK1,
  unmuted: ICONS_UNMUTED,
};

const ButtonAssets = {
  record_stop: BTN_RECORD_STOP,
  record_rec: BTN_RECORD_REC,
  microphone: BTN_MICROPHONE,
};

const LogoAssets = {
  long: LOGO_LONG,
  large: LOGO_LARGE,
  glow: LOGO_GLOW,
  emblem: LOGO_EMBLEM,
};

const FontAssets = {
  cutivemono_regular: FONTS_CUTIVEMONO_REGULAR,
  opensans_light_webfont: FONTS_OPENSANS_LIGHT_WEBFONT,
  spacemono_regular: FONTS_SPACEMONO_REGULAR,
  ionicicons: FONTS_IONICICONS,
  opensans_regular_webfont: FONTS_OPENSANS_REGULAR_WEBFONT,
};

const ImageAssets = {
  background: IMG_BG,
  splash: IMG_SPLASH,
  img_jungle_geometry: IMG_JUNGLE_GEOMETRY,
  img_jungle_geometry2:IMG_JUNGLE_GEOMETRY2,
  img_jungle_geometry3: IMG_JUNGLE_GEOMETRY3,
};

const ThemeAssets = Object.assign(ButtonAssets, LogoAssets, FontAssets, ImageAssets, IconAssets);

export default ThemeAssets

export { ButtonAssets, LogoAssets, FontAssets, ImageAssets, IconAssets }
