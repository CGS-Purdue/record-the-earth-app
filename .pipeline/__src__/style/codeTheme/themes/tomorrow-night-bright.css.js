"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/* Tomorrow Night Bright Theme */\n/* Original theme - https://github.com/chriskempson/tomorrow-theme */\n/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #969896;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #d54e53;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #e78c45;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n  color: #e7c547;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #b9ca4a;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n  color: #7aa6da;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #c397d8;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: black;\n  color: #eaeaea;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;