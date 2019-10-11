import 'expo/AppEntry'


import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { YellowBox } from 'react-native';
import App from './App';

// if (__DEV__) {App Entry
//  Expo AppEntry has built in support for error boundaries in development mode. In the future Notifications and Splash Screen features may be added as well. When used with babel-preset-expo you can eliminate all of the unused modules from the expo package, this means if you only import AppEntry then things like Constants, and Camera would be completely removed during the production build (expo build:web).
// Web-only method
// If you don't want to change how your native app works do the following:
// Install Expo: yarn add expo
/// Create a index.web.js and add the line import 'expo/AppEntry'


registerRootComponent(App);
