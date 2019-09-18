import { Audio } from 'expo-av';

class AudioProfile {
  constructor(options) {
    const _profile = Object.create(null);
    _profile.allowsRecordingIOS = true;
    _profile.interruptionModeIOS = Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX;
    _profile.playsInSilentModeIOS = true;
    _profile.shouldDuckAndroid = true;
    _profile.interruptionModeAndroid = Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX;
    _profile.playThroughEarpieceAndroid = false;
    _profile.staysActiveInBackground = true;

    this.profile = Object.assign(_profile, options);
  }

  getProfile() {
    return this.profile;
  }

  setProfileOption(option, value) {
    this.profile[option] = value;
  }
}

export { AudioProfile }
