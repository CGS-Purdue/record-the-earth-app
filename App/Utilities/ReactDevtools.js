if (__DEV__) {
  const devtools_config = {localhost: 'localhost', port: 8097};
  const { connectToDevTools } = require("react-devtools-core");
  module.exports = connectToDevTools(devtools_config);
}
