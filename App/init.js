import { registerRootComponent } from 'expo';
import { YellowBox } from 'react-native';
import { initalAppSetup } from './LifeCycle/InitialSetup';
import { activateKeepAwake } from 'expo-keep-awake';
import { Log } from './Utilities/Log';
import App from './App';

Log._info('Init');

if (__DEV__) {
  YellowBox.ignoreWarnings([
    'Warning: ...',
    'Warning: Async Storage',
    'Warning: NetInfo',
  ]);

  console.log(this.process.env);

  if (this.process.env.npm_config_RUN_REACT_DEVTOOLS) {
    // if (!this.process.env.APP_REACT_DEVTOOLS_CONNECTED) {
    // console.log('loading react-devtools');
    // const devtools_config = {localhost: 'localhost', port: 8097};
    // const { connectToDevTools } = require("react-devtools-core");
    // const react_devtool = connectToDevTools({devtools_config});
    // console.log('react_devtool', react_devtool, this.__REACT_DEVTOOLS_GLOBAL_HOOK__);
    // this.process.env.APP_REACT_DEVTOOLS_CONNECTED = 'true';
  } else if (this.process.env.RUN_REACT_DEVTOOLS) {
      console.log('run react DevTools true');
  } else {
    // console.log('__REACT_DEVTOOLS_PORT__', window.__REACT_DEVTOOLS_PORT__);
    // console.log('__REACT_DEVTOOLS_GLOBAL_HOOK__', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);
    // window.__REDUX_DEVTOOLS_EXTENSION__.connect
    // console.log( this.__REACT_DEVTOOLS_PORT__);
  }

  // window.__REDUX_DEVTOOLS_EXTENSION__
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // this.window.__fbBatchedBridgeConfig.remoteModuleConfig
  Log._data({
    title: 'Process Env',
    src: './init.js',
    data: this.process.env,
  });

  activateKeepAwake();
}

initalAppSetup();
registerRootComponent(App);
