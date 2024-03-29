"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nQt Creator dark color scheme\n\n*/\n\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #000000;\n}\n\n.hljs,\n.hljs-subst,\n.hljs-tag,\n.hljs-title {\n  color: #aaaaaa;\n}\n\n.hljs-strong,\n.hljs-emphasis {\n  color: #a8a8a2;\n}\n\n.hljs-bullet,\n.hljs-quote,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal {\n  color: #ff55ff;\n}\n\n.hljs-code\n.hljs-selector-class {\n  color: #aaaaff;\n}\n\n.hljs-emphasis,\n.hljs-stronge,\n.hljs-type {\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-function,\n.hljs-section,\n.hljs-symbol,\n.hljs-name {\n  color: #ffff55;\n}\n\n.hljs-attribute {\n  color: #ff5555;\n}\n\n.hljs-variable,\n.hljs-params,\n.hljs-class .hljs-title {\n  color: #8888ff;\n}\n\n.hljs-string,\n.hljs-selector-id,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-type,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-addition,\n.hljs-link {\n  color: #ff55ff;\n}\n\n.hljs-comment,\n.hljs-meta,\n.hljs-deletion {\n  color: #55ffff;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;