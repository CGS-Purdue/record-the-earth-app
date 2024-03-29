"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n    Para\xEDso (dark)\n    Created by Jan T. Sott (http://github.com/idleberg)\n    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)\n*/\n\n/* Para\xEDso Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #8d8687;\n}\n\n/* Para\xEDso Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-link,\n.hljs-meta {\n  color: #ef6155;\n}\n\n/* Para\xEDso Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-deletion {\n  color: #f99b15;\n}\n\n/* Para\xEDso Yellow */\n.hljs-title,\n.hljs-section,\n.hljs-attribute {\n  color: #fec418;\n}\n\n/* Para\xEDso Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #48b685;\n}\n\n/* Para\xEDso Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #815ba4;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #2f1e2e;\n  color: #a39e9b;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;