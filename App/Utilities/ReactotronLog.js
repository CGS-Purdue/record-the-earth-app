import { Reactotron } from 'reactotron-react-native';
import { React } from 'react';
import { YellowBox, LogProps, NativeModules } from 'react-native';

class LogUtils {
  static log(message, ...args) {
    if (__DEV__) return;
    Reactotron.display({
      name: 'LOG',
      preview: message,
      value: { message, args },
    });
  }
  static warn(message, ...args) {
    if (__DEV__) return;
    Reactotron.display({
      name: 'WARN',
      preview: message,
      value: { message, args },
      important: true,
    });
  }
  static error(message, ...args) {
    if (__DEV__) return;
    Reactotron.display({
      name: 'ERROR',
      preview: message,
      value: { message, args },
      important: true,
    });
  }

  static DebugComponent(component) {
    React.forwardRef((props, ref) => {
      return <LogProps {...props} forwardedRef={ref} />;
    })
  }

  static logProps(component) {
    class LogProps extends React.Component {
      // ...
    }
    function forwardRef(props, ref) {
      return <LogProps {...props} forwardedRef={ref} />;
    }
    // Give this component a more helpful display name in DevTools.
    const name = Component.displayName || Component.name;
    // e.g. "ForwardRef(logProps(MyComponent))"
    forwardRef.displayName = `logProps(${name})`;
    return React.forwardRef(forwardRef);
  }
}

export { LogUtils }
