import { registerRootComponent } from 'expo';
import { YellowBox } from 'react-native';
import { initalAppSetup } from './LifeCycle/InitialSetup';
import { activateKeepAwake } from 'expo-keep-awake';
import { Log } from './Utilities/Log';
import App from './App';

// __BUNDLE_START_TIME__: 1567557227589
// __DEV__: true
// __accept: metroAccept(id, factory, dependencyMap, inverseDependencies)
// __c: clear()
// __core-js_shared__: {versions: Array(1), keys: {}, wks: {}, symbol-registry: {}, symbols: {}, }
// __d: define(factory, moduleId, dependencyMap)
// __expo: {}
// __exponent: {}
// __fbBatchedBridgeConfig: {remoteModuleConfig: Array(55)}
// __fbGenNativeModule: genModule(config, moduleID)
// __fetchSegment: (segmentId, options, callback)
// __r: metroRequire(moduleId)
//  - Systrace
//      -- beginAsyncEvent: beginAsyncEvent(profileName)
//      -- beginEvent: beginEvent(profileName, args)
//      -- counterEvent: counterEvent(profileName, value)
//      -- endAsyncEvent: endAsyncEvent(profileName, cookie)
//      -- endEvent: endEvent()
//      -- installReactHook: installReactHook()
//      -- isEnabled: isEnabled()
//      -- setEnabled: setEnabled(enabled)
//  - getModules
//      -- importAll: metroImportAll(moduleId)
//      -- importDefault: metroImportDefault(moduleId)
//      -- packModuleId: packModuleId(value)
//      -- registerHook: registerHook(cb)
//      -- unpackModuleId: unpackModuleId(moduleId)
// __registerSegment: ƒ registerSegment(segmentID, moduleDefiner)

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

registerRootComponent(App);
initalAppSetup();
