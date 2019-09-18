import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { App }  from './App';
import { initalAppSetup } from './LifeCycle/InitialSetup';

if (__DEV__) {
  activateKeepAwake();
  //   YellowBox.ignoreWarnings([
  //     'Warning: ...',
  //     'Warning: Async Storage',
  //     'Warning: NetInfo',
  //   ]);
  initalAppSetup();
} else {
  initalAppSetup();
}
registerRootComponent(App);
