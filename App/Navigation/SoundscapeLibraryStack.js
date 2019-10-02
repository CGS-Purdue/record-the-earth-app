import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { SoundFileLibraryScreen } from '../Screens/Library/SoundFileLibraryScreen';
import { SoundscapeLibraryScreen } from '../Screens/Library/SoundscapeLibraryScreen';
import { SoundscapePlayerScreen } from '../Screens/Library/SoundscapePlayerScreen';



const SoundscapeLibraryStack = createStackNavigator({
  SoundscapeLibrary: { screen: SoundscapeLibraryScreen },
  SoundFileLibrary: { screen: SoundFileLibraryScreen },
  SoundscapePlayer: { screen: SoundscapePlayerScreen },
}, {
  initialRouteName: 'SoundscapeLibrary',
  mode: 'card',
  headerMode: 'headerMode',
  headerBackTitleVisible: false,
  headerTransitionPreset: 'fade-in-place',
  headerLayoutPreset: 'left',
  tabBarVisible: false,
});

SoundscapePlayerScreen.navigationOptions = {
  header: null,
  mode: 'modal',
  headerMode: 'none',
  tabBarVisible: false,
  title: 'recorder'
};

// SoundscapePlayerScreen.navigationOptions = ({ navigation }) => {
// let tabBarVisible = true;  return { tabBarVisible } },
// SoundscapeLibraryScreen.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true; return { tabBarVisible };
// };


export { SoundscapeLibraryStack };
