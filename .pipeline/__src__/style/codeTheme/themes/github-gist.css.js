"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/**\n * GitHub Gist Theme\n * Author : Louis Barranqueiro - https://github.com/LouisBarranqueiro\n */\n\n.hljs {\n  display: block;\n  background: white;\n  padding: 0.5em;\n  color: #333333;\n  overflow-x: auto;\n}\n\n.hljs-comment,\n.hljs-meta {\n  color: #969896;\n}\n\n.hljs-string,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-strong,\n.hljs-emphasis,\n.hljs-quote {\n  color: #df5000;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-type {\n  color: #a71d5d;\n}\n\n.hljs-literal,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-attribute {\n  color: #0086b3;\n}\n\n.hljs-section,\n.hljs-name {\n  color: #63a35c;\n}\n\n.hljs-tag {\n  color: #333333;\n}\n\n.hljs-title,\n.hljs-attr,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #795da3;\n}\n\n.hljs-addition {\n  color: #55a532;\n  background-color: #eaffea;\n}\n\n.hljs-deletion {\n  color: #bd2c00;\n  background-color: #ffecec;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;