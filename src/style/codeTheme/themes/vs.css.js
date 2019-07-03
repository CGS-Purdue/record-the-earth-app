"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nVisual Studio-like style based on original C# coloring by Jason Diamond <jason@diamond.name>\n\n*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: white;\n  color: black;\n}\n\n.hljs-comment,\n.hljs-quote,\n.hljs-variable {\n  color: #008000;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-built_in,\n.hljs-name,\n.hljs-tag {\n  color: #00f;\n}\n\n.hljs-string,\n.hljs-title,\n.hljs-section,\n.hljs-attribute,\n.hljs-literal,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-type,\n.hljs-addition {\n  color: #a31515;\n}\n\n.hljs-deletion,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-meta {\n  color: #2b91af;\n}\n\n.hljs-doctag {\n  color: #808080;\n}\n\n.hljs-attr {\n  color: #f00;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link {\n  color: #00b0e8;\n}\n\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;