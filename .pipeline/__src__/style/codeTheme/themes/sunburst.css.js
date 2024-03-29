"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nSunburst-like style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #000;\n  color: #f8f8f8;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #aeaeae;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-type {\n  color: #e28964;\n}\n\n.hljs-string {\n  color: #65b042;\n}\n\n.hljs-subst {\n  color: #daefa3;\n}\n\n.hljs-regexp,\n.hljs-link {\n  color: #e9c062;\n}\n\n.hljs-title,\n.hljs-section,\n.hljs-tag,\n.hljs-name {\n  color: #89bdff;\n}\n\n.hljs-class .hljs-title,\n.hljs-doctag {\n  text-decoration: underline;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-number {\n  color: #3387cc;\n}\n\n.hljs-params,\n.hljs-variable,\n.hljs-template-variable {\n  color: #3e87e3;\n}\n\n.hljs-attribute {\n  color: #cda869;\n}\n\n.hljs-meta {\n  color: #8996a8;\n}\n\n.hljs-formula {\n  background-color: #0e2231;\n  color: #f8f8f8;\n  font-style: italic;\n}\n\n.hljs-addition {\n  background-color: #253b22;\n  color: #f8f8f8;\n}\n\n.hljs-deletion {\n  background-color: #420e09;\n  color: #f8f8f8;\n}\n\n.hljs-selector-class {\n  color: #9b703f;\n}\n\n.hljs-selector-id {\n  color: #8b98ab;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;