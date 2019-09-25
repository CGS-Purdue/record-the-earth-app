import { ErrorRecovery, ErrorUtils } from 'expo';
import { AsyncStorage, Text } from 'react-native';
import React, { Component } from 'react';

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
    this.state = {
      errorInfo: null ,
      hasError: false,
      lastError: '',
    };
  }

  // Update state so the next render will show the fallback UI.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Catch errors in any components below and re-render with error message
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
      lastError : JSON.stringify(error),
    });

    if (__DEV__) {
      console.log(error, errorInfo);
    }

    // You can also log error messages to an error reporting service here
    // logErrorToMyService(error, info);
  }

  // dispatch error to logs
  async componentWillMount() {
    const lastError = await AsyncStorage.getItem('lastError');
    if (__DEV__){
      if (lastError) {
        console.log({
          sender: 'mobile-ops',
          message: 'Fatal error !',
          info: {
            error: lastError,
          },
        });
      }
      await AsyncStorage.removeItem('lastError');
    }
  }

  // You can render any custom fallback UI
  render() {
    if (this.state.hasError) {
      return (
        <Text>Something went wrong.</Text>
      );
    }

    return this.props.children;
  }
}

// // const defaultErrorHandler = (ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler()) || ErrorUtils._globalHandler;
//
// const myErrorHandler = (e, isFatal) => {
//   // e: the error throwed
//   // isFatal: if the error is fatal and will kill the app
//   // define your code here...
//   console.log('[myErrorHandler]', e, isFatal);
//   // after all, if you want to forward to default error handler
//   // just call the variable we stored in the previous step
//   defaultErrorHandler(e, isFatal)
// };
// const customErrorHandler = async (err, isFatal) => {
//   await AsyncStorage.setItem( 'lastError', JSON.stringify(err, Object.getOwnPropertyNames(err)));
//   return defaultErrorHandler(err, isFatal);
// };
//
// ErrorUtils.setGlobalHandler(customErrorHandler);



export { ErrorBoundary };
