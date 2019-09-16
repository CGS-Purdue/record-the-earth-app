import { React } from 'react';
import { Reactotron } from 'reactotron-react-native';

class LogUtils {
  static log(message, ...args) {
    if (__DEV__) {return;}
    Reactotron.display({
      name: 'LOG',
      preview: message,
      value: { message, args },
    });
  }
  static warn(message, ...args) {
    if (__DEV__) {return;}
    Reactotron.display({
      name: 'WARN',
      preview: message,
      value: { message, args },
      important: true,
    });
  }
  static error(message, ...args) {
    if (__DEV__) {return;}
    Reactotron.display({
      name: 'ERROR',
      preview: message,
      value: { message, args },
      important: true,
    });
  }
}

export { LogUtils };
