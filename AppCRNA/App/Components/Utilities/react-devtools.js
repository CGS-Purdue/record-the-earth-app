if (__DEV__) {
  require('react-devtools-core').connectToDevTools({
    localhost: 'localhost',
    port: 8097,

  })
}



// None of the options are required.
// 
// require('react-devtools-core/standalone')
// Lets you render DevTools into a DOM node and have it listen to connections.
//
// For example:
//
// require('react-devtools-core/standalone')
//   .setContentDOMNode(document.getElementById('container'))
//   // .startServer(port);
