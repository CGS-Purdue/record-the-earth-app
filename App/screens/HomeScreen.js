import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  StyleSheet,
  Button,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  createStackNavigator,
  NavigationScreenProp
} from 'react-navigation';


import MonoText from '../components/StyledText';

import SurveyStackNavigation from '../navigation/SurveyStackNavigation';
import ModalRecordScreen from './ModalRecordScreen';
import { Icons, Layout } from '../Theme';

const DISABLED_OPACITY = 0.5;

const RATE_SCALE = 3.0;


const HomeScreen = ({
  navigation,
}: {
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.getStartedText}>Suvery</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Survey')}
          style={styles.helpLink}>
           <Image style={styles.welcomeImage} source={Icons.RECORD_BUTTON.module} />
        </TouchableOpacity>
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.getStartedText}>ModalRecord</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Record')}
          style={styles.helpLink}>
           <Image style={styles.welcomeImage} source={Icons.RECORD_BUTTON.module} />
        </TouchableOpacity>
      </View>
    </View>
);
HomeScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};


const RootStack = createStackNavigator({
    Home: { screen: HomeScreen, },
    Record: { screen: ModalRecordScreen, },
    Survey: { screen: SurveyStackNavigation, },
  }, {
    mode: 'modal',
    tabBarVisible: false,
    headerMode: 'none',
  }
);
RootStack.navigationOptions = ({ navigation }) => {
  // let tabBarVisible = true;
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};


function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

function handlerRecordPress() {
  WebBrowser.openBrowserAsync();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
    // minHeight: DEVICE_HEIGHT,
    // maxHeight: DEVICE_HEIGHT,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    backgroundColor: BACKGROUND_COLOR,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  emptyContainer: {
    alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
  },

  noPermissionsText: {
    textAlign: 'center',
  },
  wrapper: {},
  halfScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: Layout.DEVICE_HEIGHT / 2.0,
    maxHeight: Layout.DEVICE_HEIGHT / 2.0,
  },
  recordingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: Icons.RECORD_BUTTON.height,
    maxHeight: Icons.RECORD_BUTTON.height,
  },
  recordingDataContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: Icons.RECORD_BUTTON.height,
    maxHeight: Icons.RECORD_BUTTON.height,
    minWidth: Icons.RECORD_BUTTON.width * 3.0,
    maxWidth: Icons.RECORD_BUTTON.width * 3.0,
  },
  recordingDataRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: Icons.RECORDING.height,
    maxHeight: Icons.RECORDING.height,
  },
  playbackContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: Icons.THUMB_1.height * 2.0,
    maxHeight: Icons.THUMB_1.height * 2.0,
  },
  playbackSlider: {
    alignSelf: 'stretch',
  },
  liveText: {
    color: LIVE_COLOR,
  },
  recordingTimestamp: {
    paddingLeft: 20,
  },
  playbackTimestamp: {
    textAlign: 'right',
    alignSelf: 'stretch',
    paddingRight: 20,
  },
  image: {
    backgroundColor: BACKGROUND_COLOR,
  },
  textButton: {
    backgroundColor: BACKGROUND_COLOR,
    padding: 10,
  },
  buttonsContainerBase: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainerTopRow: {
    maxHeight: Icons.MUTED_BUTTON.height,
    alignSelf: 'stretch',
    paddingRight: 20,
  },
  playStopContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: (Icons.PLAY_BUTTON.width + Icons.STOP_BUTTON.width) * 3.0 / 2.0,
    maxWidth: (Icons.PLAY_BUTTON.width + Icons.STOP_BUTTON.width) * 3.0 / 2.0,
  },
  volumeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: Layout.DEVICE_WIDTH / 2.0,
    maxWidth: Layout.DEVICE_WIDTH / 2.0,
  },
  volumeSlider: {
    width: Layout.DEVICE_WIDTH / 2.0 - Icons.MUTED_BUTTON.width,
  },
  buttonsContainerBottomRow: {
    maxHeight: Icons.THUMB_1.height,
    alignSelf: 'stretch',
    paddingRight: 20,
    paddingLeft: 20,
  },
  rateSlider: {
    width: Layout.DEVICE_WIDTH / 2.0,
  }
});



export default RootStack;
