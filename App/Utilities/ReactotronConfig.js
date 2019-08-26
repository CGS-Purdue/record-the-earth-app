import Reactotron from 'reactotron-react-native'
// const middleware = (tron) => { /* plugin definition */ };
// .use(middleware) // plus some custom made plugin.
const HOST='127.0.0.1:9090';

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
  .connect({host: HOST});

Reactotron.clear()

Reactotron.onCustomCommand("test", () => console.log("This is an example"))

Reactotron.onCustomCommand({
  command: "test2",
  title: "A thing",
  description: "The desc",
  handler: () => console.log("This is an example 2"),
})
