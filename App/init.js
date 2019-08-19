import RnTool from 'react-devtools-core';


if (__DEV__) {
  var RnConnection = RnTool.connectToDevTools({
    localhost: 'localhost',
    port: 8097,
  });
} else {
  rnool = {
    a: false,
  };
}

console.log('check react-devtools',RnConnection, RnTool);


export { RnTool }
