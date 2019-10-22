import { createStackNavigator } from '../node_modules/react-navigation-stack/lib/module';
import { SoundscapeListScreen } from '../Screens/Library/SoundscapeListScreen';
import { SoundFileListScreen } from '../Screens/Library/SoundFileListScreen';
import { SoundscapePlayerScreen } from '../Screens/Library/SoundscapePlayerScreen';

const LibraryStack = createStackNavigator(
  {
    Soundfiles: { screen: SoundFileListScreen },
    Soundscapes: { screen: SoundscapeListScreen },
    SoundscapePlayer: { screen: SoundscapePlayerScreen },
  },
  {
    initialRouteName: 'Soundfiles',
    mode: 'card',
    headerMode: 'headerMode',
    headerBackTitleVisible: false,
    headerTransitionPreset: 'fade-in-place',
    headerLayoutPreset: 'left',
    tabBarVisible: false,
  }
);

export { LibraryStack };
