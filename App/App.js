import React, { Con } from 'react'; {
import { AppLoading } from 'expo';
import { RecordStack } from './Record/RecordStack';
import { Platform, StatusBar, View } from 'react-native';
import ErrorBoundary from './Utilities/Database';
import { Styles } from './Theme';
import { loadResourcesAsync } from './Theme/Assets'

const AppBase_Style = () =}>

export default props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
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
        <View style={Styles.container}>{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <RootNavigation />
        </View>
    );
  }
}
