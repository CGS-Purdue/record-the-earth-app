import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';
import { m, p, textalign } from './LayoutStyles';

const DISABLED_OPACITY = 0.5;
const BACKGROUND_COLOR = '#FFF8ED';
const LIVE_COLOR = '#FF0000';
const RATE_SCALE = 3.0;
const SHUTTLEGRAY = '#60646d';
const TEXT_COLOR = ThemeColors.YEL_200;
const BUTTON_BG = ThemeColors.SHADE_LIGHTER_40;

const BtnContainer = Object.assign(m.b10, m.t20);
const bgImg = { width: '100%', height: '100%' };
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

const other_styles = {
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },

  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  emptyContainer: {
    alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
  },
  noPermissionsText: {
    textAlign: 'center',
  },
  wrapper: {},

  image: {
    backgroundColor: BACKGROUND_COLOR,
  },
  textButton: {
    backgroundColor: BACKGROUND_COLOR,
    padding: 10,
  },
};

const HomeGroupStyles = Object.assign(
  { BtnContainer },
  { bgImg },
  { BtnImg },
  { BtnBox },
  { BtnTxt }
);

const HomeStyles = StyleSheet.create(HomeGroupStyles);

export { HomeStyles };
