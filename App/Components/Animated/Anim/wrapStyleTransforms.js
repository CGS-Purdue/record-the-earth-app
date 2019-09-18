'use strict';

const TRANSFORM_STYLE_PROPERTIES = [
  "perspective",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY",
  "translateX",
  "translateY",
];

function wrapStyleTransforms (style) {
  const wrapped = {};
  Object.keys(style)
    .forEach(key => {
      if (TRANSFORM_STYLE_PROPERTIES.indexOf(key) !== -1) {
        if (!wrapped.transform) {
          wrapped.transform = [];
        }
        wrapped.transform.push({
          [key]: style[key],
        });
      }
      else {
        wrapped[key] = style[key];
      }
    });
  return wrapped;
}

exports.default = wrapStyleTransforms;
