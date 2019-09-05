import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
import Reactotron from 'reactotron-react-native'

Reactotron
  .configure({
    name: "RecordTheEarthExpo"
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/
    },
    editor: false,
    errors: { veto: (stackFrame) => false },
    overlay: false,
  })
  .connect({host: '192.168.1.120'});


Reactotron.log({ numbers: [1, 2, 3], boolean: false, nested: { here: 'we go' }});

Reactotron.display({
  name: 'KNOCK KNOCK',
  preview: 'Who\'s there?',
  value: 'Orange.'
});


export { Reactotron }
