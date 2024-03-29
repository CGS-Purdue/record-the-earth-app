"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/* a11y-light theme */\n/* Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css */\n/* @author: ericwbailey */\n\n/* Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #696969;\n}\n\n/* Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #d91e18;\n}\n\n/* Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #aa5d00;\n}\n\n/* Yellow */\n.hljs-attribute {\n  color: #aa5d00;\n}\n\n/* Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #008000;\n}\n\n/* Blue */\n.hljs-title,\n.hljs-section {\n  color: #007faa;\n}\n\n/* Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #7928a1;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #fefefe;\n  color: #545454;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .hljs-addition,\n  .hljs-attribute,\n  .hljs-built_in,\n  .hljs-builtin-name,\n  .hljs-bullet,\n  .hljs-comment,\n  .hljs-link,\n  .hljs-literal,\n  .hljs-meta,\n  .hljs-number,\n  .hljs-params,\n  .hljs-string,\n  .hljs-symbol,\n  .hljs-type,\n  .hljs-quote {\n        color: highlight;\n    }\n\n    .hljs-keyword,\n    .hljs-selector-tag {\n        font-weight: bold;\n    }\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;