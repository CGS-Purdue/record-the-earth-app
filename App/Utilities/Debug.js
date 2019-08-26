import React from 'react';
import { ErrorRecovery } from 'expo';
import {YellowBox} from 'react-native';

ErrorRecovery.setRecoveryProps
exp.errorRecovery


console.disableYellowBox = true
YellowBox.ignoreWarnings(['Warning: ...']);

// custom JavaScript debugger
// REACT_DEBUGGER="node /path/to/launchDebugger.js --port 2345 --type ReactNative
// **Custom debugger commands executed this way should be short-lived processes,
//  and they shouldn't produce more than 200 kilobytes of output.


const DebugComponent = React.forwardRef((props, ref) => {
  return <LogProps {...props} forwardedRef={ref} />;
});

function logProps(Component) {
  class LogProps extends React.Component {
    // ...
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // Give this component a more helpful display name in DevTools.
  // e.g. "ForwardRef(logProps(MyComponent))"
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}
