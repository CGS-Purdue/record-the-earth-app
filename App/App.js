import React, { Con } from 'react';
import { AppLoading } from 'expo';
import { RootNavigation } from './screens/RootNavigation';
import { Platform, StatusBar, View } from 'react-native';
import ErrorBoundary from './Utilities/ErrorBoundary';
import { Styles } from './Theme';
import { ThemeAssets } from './Theme/Assets'

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={ThemeAssets}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={Styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <RootNavigation />
     </View>
    );
  }
}
