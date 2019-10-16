const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);


// If you want to add a new alias to the config.
//  config.resolve.alias['moduleA'] = 'moduleB';

  // Maybe you want to turn off compression in dev mode.
  if (config.mode === 'development') {
    config.devServer.compress = false;
  }

  // Or prevent minimizing the bundle when you build.
  if (config.mode === 'production') {
    config.optimization.minimize = false;
  }

  // https://webpack.js.org/configuration/devtool/
  // config.devtool = 'source-map';
  config.devtool = 'eval';
  // Customize the config before returning it.
  // config.output = {
  //   path: path.join(__dirname, 'dist'),
  //   filename: 'recordtheearth3.js'
  //   };

  return config;
};
