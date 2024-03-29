"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/* Base16 Atelier Cave Light - Theme */\n/* by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/cave) */\n/* Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16) */\n\n/* Atelier-Cave Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #655f6d;\n}\n\n/* Atelier-Cave Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-attribute,\n.hljs-tag,\n.hljs-name,\n.hljs-regexp,\n.hljs-link,\n.hljs-name,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #be4678;\n}\n\n/* Atelier-Cave Orange */\n.hljs-number,\n.hljs-meta,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params {\n  color: #aa573c;\n}\n\n/* Atelier-Cave Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet {\n  color: #2a9292;\n}\n\n/* Atelier-Cave Blue */\n.hljs-title,\n.hljs-section {\n  color: #576ddb;\n}\n\n/* Atelier-Cave Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #955ae7;\n}\n\n.hljs-deletion,\n.hljs-addition {\n  color: #19171c;\n  display: inline-block;\n  width: 100%;\n}\n\n.hljs-deletion {\n  background-color: #be4678;\n}\n\n.hljs-addition {\n  background-color: #2a9292;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #efecf4;\n  color: #585260;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;