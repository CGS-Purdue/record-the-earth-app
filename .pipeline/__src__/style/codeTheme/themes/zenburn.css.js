"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nZenburn style from voldmar.ru (c) Vladimir Epifanov <voldmar@voldmar.ru>\nbased on dark.css by Ivan Sagalaev\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #3f3f3f;\n  color: #dcdcdc;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-tag {\n  color: #e3ceab;\n}\n\n.hljs-template-tag {\n  color: #dcdcdc;\n}\n\n.hljs-number {\n  color: #8cd0d3;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-attribute {\n  color: #efdcbc;\n}\n\n.hljs-literal {\n  color: #efefaf;\n}\n\n.hljs-subst {\n  color: #8f8f8f;\n}\n\n.hljs-title,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-section,\n.hljs-type {\n  color: #efef8f;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link {\n  color: #dca3a3;\n}\n\n.hljs-deletion,\n.hljs-string,\n.hljs-built_in,\n.hljs-builtin-name {\n  color: #cc9393;\n}\n\n.hljs-addition,\n.hljs-comment,\n.hljs-quote,\n.hljs-meta {\n  color: #7f9f7f;\n}\n\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;