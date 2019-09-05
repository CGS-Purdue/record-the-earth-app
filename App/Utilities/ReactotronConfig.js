import Reactotron, { networking, openInEditor, asyncStorage, createStore  } from 'reactotron-react-native'
import { LogUtils } from './ReactotronLog';
import { COMMAND_SET } from './ReactotronCommands';
import { reactotronRedux } from 'reactotron-redux'
import { composeWithDevTools } from 'remote-redux-devtools'

//  IGNORE WARNINGS {
//  AsyncStorage
//  async-storage-moved
//  }

const middleware = [];
const HOST='127.0.0.1:9090';
const ASYNC_IGNORE = [''];
const NETWORKING_IGNORE_TYPES = /^(image)\/.*$/i;
const NETWORKING_IGNORE_URLS = /\/(logs|symbolicate)$/;
const REDUX_EXCEPT = [
   'EFFECT_TRIGGERED',
   'EFFECT_RESOLVED',
   'EFFECT_REJECTED',
];
const REDUX_IMPORTANT = action => action.type === 'repo.receive';
const REDUX_ONBACKUP = (state) => {};
const REDUX_ONRESTORE = (state) => {};

// Reactotron.clear()

if (__DEV__) {
  // const ReactotronMiddleware = Reactotron.createEnhancer();
  // middleware.push(ReactotronMiddleware);
}

// const store = createStore(
//   compose(...middleware),
// );

var Tron = new LogUtils;
console.tron = Reactotron.log;

export default Reactotron
  .configure({
    name: "RecordTheEarthExpo"
  })
  .use(asyncStorage({
    ignore: ASYNC_IGNORE
  }))
  .use(reactotronRedux({
    except: REDUX_EXCEPT,
    isActionImportant: REDUX_IMPORTANT,
    // onBackup: REDUX_ONBACKUP,
    // onRestore: REDUX_ONRESTORE,
  }))
  .use(networking({
      ignoreContentTypes:  NETWORKING_IGNORE_TYPES,
      ignoreUrls: NETWORKING_IGNORE_URLS,
  }))
  .use(openInEditor())
  .useReactNative({
    errors: { veto: (stackFrame) => false },
    overlay: false,
  })
  .connect({host: HOST});

Reactotron.onCustomCommand(COMMAND_SET.devtools_open);
Reactotron.onCustomCommand(COMMAND_SET.devtools_reload);
Reactotron.onCustomCommand(COMMAND_SET.test);

export { Reactotron }
