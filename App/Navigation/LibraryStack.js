import { createStackNavigator } from '../node_modules/react-navigation-stack/lib/module';
import { SoundscapeLibraryScreen } from '../Screens/Library/SoundscapeLibraryScreen';
import { SoundFileLibraryScreen } from '../Screens/Library/SoundFileLibraryScreen';
import { SoundscapePlayerScreen } from '../Screens/Library/SoundscapePlayerScreen';

const LibraryStack = createStackNavigator(
  {
    SoundFileLibrary: { screen: SoundFileLibraryScreen },
    SoundscapeLibrary: { screen: SoundscapeLibraryScreen },
    SoundscapePlayer: { screen: SoundscapePlayerScreen },
  },
  {
    initialRouteName: 'SoundFileLibrary',
    mode: 'card',
    headerMode: 'headerMode',
    headerBackTitleVisible: false,
    headerTransitionPreset: 'fade-in-place',
    headerLayoutPreset: 'left',
    tabBarVisible: false,
  }
);

export { LibraryStack };
