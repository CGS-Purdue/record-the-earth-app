import { React } from "react"
import { Reactotron } from 'reactotron-react-native'
import {
  devServer,
  getDevServer,
  infoLog,
  InitializeCore,
  Inspector,
  InspectorPanel,
  logError,
  MessageQueue,
  JSInspector,
  NativeModules,
  openFileInEditor,
  PerformanceOverlay,
  reactDevTools,
  resolveBoxStyle,
  setUpGlobals,
  SpyData,
  StyleInspector,
} from 'react-native'


/* Sets up global variables typical in most JavaScript environments.
 *
 *   1. Global timers (via `setTimeout` etc).
 *   2. Global console object.
 *   3. Hooks for printing stack traces with source maps.
 *
 * Leaves enough room in the environment for implementing your own:
 *
 *   1. Require system.
 *   2. Bridged modules.
 *  InitializeCore
 */

const COMMAND_SET = {
  devtools_open: {
    command: "devtools.open",
    handler: () => {console.log('__DEV__', __DEV__);
      console.log(
        ['devServer' , devServer],
        ['getDevServer' , getDevServer],
        ['infoLog' , infoLog],
        ['logError' , logError],
        ['openFileInEditor' , openFileInEditor],
        ['reactDevTools' , reactDevTools],
        ['resolveBoxStyle' , resolveBoxStyle],
        ['setUpGlobals' , setUpGlobals],
        ['InitializeCore' , InitializeCore],
        ['Inspector' , Inspector],
        ['InspectorPanel' , InspectorPanel],
        ['MessageQueue' , MessageQueue],
        ['JSInspector' , JSInspector],
        ['NativeModules' , NativeModules],
        ['PerformanceOverlay' , PerformanceOverlay],
        ['SpyData' , SpyData],
        ['StyleInspector' , StyleInspector],
      )
    }
  },
  devtools_reload: {
    command: "devtools.reload",
    handler: function () {
      console.log(NativeModules.DevMenu);
    }
  },
  test : {
    command: "test2",
    title: "A thing",
    description: "The desc",
    handler: function(){return console.log("This is an example 2")},
  }
};


export { COMMAND_SET }
