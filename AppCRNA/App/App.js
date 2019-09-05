import { rntool } from './init';
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Platform, StatusBar, View, StyleSheet } from 'react-native';
import RootNavigation from './screens/RootNavigation';
import { loadResourcesAsync } from './Theme/Assets';
import styles from './Theme/Stylesheet';

export default function App(props) {
  const [
    isLoadingComplete,
    setLoadingComplete
  ] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {

    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <RootNavigation />
      </View>
    );
  }
}

function debugLogger(msg) {
  console.log('process.env', process.env);
  if (process.env.DEBUG_LOGGING) {
    console.log(`Debug Logging : ${process.env.DEBUG_LOGGING}`);
    console.log(msg);
  } else {
    return;
  }
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
  console.log('is __DEV__', __DEV__);
  debugLogger('Finished Loading');
}
