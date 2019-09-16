import { ErrorRecovery, ErrorUtils } from 'expo';
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

// In Development: If you're serving your app from Expo CLI,
// the fatal JS error will be reported to the React Native RedBox and no other action will be taken.
// In Production: If your published app encounters a fatal JS error,
// Expo will immediately reload your app. If the error happens very quickly after reloading,
// Expo will show a generic error screen with a button to try manually reloading.
// Expo can also report custom information back to you after your app reloads.
// If you use ErrorRecovery.setRecoveryProps, and the app later encounters a fatal JS error,
// the contents of that method call will be passed back into your app's initial props upon reloading.

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log( error, info );
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  async componentWillMount() {
    const lastError = await AsyncStorage.getItem('lastError');
    // dispatch error to logs
    if (lastError) {
      console.log({
        sender: 'mobile-ops',
        message: 'Fatal error !',
        info: {
          error: lastError,
        }});
      await AsyncStorage.removeItem('lastError');
    }
  }


  render() {
    // You can render any custom fallback UI
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const myErrorHandler = (e, isFatal) => {
  // e: the error throwed
  // isFatal: if the error is fatal and will kill the app
  // define your code here...
  // after all, if you want to forward to default error handler
  // just call the variable we stored in the previous step
  // defaultErrorHandler(e, isFatal)
};

const defaultHandler = (ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler()) || ErrorUtils._globalHandler;
const customErrorHandler = async (err, isFatal) => {
  await AsyncStorage.setItem('lastError', JSON.stringify(err, Object.getOwnPropertyNames(err)));
  return defaultHandler(err, isFatal);
};

ErrorUtils.setGlobalHandler(customErrorHandler);



export { ErrorBoundary };
