import * as FileSystem from 'expo-file-system';
import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

import * as IntentLauncher from 'expo-intent-launcher';

// https://github.com/expo/expo/blob/master/packages/expo-intent-launcher/src/IntentLauncher.ts

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


//  Constants are from the source code of Settings:
//  https://developer.android.com/reference/android/provider/Settings.html
//  ACTION_ACCESSIBILITY_SETTINGS
//  ACTION_APP_NOTIFICATION_REDACTION
//  ACTION_CONDITION_PROVIDER_SETTINGS
//  ACTION_NOTIFICATION_LISTENER_SETTINGS
//  ACTION_PRINT_SETTINGS
//  ACTION_ADD_ACCOUNT_SETTINGS
//  ACTION_AIRPLANE_MODE_SETTINGS
//  ACTION_APN_SETTINGS
//  ACTION_APPLICATION_DETAILS_SETTINGS
//  ACTION_APPLICATION_DEVELOPMENT_SETTINGS
//  ACTION_APPLICATION_SETTINGS
//  ACTION_APP_NOTIFICATION_SETTINGS
//  ACTION_APP_OPS_SETTINGS
//  ACTION_BATTERY_SAVER_SETTINGS
//  ACTION_BLUETOOTH_SETTINGS
//  ACTION_CAPTIONING_SETTINGS
//  ACTION_CAST_SETTINGS
//  ACTION_DATA_ROAMING_SETTINGS
//  ACTION_DATE_SETTINGS
//  ACTION_DEVICE_INFO_SETTINGS
//  ACTION_DEVICE_NAME
//  ACTION_DISPLAY_SETTINGS
//  ACTION_DREAM_SETTINGS
//  ACTION_HARD_KEYBOARD_SETTINGS
//  ACTION_HOME_SETTINGS
//  ACTION_IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS
//  ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS
//  ACTION_INPUT_METHOD_SETTINGS
//  ACTION_INPUT_METHOD_SUBTYPE_SETTINGS
//  ACTION_INTERNAL_STORAGE_SETTINGS
//  ACTION_LOCALE_SETTINGS
//  ACTION_LOCATION_SOURCE_SETTINGS
//  ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS
//  ACTION_MANAGE_APPLICATIONS_SETTINGS
//  ACTION_MANAGE_DEFAULT_APPS_SETTINGS
//  ACTION_MEMORY_CARD_SETTINGS
//  ACTION_MONITORING_CERT_INFO
//  ACTION_NETWORK_OPERATOR_SETTINGS
//  ACTION_NFCSHARING_SETTINGS
//  ACTION_NFC_PAYMENT_SETTINGS
//  ACTION_NFC_SETTINGS
//  ACTION_NIGHT_DISPLAY_SETTINGS
//  ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS
//  ACTION_NOTIFICATION_SETTINGS
//  ACTION_PAIRING_SETTINGS
//  ACTION_PRIVACY_SETTINGS
//  ACTION_QUICK_LAUNCH_SETTINGS
//  ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS
//  ACTION_SECURITY_SETTINGS
//  ACTION_SETTINGS
//  ACTION_SHOW_ADMIN_SUPPORT_DETAILS
//  ACTION_SHOW_INPUT_METHOD_PICKER
//  ACTION_SHOW_REGULATORY_INFO
//  ACTION_SHOW_REMOTE_BUGREPORT_DIALOG
//  ACTION_SOUND_SETTINGS
//  ACTION_STORAGE_MANAGER_SETTINGS
//  ACTION_SYNC_SETTINGS
//  ACTION_SYSTEM_UPDATE_SETTINGS
//  ACTION_TETHER_PROVISIONING_UI
//  ACTION_TRUSTED_CREDENTIALS_USER
//  ACTION_USAGE_ACCESS_SETTINGS
//  ACTION_USER_DICTIONARY_INSERT
//  ACTION_USER_DICTIONARY_SETTINGS
//  ACTION_USER_SETTINGS
//  ACTION_VOICE_CONTROL_AIRPLANE_MODE
//  ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE
//  ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE
//  ACTION_VOICE_INPUT_SETTINGS
//  ACTION_VPN_SETTINGS
//  ACTION_VR_LISTENER_SETTINGS
//  ACTION_WEBVIEW_SETTINGS
//  ACTION_WIFI_IP_SETTINGS
//  ACTION_WIFI_SETTINGS
//  ACTION_WIRELESS_SETTINGS
//  ACTION_ZEN_MODE_AUTOMATION_SETTINGS
//  ACTION_ZEN_MODE_EVENT_RULE_SETTINGS
//  ACTION_ZEN_MODE_EXTERNAL_RULE_SETTINGS
//  ACTION_ZEN_MODE_PRIORITY_SETTINGS
//  ACTION_ZEN_MODE_SCHEDULE_RULE_SETTINGS
//  ACTION_ZEN_MODE_SETTINGS
