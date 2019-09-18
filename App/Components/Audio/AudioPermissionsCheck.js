import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';

// const askForAudioPermissions = async () => {

async function askForAudioPermissions () {
  if (__DEV__ && Platform.OS === 'web') {
    let response = { status: 'granted' };
    this.setState({
      haveRecordingPermissions: response.status === 'granted',
    });

  } else {
    let response = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING,
      Permissions.CAMERA_ROLL
    );
    this.setState({
      haveRecordingPermissions: response.status === 'granted',
    });
  }
}

export { askForAudioPermissions };
