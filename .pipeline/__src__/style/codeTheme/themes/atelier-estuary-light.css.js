"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/* Base16 Atelier Estuary Light - Theme */\n/* by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/estuary) */\n/* Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16) */\n\n/* Atelier-Estuary Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #6c6b5a;\n}\n\n/* Atelier-Estuary Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-attribute,\n.hljs-tag,\n.hljs-name,\n.hljs-regexp,\n.hljs-link,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #ba6236;\n}\n\n/* Atelier-Estuary Orange */\n.hljs-number,\n.hljs-meta,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params {\n  color: #ae7313;\n}\n\n/* Atelier-Estuary Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet {\n  color: #7d9726;\n}\n\n/* Atelier-Estuary Blue */\n.hljs-title,\n.hljs-section {\n  color: #36a166;\n}\n\n/* Atelier-Estuary Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #5f9182;\n}\n\n.hljs-deletion,\n.hljs-addition {\n  color: #22221b;\n  display: inline-block;\n  width: 100%;\n}\n\n.hljs-deletion {\n  background-color: #ba6236;\n}\n\n.hljs-addition {\n  background-color: #7d9726;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #f4f3ec;\n  color: #5f5e4e;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;