"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nGML Theme - Meseta <meseta@gmail.com>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #222222;\n  color: #C0C0C0;\n}\n\n.hljs-keywords {\n  color: #FFB871;\n  font-weight: bold;\n}\n\n.hljs-built_in {\n  color: #FFB871;\n}\n\n.hljs-literal {\n  color: #FF8080;\n}\n\n.hljs-symbol {\n  color: #58E55A;\n}\n\n.hljs-comment {\n  color: #5B995B;\n}\n\n.hljs-string {\n  color: #FFFF00;\n}\n\n.hljs-number {\n  color: #FF8080;\n}\n\n.hljs-attribute,\n.hljs-selector-tag,\n.hljs-doctag,\n.hljs-name,\n.hljs-bullet,\n.hljs-code,\n.hljs-addition,\n.hljs-regexp,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-link,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-type,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-quote,\n.hljs-template-tag,\n.hljs-deletion,\n.hljs-title,\n.hljs-section,\n.hljs-function,\n.hljs-meta-keyword,\n.hljs-meta,\n.hljs-subst {\n  color: #C0C0C0;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;