import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
// import { YellowBox } from 'react-native';
import { initalAppSetup } from './LifeCycle/InitialSetup';
// import { Log } from './Utilities/Log';
import { AppRegistry, Platform } from 'react-native';
import { EXPO_CONSTANTS } from './Utilities/AppData';
import App  from './App';

AppRegistry.registerComponent('RecordTheEarthExpoDevelopment', () => App);

if (Platform.OS === 'web') {
    AppRegistry.runApplication('RecordTheEarthExpoDevelopment', {
        rootTag: document.getElementById('root'),
    });
} else {
  initalAppSetup();
}


// Log._info('Init');
if (__DEV__) {

  activateKeepAwake();

  //   YellowBox.ignoreWarnings([
  //     'Warning: ...',
  //     'Warning: Async Storage',
  //     'Warning: NetInfo',
  //   ]);
  // console.log(this.process.env);
  // if (process.env.npm_config_RUN_REACT_DEVTOOLS) {
    // if (!this.process.env.APP_REACT_DEVTOOLS_CONNECTED) {
    // console.log('loading react-devtools');
    // const devtools_config = {localhost: 'localhost', port: 8097};
    // const { connectToDevTools } = require("react-devtools-core");
    // const react_devtool = connectToDevTools({devtools_config});
    // console.log('react_devtool', react_devtool, this.__REACT_DEVTOOLS_GLOBAL_HOOK__);
    // this.process.env.APP_REACT_DEVTOOLS_CONNECTED = 'true';
    // } else if (process.env.RUN_REACT_DEVTOOLS) {

    // } else {
    // console.log('__REACT_DEVTOOLS_PORT__', window.__REACT_DEVTOOLS_PORT__);
    // console.log('__REACT_DEVTOOLS_GLOBAL_HOOK__', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);
    // window.__REDUX_DEVTOOLS_EXTENSION__.connect
    // console.log( this.__REACT_DEVTOOLS_PORT__);
    // }

    // window.__REDUX_DEVTOOLS_EXTENSION__
    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    // this.window.__fbBatchedBridgeConfig.remoteModuleConfig
    // Log._data({
    //   title: 'Process Env',
    //   src: './init.js',
    //   data: this.process.env,
    // });


}

registerRootComponent(App);
