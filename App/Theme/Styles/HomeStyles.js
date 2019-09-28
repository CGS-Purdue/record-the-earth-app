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

const HomeGroupStyles = Object.assign(
  { BtnContainer },
  { bgImg },
  { BtnImg },
  { BtnBox },
  { BtnTxt }
);

const HomeStyles = StyleSheet.create(HomeGroupStyles);

const LogoStyles = {
  flex: 1,
  width: 300,
  height: '20%',
  top: '10%',
  position: 'absolute',
  resizeMode: 'contain',
};

export { HomeStyles };
