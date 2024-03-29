"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/* Base16 Atelier Heath Dark - Theme */\n/* by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath) */\n/* Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16) */\n\n/* Atelier-Heath Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #9e8f9e;\n}\n\n/* Atelier-Heath Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-attribute,\n.hljs-tag,\n.hljs-name,\n.hljs-regexp,\n.hljs-link,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #ca402b;\n}\n\n/* Atelier-Heath Orange */\n.hljs-number,\n.hljs-meta,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params {\n  color: #a65926;\n}\n\n/* Atelier-Heath Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet {\n  color: #918b3b;\n}\n\n/* Atelier-Heath Blue */\n.hljs-title,\n.hljs-section {\n  color: #516aec;\n}\n\n/* Atelier-Heath Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #7b59c0;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #1b181b;\n  color: #ab9bab;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;