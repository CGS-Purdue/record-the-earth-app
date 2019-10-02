import * as FileSystem from 'expo-file-system';
import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

import * as IntentLauncher from 'expo-intent-launcher';



// <Button
//   onPress={() => {
//     this.getShareFile();
//   }}
//   title="UPLOAD"
//   color="#841584"
//   accessibilityLabel="PUSH TO UPLOAD"
// />
const getShareFile = async (fileUri) => {
  try {
    await FileSystem.getContentUriAsync(fileUri)
      .then((content) => {
        console.log(content);
        IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
          data: content.uri,
          flags: 1,
        });
      });
  } catch (e) {
    console.log('[getShareFile] error', e);
  }
};

export {
  getShareFile,
};
