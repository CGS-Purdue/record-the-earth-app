"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\n\nDarcula color scheme from the JetBrains family of IDEs\n\n*/\n\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #2b2b2b;\n}\n\n.hljs {\n  color: #bababa;\n}\n\n.hljs-strong,\n.hljs-emphasis {\n  color: #a8a8a2;\n}\n\n.hljs-bullet,\n.hljs-quote,\n.hljs-link,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal {\n  color: #6896ba;\n}\n\n.hljs-code,\n.hljs-selector-class {\n  color: #a6e22e;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-section,\n.hljs-attribute,\n.hljs-name,\n.hljs-variable {\n  color: #cb7832;\n}\n\n.hljs-params {\n  color: #b9b9b9;\n}\n\n.hljs-string {\n  color: #6a8759;\n}\n\n.hljs-subst,\n.hljs-type,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-symbol,\n.hljs-selector-id,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-addition {\n  color: #e0c46c;\n}\n\n.hljs-comment,\n.hljs-deletion,\n.hljs-meta {\n  color: #7f7f7f;\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;