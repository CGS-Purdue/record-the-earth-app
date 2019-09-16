import * as createAnimatableComponent  from './createAnimatableComponent.js';
import * as createAnimation  from './createAnimation.js';
import * as definitions  from './definitions.js';
import * as easing  from './easing.js';
import * as flattenStyle  from './flattenStyle.js';
import * as getDefaultStyleValue  from './getDefaultStyleValue.js';
import * as getStyleValues  from './getStyleValues.js';
import * as registry  from './registry.js';
import * as styleTransforms  from './wrapStyleTransforms.js';


let Animatable = Object.create(null);
Animatable.createAnimation;
Animatable.registry;
Animatable.definitions;
Animatable.getStyleValues;
Animatable.createAnimatableComponent;
Animatable.styleTransforms;
Animatable.easing;
Animatable.flattenStyle;
Animatable.getDefaultStyleValue;

export {
  createAnimation,
  registry,
  definitions,
  getStyleValues,
  createAnimatableComponent,
  styleTransforms,
  easing,
  flattenStyle,
  getDefaultStyleValue,
  Animatable,
};
