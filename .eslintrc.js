module.exports = {
  env: {
    es6: true,
  },

  parserOptions: {
    sourceType: 'module',
  },

  plugins: [
    'react',
    'eslint-comments',
    'prettier',
    'react-native',
    'react',
  ],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community/eslint-config'
  ],

  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FormData: false,
    global: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    window: false,
    XMLHttpRequest: false,
  },

  rules: {
    quotes: [0, 'single', 'avoid-escape'], // specify whether double or single quotes should be used
    'no-dupe-class-members': 2, // Disallow duplicate name in class members
    'no-dupe-keys': 2, // disallow duplicate keys when creating object literals

     // React Plugin
     // The following rules are made available via `eslint-plugin-react`.

     'react/display-name': 0,
     'react/jsx-boolean-value': 0,
     'react/jsx-no-comment-textnodes': 1,
     'react/jsx-no-duplicate-props': 2,
     'react/jsx-no-undef': 2,
     'react/jsx-sort-props': 0,
     'react/jsx-uses-react': 1,
     'react/jsx-uses-vars': 1,
     'react/no-did-mount-set-state': 1,
     'react/no-did-update-set-state': 1,
     'react/no-multi-comp': 0,
     'react/no-string-refs': 1,
     'react/no-unknown-property': 0,
     'react/prop-types': 0,
     'react/react-in-jsx-scope': 1,
     'react/self-closing-comp': 1,
     'react/wrap-multilines': 0,

     // React-Hooks Plugin
     // The following rules are made available via `eslint-plugin-react-hooks`
     'react-hooks/rules-of-hooks': 'error',
     'react-hooks/exhaustive-deps': 'error',

     // React-Native Plugin
     // The following rules are made available via `eslint-plugin-react-native`

     'react-native/no-inline-styles': 1,

      "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}]

  }
}
