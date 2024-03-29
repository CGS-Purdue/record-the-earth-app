"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\nDescription: Magula style for highligh.js\nAuthor: Ruslan Keba <rukeba@gmail.com>\nWebsite: http://rukeba.com/\nVersion: 1.0\nDate: 2009-01-03\nMusic: Aphex Twin / Xtal\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background-color: #f4f4f4;\n}\n\n.hljs,\n.hljs-subst {\n  color: black;\n}\n\n.hljs-string,\n.hljs-title,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-attribute,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-tag,\n.hljs-template-variable {\n  color: #050;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #777;\n}\n\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-type,\n.hljs-link {\n  color: #800;\n}\n\n.hljs-deletion,\n.hljs-meta {\n  color: #00e;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-doctag,\n.hljs-title,\n.hljs-section,\n.hljs-built_in,\n.hljs-tag,\n.hljs-name {\n  font-weight: bold;\n  color: navy;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;