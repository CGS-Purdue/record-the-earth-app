import { Audio } from 'expo-av';


// Recording sounds

const recorder = Expo.Audio.Recording()

try {
  await recording.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
  await recording.startAsync();
  // You are now recording!
} catch (error) {
  // An error occurred!
}



recorder.getStatusAsync()



// Before prepareToRecordAsync
//
canRecord: false
isDoneRecording: false


// After prepareToRecordAsync() is called, but before stopAndUnloadAsync
//

canRecord: true
isRecording:
durationMillis:

// After stopAndUnloadAsync

canRecord: false
isDoneRecording: true
durationMillis




recorder.setOnRecordingStatusUpdate(onRecordingStatusUpdate)
