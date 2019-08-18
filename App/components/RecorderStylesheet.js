import React from 'react';
import{ StyleSheet, Platform } from 'react-native';

import { ThemeIcons } from '../Theme/Icons';
import { Layout } from '../Theme/Layout';
import { ThemeFonts } from '../Theme/Fonts';


const BACKGROUND_COLOR = '#FFF8ED';
const LIVE_COLOR = '#FF0000';
const DISABLED_OPACITY = 0.5;
const RATE_SCALE = 3.0;


const RecorderStylesheet = StyleSheet.create({
  emptyContainer: {
    alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
    minHeight: Layout.HEIGHT,
    maxHeight: Layout.HEIGHT,
  },
  noPermissionsText: {
    textAlign: 'center',
  },
  wrapper: {},
  halfScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: Layout.HEIGHT / 2.0,
    maxHeight: Layout.HEIGHT / 2.0,
  },
  recordingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: ThemeIcons.record.height,
    maxHeight: ThemeIcons.record.height,
  },
  recordingDataContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: ThemeIcons.record.height,
    maxHeight: ThemeIcons.record.height,
    minWidth: ThemeIcons.record.width * 3.0,
    maxWidth: ThemeIcons.record.width * 3.0,
  },
  recordingDataRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: ThemeIcons.recording.height,
    maxHeight: ThemeIcons.recording.height,
  },
  playbackContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: ThemeIcons.thumb1.height * 2.0,
    maxHeight: ThemeIcons.thumb1.height * 2.0,
  },
  playbackSlider: {
    alignSelf: 'stretch',
  },
  liveText: {
    color: LIVE_COLOR,
  },
  recordingTimestamp: {
    paddingLeft: 20,
  },
  playbackTimestamp: {
    textAlign: 'right',
    alignSelf: 'stretch',
    paddingRight: 20,
  },
  image: {
    backgroundColor: BACKGROUND_COLOR,
  },
  textButton: {
    backgroundColor: BACKGROUND_COLOR,
    padding: 10,
  },
  buttonsContainerBase: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainerTopRow: {
    maxHeight: ThemeIcons.muted.height,
    alignSelf: 'stretch',
    paddingRight: 20,
  },
  playStopContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: (ThemeIcons.play.width + ThemeIcons.stop.width) * 3.0 / 2.0,
    maxWidth: (ThemeIcons.play.width + ThemeIcons.stop.width) * 3.0 / 2.0,
  },
  volumeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: Layout.WIDTH / 2.0,
    maxWidth: Layout.WIDTH / 2.0,
  },
  volumeSlider: {
    width: Layout.WIDTH / 2.0 - ThemeIcons.muted.width,
  },
  buttonsContainerBottomRow: {
    maxHeight: ThemeIcons.thumb1.height,
    alignSelf: 'stretch',
    paddingRight: 20,
    paddingLeft: 20,
  },
  rateSlider: {
    width: Layout.WIDTH / 2.0,
  },
});

export { RecorderStylesheet }
