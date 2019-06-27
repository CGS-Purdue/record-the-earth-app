"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  \n  \n/*\nName: Duotone Space\nAuthor: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nConversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-space-dark.css)\nGenerated with Base16 Builder (https://github.com/base16-builder/base16-builder)\n*/\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  font-family: Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace;\n  font-size: 14px;\n  line-height: 1.375;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  background: #24242e;\n  color: #767693;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n  text-shadow: none;\n  background: #5151e6;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n  text-shadow: none;\n  background: #5151e6;\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  padding: .1em;\n  border-radius: .3em;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #5b5b76;\n}\n\n.token.punctuation {\n  color: #5b5b76;\n}\n\n.token.namespace {\n  opacity: .7;\n}\n\n.token.tag,\n.token.operator,\n.token.number {\n  color: #dd672c;\n}\n\n.token.property,\n.token.function {\n  color: #767693;\n}\n\n.token.tag-id,\n.token.selector,\n.token.atrule-id {\n  color: #ebebff;\n}\n\ncode.language-javascript,\n.token.attr-name {\n  color: #aaaaca;\n}\n\ncode.language-css,\ncode.language-scss,\n.token.boolean,\n.token.string,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.language-scss .token.string,\n.style .token.string,\n.token.attr-value,\n.token.keyword,\n.token.control,\n.token.directive,\n.token.unit,\n.token.statement,\n.token.regex,\n.token.atrule {\n  color: #fe8c52;\n}\n\n.token.placeholder,\n.token.variable {\n  color: #fe8c52;\n}\n\n.token.deleted {\n  text-decoration: line-through;\n}\n\n.token.inserted {\n  border-bottom: 1px dotted #ebebff;\n  text-decoration: none;\n}\n\n.token.italic {\n  font-style: italic;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n\n.token.important {\n  color: #aaaaca;\n}\n\n.token.entity {\n  cursor: help;\n}\n\npre > code.highlight {\n  outline: .4em solid #7676f4;\n  outline-offset: .4em;\n}\n\n/* overrides color-values for the Line Numbers plugin\n * http://prismjs.com/plugins/line-numbers/\n */\n.line-numbers .line-numbers-rows {\n  border-right-color: #262631;\n}\n\n.line-numbers-rows > span:before {\n  color: #393949;\n}\n\n/* overrides color-values for the Line Highlight plugin\n* http://prismjs.com/plugins/line-highlight/\n*/\n.line-highlight {\n  background: rgba(221, 103, 44, 0.2);\n  background: -webkit-linear-gradient(left, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0));\n  background: linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0));\n}\n\n\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _stringRaw.default)(_templateObject());

exports.default = _default;