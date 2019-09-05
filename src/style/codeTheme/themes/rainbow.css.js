"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nStyle with support for rainbow parens\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #474949;\n  color: #d1d9e1;\n}\n\n\n.hljs-comment,\n.hljs-quote {\n  color: #969896;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-type,\n.hljs-addition {\n  color: #cc99cc;\n}\n\n.hljs-number,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #f99157;\n}\n\n.hljs-string,\n.hljs-doctag,\n.hljs-regexp {\n  color: #8abeb7;\n}\n\n.hljs-title,\n.hljs-name,\n.hljs-section,\n.hljs-built_in {\n  color: #b5bd68;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-selector-id,\n.hljs-class .hljs-title {\n   color: #ffcc66;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-subst,\n.hljs-meta,\n.hljs-link {\n  color: #f99157;\n}\n\n.hljs-deletion {\n  color: #dc322f;\n}\n\n.hljs-formula {\n  background: #eee8d5;\n}\n\n.hljs-attr,\n.hljs-attribute {\n  color: #81a2be;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;