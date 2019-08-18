import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Platform, StatusBar, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
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
        <AppNavigator />
      </View>
    );
  }
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
