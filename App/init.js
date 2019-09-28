import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { YellowBox } from 'react-native';
import App from './App';

if (__DEV__) {
  YellowBox.ignoreWarnings([
    'Warning: ...',
    'Warning: Async Storage',
    'Warning: NetInfo',
    'Warning: getConstants',
    'Warning: UIManager',
    "Accessing view manager configs directly off UIManager via UIManager['getConstants'] is no longer supported. Use UIManager.getViewManagerConfig('getConstants') instead.",
  ]);
  activateKeepAwake();
}

// if (Platform.OS === 'web') {
//   AppRegistry.registerComponent('RecordTheEarth3', () => App);
//   AppRegistry.runApplication('RecordTheEarth3', {
//     rootTag: document.getElementById('root'),
//   });
// }

registerRootComponent(App);
