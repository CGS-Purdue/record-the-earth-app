"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nvim-hybrid theme by w0ng (https://github.com/w0ng/vim-hybrid)\n\n*/\n\n/*background color*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #1d1f21;\n}\n\n/*selection color*/\n.hljs::selection,\n.hljs span::selection {\n  background: #373b41;\n}\n\n.hljs::-moz-selection,\n.hljs span::-moz-selection {\n  background: #373b41;\n}\n\n/*foreground color*/\n.hljs {\n  color: #c5c8c6;\n}\n\n/*color: fg_yellow*/\n.hljs-title,\n.hljs-name {\n  color: #f0c674;\n}\n\n/*color: fg_comment*/\n.hljs-comment,\n.hljs-meta,\n.hljs-meta .hljs-keyword {\n  color: #707880;\n}\n\n/*color: fg_red*/\n.hljs-number,\n.hljs-symbol,\n.hljs-literal,\n.hljs-deletion,\n.hljs-link {\n color: #cc6666\n}\n\n/*color: fg_green*/\n.hljs-string,\n.hljs-doctag,\n.hljs-addition,\n.hljs-regexp,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #b5bd68;\n}\n\n/*color: fg_purple*/\n.hljs-attribute,\n.hljs-code,\n.hljs-selector-id {\n color: #b294bb;\n}\n\n/*color: fg_blue*/\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-bullet,\n.hljs-tag {\n color: #81a2be;\n}\n\n/*color: fg_aqua*/\n.hljs-subst,\n.hljs-variable,\n.hljs-template-tag,\n.hljs-template-variable {\n  color: #8abeb7;\n}\n\n/*color: fg_orange*/\n.hljs-type,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-quote,\n.hljs-section,\n.hljs-selector-class {\n  color: #de935f;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;