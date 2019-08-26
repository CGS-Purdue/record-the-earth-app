if (__DEV__) {
  var test = require('react-devtools-core').connectToDevTools({
    localhost: 'localhost',
    port: 8097,
  })
  console.log('ReactDevtools', test);
}

// require('react-devtools-core/standalone')
// Lets you render DevTools into a DOM node and have it listen to connections.
//
// For example:
// //
// require('react-devtools-core/standalone')
//   .setContentDOMNode(document.getElementById('container'))
//   .startServer(port);
