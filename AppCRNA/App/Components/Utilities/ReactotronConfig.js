import Reactotron from 'reactotron-react-native'

//
// const middleware = (tron) => { /* plugin definition */ };
// .use(middleware) // plus some custom made plugin.

Reactotron
  .configure({
    name: "RecordTheEarthExpo"
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: { // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();
