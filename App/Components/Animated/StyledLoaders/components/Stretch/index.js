'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _templateObject=_taggedTemplateLiteral(['\n        margin: 100px auto;\n        width: ',';\n        text-align: center;\n        font-size: 10px;\n        height: ',';\n    '],['\n        margin: 100px auto;\n        width: ',';\n        text-align: center;\n        font-size: 10px;\n        height: ',';\n    ']),_templateObject2=_taggedTemplateLiteral(['\n        background-color: ',';\n        height: 100%;\n        width: ',';\n        display: inline-block;\n        animation: ',' 1.2s infinite ease-in-out;\n        animation-duration: ','s;\n    '],['\n        background-color: ',';\n        height: 100%;\n        width: ',';\n        display: inline-block;\n        animation: ',' 1.2s infinite ease-in-out;\n        animation-duration: ','s;\n    ']),_templateObject3=_taggedTemplateLiteral(['\n        animation-delay: -','s;\n    '],['\n        animation-delay: -','s;\n    ']),_react=require('react'),_react2=_interopRequireDefault(_react),_propTypes=require('prop-types'),_propTypes2=_interopRequireDefault(_propTypes),_styledComponents=require('styled-components'),_styledComponents2=_interopRequireDefault(_styledComponents),_animations=require('../../utils/animations'),_defaults=require('../../utils//defaults');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _taggedTemplateLiteral(a,b){return Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var Stretch=function(a){var b=a.color,c=a.duration,d=a.size,e=function(a){return a?parseInt(a,10):1.2},f=_styledComponents2.default.div(_templateObject,function(a){return a.size?a.size:'50px'},(0,_defaults.getSize)(d)),g=_styledComponents2.default.div(_templateObject2,(0,_defaults.getColor)(b),function(a){return a.rectWidth?a.rectWidth:'6px'},_animations.stretch,e(c)),h=(0,_styledComponents2.default)(g)(_templateObject3,e(c)-0.1),i=(0,_styledComponents2.default)(g)(_templateObject3,e(c)-0.2),j=(0,_styledComponents2.default)(g)(_templateObject3,e(c)-0.3),k=(0,_styledComponents2.default)(g)(_templateObject3,e(c)-0.4);return _react2.default.createElement(f,{size:d},_react2.default.createElement(g,null),_react2.default.createElement(h,null),_react2.default.createElement(i,null),_react2.default.createElement(j,null),_react2.default.createElement(k,null))};exports.default=Stretch,Stretch.propTypes={color:_propTypes2.default.string,rectWidth:_propTypes2.default.string,duration:_propTypes2.default.string,size:_propTypes2.default.string};