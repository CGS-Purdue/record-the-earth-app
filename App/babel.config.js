module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["transform-inline-environment-variables", {
        "include": [
          "NODE_ENV",
          'DEV_ENV',
          'DEBUG_LOGGING',
          'RUN_REACT_DEVTOOLS',
          'RUN_REACT_REACTOTRON',
          'APP_REACT_DEVTOOLS_RUNNING',
          'APP_DEBUG_APPDATA',
          'npm_config_DEV_ENV',
          'npm_config_DEBUG_LOGGING',
          'npm_config_RUN_REACT_DEVTOOLS',
          'npm_config_APP_REACT_DEVTOOLS_RUNNING',
          'npm_config_APP_DEBUG_APPDATA',
        ]},
      ],
    ],
  };
};
