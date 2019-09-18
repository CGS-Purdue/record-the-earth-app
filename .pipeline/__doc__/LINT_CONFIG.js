https://github.com/xjamundx/eslint-plugin-promise



## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-promise`:

```
$ npm install eslint-plugin-promise --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must
also install `eslint-plugin-promise` globally.

## Usage

Add `promise` to the plugins section of your `.eslintrc.json` configuration
file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["promise"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn"
  }
}
```

or start with the recommended rule set:

```json
{
  "extends": ["plugin:promise/recommended"]
}
```

## Rules

| rule                                                     | description                                                                      | recommended | fixable  |
| -------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------- | -------- |
| [`catch-or-return`][catch-or-return]                     | Enforces the use of `catch()` on un-returned promises.                           | :bangbang:  |          |
| [`no-return-wrap`][no-return-wrap]                       | Avoid wrapping values in `Promise.resolve` or `Promise.reject` when not needed.  | :bangbang:  |          |
| [`param-names`][param-names]                             | Enforce consistent param names and ordering when creating new promises.          | :bangbang:  |          |
| [`always-return`][always-return]                         | Return inside each `then()` to create readable and reusable Promise chains.      | :bangbang:  |          |
| [`no-native`][no-native]                                 | In an ES5 environment, make sure to create a `Promise` constructor before using. |             |          |
| [`no-nesting`][no-nesting]                               | Avoid nested `then()` or `catch()` statements                                    | :warning:   |          |
| [`no-promise-in-callback`][no-promise-in-callback]       | Avoid using promises inside of callbacks                                         | :warning:   |          |
| [`no-callback-in-promise`][no-callback-in-promise]       | Avoid calling `cb()` inside of a `then()` (use [nodeify][] instead)              | :warning:   |          |
| [`avoid-new`][avoid-new]                                 | Avoid creating `new` promises outside of utility libs (use [pify][] instead)     |             |          |
| [`no-new-statics`][no-new-statics]                       | Avoid calling `new` on a Promise static method                                   | :bangbang:  | :wrench: |
| [`no-return-in-finally`][no-return-in-finally]           | Disallow return statements in `finally()`                                        | :warning:   |          |
| [`valid-params`][valid-params]                           | Ensures the proper number of arguments are passed to Promise functions           | :warning:   |          |
| [`prefer-await-to-then`][prefer-await-to-then]           | Prefer `await` to `then()` for reading Promise values                            | :seven:     |          |
| [`prefer-await-to-callbacks`][prefer-await-to-callbacks] | Prefer async/await to the callback pattern                                       | :seven:     |          |

**Key**

| icon       | description                                     |
| ---------- | ----------------------------------------------- |
| :bangbang: | Reports as error in recommended configuration   |
| :warning:  | Reports as warning in recommended configuration |
| :seven:    | ES2017 Async Await rules                        |
| :wrench:   | Rule is fixable with `eslint --fix`             |



// -


eslint:cli CLI args: [ '--ext', '.js', '--no-cache', '--debug', '--print-config', '=' ] +0ms

eslint:config Constructing config file hierarchy for . +0ms

eslint:config Using .eslintrc and package.json files +0ms
eslint:config Loading /data/clients/cgs/Projects/record-the-earth-react-native/App/.eslintrc.js +1ms

  eslint:config-file Loading JS config file: /data/clients/cgs/Projects/record-the-earth-react-native/App/.eslintrc.js +0ms
  eslint:config-file Loading @react-native-community/eslint-config +75ms
  eslint:config-file Attempting to resolve @react-native-community/eslint-config +1ms
  eslint:config-file Loading JS config file: /data/clients/cgs/Projects/record-the-earth-react-native/App/node_modules/@react-native-community/eslint-config/index.js +0ms

eslint:plugins Loaded plugin eslint-comments (eslint-plugin-eslint-comments@3.1.2) (from /data/clients/cgs/Projects/record-the-earth-react-native/App/node_modules/eslint-plugin-eslint-comments/index.js) +0ms
eslint:plugins Loaded plugin prettier (eslint-plugin-prettier@3.1.0) (from /data/clients/cgs/Projects/record-the-earth-react-native/App/node_modules/eslint-plugin-prettier/eslint-plugin-prettier.js) +2ms
eslint:plugins Loaded plugin react (eslint-plugin-react@7.14.3) (from /data/clients/cgs/Projects/record-the-earth-react-native/App/node_modules/eslint-plugin-react/index.js) +69ms
eslint:plugins Loaded plugin react-hooks (eslint-plugin-react-hooks@1.7.0) (from /data/clients/cgs/Projects/record-the-earth-react-native/App/node_modules/eslint-plugin-react-hooks/index.js) +2ms
eslint:plugins Loaded plugin react-native (eslint-plugin-react-native@3.6.0) (from /data/clients/cgs/Projects/record-the-earth-react-native/App/node_modules/eslint-plugin-react-native/index.js) +4ms
eslint:plugins Loaded plugin jest (eslint-plugin-jest@22.4.1) (from /data/clients/cgs/Projects/record-the-earth-react-native/App/node_modules/eslint-plugin-jest/index.js) +8ms

eslint:config Using /data/clients/cgs/Projects/record-the-earth-react-native/App/.eslintrc.js +178ms
eslint:config Loading /data/clients/cgs/Projects/record-the-earth-react-native/package.json +0ms
eslint:config-file Loading package.json config file: /data/clients/cgs/Projects/record-the-earth-react-native/package.json +101ms
eslint:config-file Loading JSON config file: /data/clients/cgs/Projects/record-the-earth-react-native/package.json +0ms
eslint:config-file Loading @react-native-community/eslint-config +1ms
eslint:config-file Attempting to resolve @react-native-community/eslint-config +0ms
eslint:config Using /data/clients/cgs/Projects/record-the-earth-react-native/package.json +1ms
eslint:config-ops Using config from partial cache +0ms
eslint:config-ops Apply environment settings to config +1ms
eslint:config-ops Creating config for environment es6 +0ms
.bin/_lint: line 45: --cache-file: command not found

> record-the-earth-react-native@0.0.2 lint /data/clients/cgs/Projects/record-the-earth-react-native/App
> .bin/_lint

{
  "globals": {
    "Array": false,
    "ArrayBuffer": false,
    "Boolean": false,
    "constructor": false,
    "DataView": false,
    "Date": false,
    "decodeURI": false,
    "decodeURIComponent": false,
    "encodeURI": false,
    "encodeURIComponent": false,
    "Error": false,
    "escape": false,
    "eval": false,
    "EvalError": false,
    "Float32Array": false,
    "Float64Array": false,
    "Function": false,
    "hasOwnProperty": false,
    "Infinity": false,
    "Int16Array": false,
    "Int32Array": false,
    "Int8Array": false,
    "isFinite": false,
    "isNaN": false,
    "isPrototypeOf": false,
    "JSON": false,
    "Map": true,
    "Math": false,
    "NaN": false,
    "Number": false,
    "Object": false,
    "parseFloat": false,
    "parseInt": false,
    "Promise": true,
    "propertyIsEnumerable": false,
    "Proxy": false,
    "RangeError": false,
    "ReferenceError": false,
    "Reflect": false,
    "RegExp": false,
    "Set": true,
    "String": false,
    "Symbol": false,
    "SyntaxError": false,
    "toLocaleString": false,
    "toString": false,
    "TypeError": false,
    "Uint16Array": false,
    "Uint32Array": false,
    "Uint8Array": false,
    "Uint8ClampedArray": false,
    "undefined": false,
    "unescape": false,
    "URIError": false,
    "valueOf": false,
    "WeakMap": false,
    "WeakSet": false,
    "__DEV__": true,
    "__dirname": false,
    "__fbBatchedBridgeConfig": false,
    "alert": false,
    "cancelAnimationFrame": false,
    "cancelIdleCallback": false,
    "clearImmediate": true,
    "clearInterval": false,
    "clearTimeout": false,
    "console": false,
    "document": false,
    "Event": false,
    "EventTarget": false,
    "exports": false,
    "fetch": false,
    "FormData": false,
    "global": false,
    "module": false,
    "navigator": false,
    "process": false,
    "requestAnimationFrame": true,
    "requestIdleCallback": true,
    "require": false,
    "setImmediate": true,
    "setInterval": false,
    "setTimeout": false,
    "window": false,
    "XMLHttpRequest": false
  },
  "env": {
    "es6": true
  },
  "rules": {
    "comma-dangle": [
      1,
      "always-multiline"
    ],
    "no-cond-assign": 1,
    "no-console": 0,
    "no-const-assign": 2,
    "no-constant-condition": 0,
    "no-control-regex": 1,
    "no-debugger": 1,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-empty": 0,
    "no-ex-assign": 1,
    "no-extra-boolean-cast": 1,
    "no-extra-parens": 0,
    "no-extra-semi": 1,
    "no-func-assign": 1,
    "no-inner-declarations": 0,
    "no-invalid-regexp": 1,
    "no-negated-in-lhs": 1,
    "no-obj-calls": 1,
    "no-regex-spaces": 1,
    "no-reserved-keys": 0,
    "no-sparse-arrays": 1,
    "no-unreachable": 2,
    "use-isnan": 1,
    "valid-jsdoc": 0,
    "valid-typeof": 1,
    "block-scoped-var": 0,
    "complexity": 0,
    "consistent-return": 0,
    "curly": 1,
    "default-case": 0,
    "dot-notation": 1,
    "eqeqeq": [
      1,
      "allow-null"
    ],
    "guard-for-in": 0,
    "no-alert": 1,
    "no-caller": 1,
    "no-div-regex": 1,
    "no-else-return": 0,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-extend-native": 1,
    "no-extra-bind": 1,
    "no-fallthrough": 1,
    "no-floating-decimal": 1,
    "no-implied-eval": 1,
    "no-labels": 1,
    "no-iterator": 1,
    "no-lone-blocks": 1,
    "no-loop-func": 0,
    "no-multi-str": 0,
    "no-native-reassign": 0,
    "no-new": 1,
    "no-new-func": 2,
    "no-new-wrappers": 1,
    "no-octal": 1,
    "no-octal-escape": 1,
    "no-proto": 1,
    "no-redeclare": 0,
    "no-return-assign": 1,
    "no-script-url": 1,
    "no-self-compare": 1,
    "no-sequences": 1,
    "no-unused-expressions": 0,
    "no-void": 1,
    "no-warning-comments": 0,
    "no-with": 1,
    "radix": 1,
    "semi-spacing": 1,
    "vars-on-top": 0,
    "wrap-iife": 0,
    "yoda": 1,
    "no-catch-shadow": 1,
    "no-delete-var": 1,
    "no-label-var": 1,
    "no-shadow": 1,
    "no-shadow-restricted-names": 1,
    "no-undef": 2,
    "no-undefined": 0,
    "no-undef-init": 1,
    "no-unused-vars": [
      1,
      {
        "vars": "all",
        "args": "none",
        "ignoreRestSiblings": true
      }
    ],
    "no-use-before-define": 0,
    "handle-callback-err": 1,
    "no-mixed-requires": 1,
    "no-new-require": 1,
    "no-path-concat": 1,
    "no-process-exit": 0,
    "no-restricted-modules": 1,
    "no-sync": 0,
    "eslint-comments/no-aggregating-enable": 1,
    "eslint-comments/no-unlimited-disable": 1,
    "eslint-comments/no-unused-disable": 1,
    "eslint-comments/no-unused-enable": 1,
    "prettier/prettier": 2,
    "key-spacing": 0,
    "keyword-spacing": 1,
    "jsx-quotes": [
      1,
      "prefer-double"
    ],
    "comma-spacing": 0,
    "no-multi-spaces": 0,
    "brace-style": 0,
    "camelcase": 0,
    "consistent-this": 1,
    "eol-last": 1,
    "func-names": 0,
    "func-style": 0,
    "new-cap": 0,
    "new-parens": 1,
    "no-nested-ternary": 0,
    "no-array-constructor": 1,
    "no-empty-character-class": 1,
    "no-lonely-if": 0,
    "no-new-object": 1,
    "no-spaced-func": 1,
    "no-ternary": 0,
    "no-trailing-spaces": 1,
    "no-underscore-dangle": 0,
    "no-mixed-spaces-and-tabs": 1,
    "quotes": [
      0,
      "single",
      "avoid-escape"
    ],
    "quote-props": 0,
    "semi": 1,
    "sort-vars": 0,
    "space-in-brackets": 0,
    "space-in-parens": 0,
    "space-infix-ops": 1,
    "space-unary-ops": [
      1,
      {
        "words": true,
        "nonwords": false
      }
    ],
    "max-nested-callbacks": 0,
    "one-var": 0,
    "wrap-regex": 0,
    "max-depth": 0,
    "max-len": 0,
    "max-params": 0,
    "max-statements": 0,
    "no-bitwise": 1,
    "no-plusplus": 0,
    "react/display-name": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-no-comment-textnodes": 1,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 0,
    "react/no-string-refs": 1,
    "react/no-unknown-property": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-native/no-inline-styles": 1,
    "jest/no-disabled-tests": 1,
    "jest/no-focused-tests": 1,
    "jest/no-identical-title": 1,
    "jest/valid-expect": 1
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": [
    "eslint-comments",
    "prettier",
    "react",
    "react-hooks",
    "react-native",
    "jest"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "@react-native-community/eslint-config"
  ]
}
