"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nMonokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #23241f;\n}\n\n.hljs,\n.hljs-tag,\n.hljs-subst {\n  color: #f8f8f2;\n}\n\n.hljs-strong,\n.hljs-emphasis {\n  color: #a8a8a2;\n}\n\n.hljs-bullet,\n.hljs-quote,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-link {\n  color: #ae81ff;\n}\n\n.hljs-code,\n.hljs-title,\n.hljs-section,\n.hljs-selector-class {\n  color: #a6e22e;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-name,\n.hljs-attr {\n  color: #f92672;\n}\n\n.hljs-symbol,\n.hljs-attribute {\n  color: #66d9ef;\n}\n\n.hljs-params,\n.hljs-class .hljs-title {\n  color: #f8f8f2;\n}\n\n.hljs-string,\n.hljs-type,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-selector-id,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-variable {\n  color: #e6db74;\n}\n\n.hljs-comment,\n.hljs-deletion,\n.hljs-meta {\n  color: #75715e;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;