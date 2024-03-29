"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n * Visual Studio 2015 dark style\n * Author: Nicolas LLOBERA <nllobera@gmail.com>\n */\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #1E1E1E;\n  color: #DCDCDC;\n}\n\n.hljs-keyword,\n.hljs-literal,\n.hljs-symbol,\n.hljs-name {\n  color: #569CD6;\n}\n.hljs-link {\n  color: #569CD6;\n  text-decoration: underline;\n}\n\n.hljs-built_in,\n.hljs-type {\n  color: #4EC9B0;\n}\n\n.hljs-number,\n.hljs-class {\n  color: #B8D7A3;\n}\n\n.hljs-string,\n.hljs-meta-string {\n  color: #D69D85;\n}\n\n.hljs-regexp,\n.hljs-template-tag {\n  color: #9A5334;\n}\n\n.hljs-subst,\n.hljs-function,\n.hljs-title,\n.hljs-params,\n.hljs-formula {\n  color: #DCDCDC;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #57A64A;\n  font-style: italic;\n}\n\n.hljs-doctag {\n  color: #608B4E;\n}\n\n.hljs-meta,\n.hljs-meta-keyword,\n.hljs-tag {\n  color: #9B9B9B;\n}\n\n.hljs-variable,\n.hljs-template-variable {\n  color: #BD63C5;\n}\n\n.hljs-attr,\n.hljs-attribute,\n.hljs-builtin-name {\n  color: #9CDCFE;\n}\n\n.hljs-section {\n  color: gold;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n/*.hljs-code {\n  font-family:'Monospace';\n}*/\n\n.hljs-bullet,\n.hljs-selector-tag,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #D7BA7D;\n}\n\n.hljs-addition {\n  background-color: #144212;\n  display: inline-block;\n  width: 100%;\n}\n\n.hljs-deletion {\n  background-color: #600;\n  display: inline-block;\n  width: 100%;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;