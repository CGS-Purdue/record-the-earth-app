import { StyleSheet } from 'react-native';
import { ThemeColors } from '../Colors';
import { ThemeLayout } from '../Layout';
import { m, p, textalign } from './LayoutStyles';

const TEXT_COLOR = ThemeColors.YEL_200;
const BUTTON_BG = ThemeColors.SHADE_LIGHTER_40;
const bgImg = { width: '100%', height: '100%' };

const BtnContainer = Object.assign(m.b10, m.t10);
const BtnImg = {
  width: 100,
  backgroundColor: BUTTON_BG,
  height: 80,
  resizeMode: 'contain',
  marginTop: 3,
  marginLeft: -10,
};
const BtnBox = p.y20;
const BtnTxt = Object.assign(textalign.center, {
  fontSize: ThemeLayout.TEXT_SIZE_2,
  color: TEXT_COLOR,
  lineHeight: ThemeLayout.line_height_scale_150(ThemeLayout.TEXT_SIZE_2),
});

const LogoStyles = {
  flex: 1,
  width: 300,
  height: '20%',
  top: '10%',
  position: 'absolute',
  resizeMode: 'contain',
};

const AppRootStyles = {
  app_inner_wrap: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  app_bg: {
    flex: 1,
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
    backgroundColor: ThemeColors.TRANSPARENT,
  },
  app_safearearoot: {
    display: 'flex',
    flex: 1,
  },
  app_rootview: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
    backgroundColor: ThemeColors.APP_CONTAINER_BGCOLOR, //'rgba(29,36,38,1)',
  },
  app_bgimg: {
    width: '100%',
    height: '100%',
    left: 0,
    position: 'absolute',
    display: 'flex',
    flex: 1,
  },
  app_bgimg_wrap: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    flexBasis: '100%',
    backgroundColor: ThemeColors.TRANSPARENT,
    flex: 1,
  },
  app_bgimgbg_fill: {
    backgroundColor: 'rgba(299,0,30,.4)',
    position: 'absolute',
    height: '100%',
    left: 0,
    top: 0,
    width: '100%',
    flex: 1,
  },
};

const HomeGroupStyles = Object.assign(
  AppRootStyles,
  { BtnContainer },
  { bgImg },
  { BtnImg },
  { BtnBox },
  { BtnTxt }
);

const HomeStyles = StyleSheet.create(HomeGroupStyles);



export { HomeStyles };
