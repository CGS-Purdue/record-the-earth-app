"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n  codepen.io Embed Theme\n  Author: Justin Perry <http://github.com/ourmaninamsterdam>\n  Original theme - https://github.com/chriskempson/tomorrow-theme\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #222;\n  color: #fff;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #777;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-regexp,\n.hljs-meta,\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-params,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-deletion {\n  color: #ab875d;\n}\n\n.hljs-section,\n.hljs-title,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-type,\n.hljs-attribute {\n  color: #9b869b;\n}\n\n.hljs-string,\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-addition {\n  color: #8f9c6c;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;