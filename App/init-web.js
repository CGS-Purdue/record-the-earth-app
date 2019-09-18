import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { AppRegistry, Platform } from 'react-native';
import { App }  from './App';

AppRegistry.registerComponent('RecordTheEarthExpoDevelopment', () => App);

if (Platform.OS === 'web') {
    AppRegistry.runApplication('RecordTheEarthExpoDevelopment', {
        rootTag: document.getElementById('root'),
    });
}

if (__DEV__) {
  activateKeepAwake();
}


registerRootComponent(App);
