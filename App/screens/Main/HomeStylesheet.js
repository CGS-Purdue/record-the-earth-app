import React from 'react';
import{ StyleSheet, Platform } from 'react-native';
import { Layout, ThemeIcons } from '../../Theme';


const DISABLED_OPACITY = 0.5;
const BACKGROUND_COLOR = '#FFF8ED';
const LIVE_COLOR = '#FF0000';
const RATE_SCALE = 3.0;

const HomeStylesheet = StyleSheet.create({
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
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    backgroundColor: BACKGROUND_COLOR,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedText: {
    textAlign: 'center',
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
  },

  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
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
});


export { HomeStylesheet }
