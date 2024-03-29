"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/* Base16 Atelier Sulphurpool Dark - Theme */\n/* by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool) */\n/* Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16) */\n\n/* Atelier-Sulphurpool Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #898ea4;\n}\n\n/* Atelier-Sulphurpool Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-attribute,\n.hljs-tag,\n.hljs-name,\n.hljs-regexp,\n.hljs-link,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #c94922;\n}\n\n/* Atelier-Sulphurpool Orange */\n.hljs-number,\n.hljs-meta,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params {\n  color: #c76b29;\n}\n\n/* Atelier-Sulphurpool Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet {\n  color: #ac9739;\n}\n\n/* Atelier-Sulphurpool Blue */\n.hljs-title,\n.hljs-section {\n  color: #3d8fd1;\n}\n\n/* Atelier-Sulphurpool Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #6679cc;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #202746;\n  color: #979db4;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;