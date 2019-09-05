"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nOrginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #002b36;\n  color: #839496;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #586e75;\n}\n\n/* Solarized Green */\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-addition {\n  color: #859900;\n}\n\n/* Solarized Cyan */\n.hljs-number,\n.hljs-string,\n.hljs-meta .hljs-meta-string,\n.hljs-literal,\n.hljs-doctag,\n.hljs-regexp {\n  color: #2aa198;\n}\n\n/* Solarized Blue */\n.hljs-title,\n.hljs-section,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #268bd2;\n}\n\n/* Solarized Yellow */\n.hljs-attribute,\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-class .hljs-title,\n.hljs-type {\n  color: #b58900;\n}\n\n/* Solarized Orange */\n.hljs-symbol,\n.hljs-bullet,\n.hljs-subst,\n.hljs-meta,\n.hljs-meta .hljs-keyword,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-link {\n  color: #cb4b16;\n}\n\n/* Solarized Red */\n.hljs-built_in,\n.hljs-deletion {\n  color: #dc322f;\n}\n\n.hljs-formula {\n  background: #073642;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;