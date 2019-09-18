import { StyleSheet } from 'react-native';
import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';
import { m, p, textalign } from './LayoutStyles';

const TEXT_COLOR = ThemeColors.YEL_200;
const BUTTON_BG = ThemeColors.SHADE_LIGHTER_40;
const bgImg = { width: '100%', height: '100%' };

const BtnContainer = Object.assign(m.b10, m.t20);
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
  fontSize: Layout.TEXT_SIZE_2,
  color: TEXT_COLOR,
  lineHeight: Layout.line_height_scale_150(Layout.TEXT_SIZE_2),
});

const HomeGroupStyles = Object.assign(
  { BtnContainer },
  { bgImg },
  { BtnImg },
  { BtnBox },
  { BtnTxt }
);

const HomeStyles = StyleSheet.create(HomeGroupStyles);

export { HomeStyles };
