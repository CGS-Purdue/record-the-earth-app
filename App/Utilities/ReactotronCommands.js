import { React } from "react"
import { Reactotron } from 'reactotron-react-native'

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
  test : {
    command: "test2",
    title: "A thing",
    description: "The desc",
    handler: function(){return console.log("This is an example 2");},
  },
};


export { COMMAND_SET };
