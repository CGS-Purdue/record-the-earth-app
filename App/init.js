import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { YellowBox } from 'react-native';
import { App }  from './App';
import { initalAppSetup } from './Utilities/InitialSetup';

// THEME PROVIER
// https://callstack.github.io/react-native-paper/getting-started.html
// import * as React from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// export default function Main() {
//   return (
//     <PaperProvider>
//       <App />
//     </PaperProvider>
//   );
// }
//
// AppRegistry.registerComponent('main', () => Main);


if (__DEV__) {

  YellowBox.ignoreWarnings([
    'Warning: ...',
    'Warning: Async Storage',
    'Warning: NetInfo',
    'Warning: getConstants',
    "Accessing view manager configs directly off UIManager via UIManager['getConstants'] is no longer supported. Use UIManager.getViewManagerConfig('getConstants') instead.",
  ]);


  activateKeepAwake();

  initalAppSetup();

} else {

  initalAppSetup();

}
registerRootComponent(App);
