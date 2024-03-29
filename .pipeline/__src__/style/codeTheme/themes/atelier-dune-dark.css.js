"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/* Base16 Atelier Dune Dark - Theme */\n/* by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune) */\n/* Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16) */\n\n/* Atelier-Dune Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #999580;\n}\n\n/* Atelier-Dune Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-attribute,\n.hljs-tag,\n.hljs-name,\n.hljs-regexp,\n.hljs-link,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #d73737;\n}\n\n/* Atelier-Dune Orange */\n.hljs-number,\n.hljs-meta,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params {\n  color: #b65611;\n}\n\n/* Atelier-Dune Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet {\n  color: #60ac39;\n}\n\n/* Atelier-Dune Blue */\n.hljs-title,\n.hljs-section {\n  color: #6684e1;\n}\n\n/* Atelier-Dune Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #b854d4;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #20201d;\n  color: #a6a28c;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;