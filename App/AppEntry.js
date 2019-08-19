import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import App from './App';

if (__DEV__) {
  activateKeepAwake();
}

console.log(registerRootComponent);

registerRootComponent(App);