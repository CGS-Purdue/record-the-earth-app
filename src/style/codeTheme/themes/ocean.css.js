"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/* Ocean Dark Theme */\n/* https://github.com/gavsiu */\n/* Original theme - https://github.com/chriskempson/base16 */\n\n/* Ocean Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #65737e;\n}\n\n/* Ocean Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #bf616a;\n}\n\n/* Ocean Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #d08770;\n}\n\n/* Ocean Yellow */\n.hljs-attribute {\n  color: #ebcb8b;\n}\n\n/* Ocean Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #a3be8c;\n}\n\n/* Ocean Blue */\n.hljs-title,\n.hljs-section {\n  color: #8fa1b3;\n}\n\n/* Ocean Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #b48ead;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #2b303b;\n  color: #c0c5ce;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;