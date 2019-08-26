import { Audio } from 'expo-av';

// let isApiEnabled
//    Audio.setIsEnabledAsync();
// Audio.setAudioModeAsync(mode)


// const recording = new Audio.Recording();
// try {
//   await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
//   await recording.startAsync();
//   // You are now recording!
// } catch (error) {
//   // An error occurred!
// }
//



///
// SOUND PLAYER
//

const config = {
  mode: {
    playsInSilentModeIOS: false,
    allowsRecordingIOS: true,  //default is false
    interruptionModeIOS: INTERRUPTION_MODE_IOS_DUCK_OTHERS,
    shouldDuckAndroid: true,
    interruptionModeAndroid: INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
    playThroughEarpieceAndroid: false,
  };
}

const soundObject = new Expo.Audio.Sound();

try {
  await soundObject.loadAsync(require('./assets/sounds/hello.mp3'));
  await soundObject.playAsync();
  // Your sound is playing!
} catch (error) {
  // An error occurred!
}


export const RECORDING_OPTIONS_PRESET_HIGH_QUALITY: RecordingOptions = {
    android: {
        extension: '.m4a',
        outputFormat: RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.caf',
        audioQuality: RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
};

export const RECORDING_OPTIONS_PRESET_LOW_QUALITY: RecordingOptions = {
    android: {
        extension: '.3gp',
        outputFormat: RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP,
        audioEncoder: RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.caf',
        audioQuality: RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
};
