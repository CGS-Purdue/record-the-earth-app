import { Audio } from 'expo-av';

class AudioFormat {
  constructor(options) {
    this.presets = {
      high: Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
      low:  Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
    };

    this.format = Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY;
  }

  getFormat() {
    return JSON.parse(JSON.stringify(this.format));
  }

  setFormat(preset) {
    if (preset === 'high') {
      this.format = this.preset.high;
    }
    if (preset === 'low') {
      this.format = this.preset.high;
    }
  }
}

export { AudioFormat }
