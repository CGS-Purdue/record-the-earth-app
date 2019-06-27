"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nISBL Editor style dark color scheme (c) Dmitriy Tarasov <dimatar@gmail.com>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #404040;\n  color: #f0f0f0;\n}\n\n/* Base color: saturation 0; */\n\n.hljs,\n.hljs-subst {\n  color: #f0f0f0;\n}\n\n.hljs-comment {\n  color: #b5b5b5;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-attribute,\n.hljs-selector-tag,\n.hljs-meta-keyword,\n.hljs-doctag,\n.hljs-name {\n  color: #f0f0f0;\n  font-weight: bold;\n}\n\n\n/* User color: hue: 0 */\n\n.hljs-string {\n  color: #97bf0d;\n}\n\n.hljs-type,\n.hljs-number,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-quote,\n.hljs-template-tag,\n.hljs-deletion {\n  color: #f0f0f0;\n}\n\n.hljs-title,\n.hljs-section {\n  color: #df471e;\n}\n\n.hljs-title>.hljs-built_in {\n  color: #81bce9;\n  font-weight: normal;\n}\n\n.hljs-regexp,\n.hljs-symbol,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-link,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #e2c696;\n}\n\n/* Language color: hue: 90; */\n\n.hljs-built_in,\n.hljs-literal {\n  color: #97bf0d;\n  font-weight: bold;\n}\n\n.hljs-bullet,\n.hljs-code,\n.hljs-addition {\n  color: #397300;\n}\n\n.hljs-class  {\n  color: #ce9d4d;\n  font-weight: bold;\n}\n\n/* Meta color: hue: 200 */\n\n.hljs-meta {\n  color: #1f7199;\n}\n\n.hljs-meta-string {\n  color: #4d99bf;\n}\n\n\n/* Misc effects */\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;