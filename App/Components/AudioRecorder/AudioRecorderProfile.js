import { Audio } from 'expo-av';

class AudioRecorderProfile {
  constructor(options) {
    const profile = Object.create(null);
    profile.allowsRecordingIOS = true;
    profile.interruptionModeIOS = Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX;
    profile.playsInSilentModeIOS = true;
    profile.shouldDuckAndroid = true;
    profile.interruptionModeAndroid =
      Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX;
    profile.playThroughEarpieceAndroid = false;
    profile.staysActiveInBackground = true;

    this.profile = Object.assign(profile, options);
  }

  getProfile() {
    return this.profile;
  }

  setProfileOption(option, value) {
    this.profile[option] = value;
  }
}

export { AudioRecorderProfile };
