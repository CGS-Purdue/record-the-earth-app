"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\nDate: 24 Fev 2015\nAuthor: Pedro Oliveira <kanytu@gmail . com>\n*/\n\n.hljs {\n  color: #a9b7c6;\n  background: #282b2e;\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n}\n\n.hljs-number,\n.hljs-literal,\n.hljs-symbol,\n.hljs-bullet {\n  color: #6897BB;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-deletion {\n  color: #cc7832;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-link {\n  color: #629755;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #808080;\n}\n\n.hljs-meta {\n  color: #bbb529;\n}\n\n.hljs-string,\n.hljs-attribute,\n.hljs-addition {\n  color: #6A8759;\n}\n\n.hljs-section,\n.hljs-title,\n.hljs-type {\n  color: #ffc66d;\n}\n\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #e8bf6a;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;