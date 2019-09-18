'use strict';

const reactNative = require('react-native');
const bounce = {
  0: {
    translateY: 0,
  },
  0.2: {
    translateY: 0,
  },
  0.4: {
    translateY: -30,
  },
  0.43: {
    translateY: -30,
  },
  0.53: {
    translateY: 0,
  },
  0.7: {
    translateY: -15,
  },
  0.8: {
    translateY: 0,
  },
  0.9: {
    translateY: -4,
  },
  1: {
    translateY: 0,
  },
};
const flash = {
  0: {
    opacity: 1,
  },
  0.25: {
    opacity: 0,
  },
  0.5: {
    opacity: 1,
  },
  0.75: {
    opacity: 0,
  },
  1: {
    opacity: 1,
  },
};
const jello = {
  0: {
    skewX: "0deg",
    skewY: "0deg",
  },
  0.111: {
    skewX: "0deg",
    skewY: "0deg",
  },
  0.222: {
    skewX: "-12.5deg",
    skewY: "-12.5deg",
  },
  0.333: {
    skewX: "6.25deg",
    skewY: "6.25deg",
  },
  0.444: {
    skewX: "-3.125deg",
    skewY: "-3.125deg",
  },
  0.555: {
    skewX: "1.5625deg",
    skewY: "1.5625deg",
  },
  0.666: {
    skewX: "-0.78125deg",
    skewY: "-0.78125deg",
  },
  0.777: {
    skewX: "0.390625deg",
    skewY: "0.390625deg",
  },
  0.888: {
    skewX: "-0.1953125deg",
    skewY: "-0.1953125deg",
  },
  1: {
    skewX: "0deg",
    skewY: "0deg",
  },
};
const pulse = {
  0: {
    scale: 1,
  },
  0.5: {
    scale: 1.05,
  },
  1: {
    scale: 1,
  },
};
const rotate = {
  0: {
    rotate: "0deg",
  },
  0.25: {
    rotate: "90deg",
  },
  0.5: {
    rotate: "180deg",
  },
  0.75: {
    rotate: "270deg",
  },
  1: {
    rotate: "360deg",
  },
};
const shake = {
  0: {
    translateX: 0,
  },
  0.1: {
    translateX: -10,
  },
  0.2: {
    translateX: 10,
  },
  0.3: {
    translateX: -10,
  },
  0.4: {
    translateX: 10,
  },
  0.5: {
    translateX: -10,
  },
  0.6: {
    translateX: 10,
  },
  0.7: {
    translateX: -10,
  },
  0.8: {
    translateX: 10,
  },
  0.9: {
    translateX: -10,
  },
  1: {
    translateX: 0,
  },
};
const swing = {
  0: {
    rotate: "0deg",
  },
  0.2: {
    rotate: "15deg",
  },
  0.4: {
    rotate: "-10deg",
  },
  0.6: {
    rotate: "5deg",
  },
  0.8: {
    rotate: "-5deg",
  },
  1: {
    rotate: "0deg",
  },
};
const rubberBand = {
  0: {
    scaleX: 1,
    scaleY: 1,
  },
  0.3: {
    scaleX: 1.25,
    scaleY: 0.75,
  },
  0.4: {
    scaleX: 0.75,
    scaleY: 1.25,
  },
  0.5: {
    scaleX: 1.15,
    scaleY: 0.85,
  },
  0.65: {
    scaleX: 0.95,
    scaleY: 1.05,
  },
  0.75: {
    scaleX: 1.05,
    scaleY: 0.95,
  },
  1: {
    scaleX: 1,
    scaleY: 1,
  },
};
const tada = {
  0: {
    scale: 1,
    rotate: "0deg",
  },
  0.1: {
    scale: 0.9,
    rotate: "-3deg",
  },
  0.2: {
    scale: 0.9,
    rotate: "-3deg",
  },
  0.3: {
    scale: 1.1,
    rotate: "-3deg",
  },
  0.4: {
    rotate: "3deg",
  },
  0.5: {
    rotate: "-3deg",
  },
  0.6: {
    rotate: "3deg",
  },
  0.7: {
    rotate: "-3deg",
  },
  0.8: {
    rotate: "3deg",
  },
  0.9: {
    scale: 1.1,
    rotate: "3deg",
  },
  1: {
    scale: 1,
    rotate: "0deg",
  },
};
const wobble = {
  0: {
    translateX: 0,
    rotate: "0deg",
  },
  0.15: {
    translateX: -25,
    rotate: "-5deg",
  },
  0.3: {
    translateX: 20,
    rotate: "3deg",
  },
  0.45: {
    translateX: -15,
    rotate: "-3deg",
  },
  0.6: {
    translateX: 10,
    rotate: "2deg",
  },
  0.75: {
    translateX: -5,
    rotate: "-1deg",
  },
  1: {
    translateX: 0,
    rotate: "0deg",
  },
};
const bounceIn = {
  0: {
    opacity: 0,
    scale: 0.3,
  },
  0.2: {
    scale: 1.1,
  },
  0.4: {
    scale: 0.9,
  },
  0.6: {
    opacity: 1,
    scale: 1.03,
  },
  0.8: {
    scale: 0.97,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};
const bounceInUp = {
  0: {
    opacity: 0,
    translateY: 800,
  },
  0.6: {
    opacity: 1,
    translateY: -25,
  },
  0.75: {
    translateY: 10,
  },
  0.9: {
    translateY: -5,
  },
  1: {
    translateY: 0,
  },
};
const bounceInDown = {
  0: {
    opacity: 0,
    translateY: -800,
  },
  0.6: {
    opacity: 1,
    translateY: 25,
  },
  0.75: {
    translateY: -10,
  },
  0.9: {
    translateY: 5,
  },
  1: {
    translateY: 0,
  },
};
const bounceInRight = {
  0: {
    opacity: 0,
    translateX: 600,
  },
  0.6: {
    opacity: 1,
    translateX: -20,
  },
  0.75: {
    translateX: 8,
  },
  0.9: {
    translateX: -4,
  },
  1: {
    translateX: 0,
  },
};
const bounceInLeft = {
  0: {
    opacity: 0,
    translateX: -600,
  },
  0.6: {
    opacity: 1,
    translateX: 20,
  },
  0.75: {
    translateX: -8,
  },
  0.9: {
    translateX: 4,
  },
  1: {
    translateX: 0,
  },
};
const bounceOut = {
  0: {
    opacity: 1,
    scale: 1,
  },
  0.2: {
    scale: 0.9,
  },
  0.5: {
    opacity: 1,
    scale: 1.11,
  },
  0.55: {
    scale: 1.11,
  },
  1: {
    opacity: 0,
    scale: 0.3,
  },
};
const bounceOutUp = {
  0: {
    opacity: 1,
    translateY: 0,
  },
  0.2: {
    opacity: 1,
    translateY: -10,
  },
  0.4: {
    translateY: 20,
  },
  0.45: {
    translateY: 20,
  },
  0.55: {
    opacity: 1,
  },
  1: {
    opacity: 0,
    translateY: -800,
  },
};
const bounceOutDown = {
  0: {
    opacity: 1,
    translateY: 0,
  },
  0.2: {
    opacity: 1,
    translateY: 10,
  },
  0.4: {
    translateY: -20,
  },
  0.45: {
    translateY: -20,
  },
  0.55: {
    opacity: 1,
  },
  1: {
    opacity: 0,
    translateY: 800,
  },
};
const bounceOutRight = {
  0: {
    opacity: 1,
    translateX: 0,
  },
  0.2: {
    opacity: 1,
    translateX: 10,
  },
  0.4: {
    translateX: -20,
  },
  0.45: {
    translateX: -20,
  },
  0.55: {
    opacity: 1,
  },
  1: {
    opacity: 0,
    translateX: 600,
  },
};
const bounceOutLeft = {
  0: {
    opacity: 1,
    translateX: 0,
  },
  0.2: {
    opacity: 1,
    translateX: -10,
  },
  0.4: {
    translateX: 20,
  },
  0.45: {
    translateX: 20,
  },
  0.55: {
    opacity: 1,
  },
  1: {
    opacity: 0,
    translateX: -600,
  },
};

function makeFadeInTranslation (translationType, fromValue) {
  return {
    from: {
      opacity: 0,
      [translationType]: fromValue,
    },
    to: {
      opacity: 1,
      [translationType]: 0,
    },
  };
}
const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};
const fadeInDown = makeFadeInTranslation("translateY", -100);
const fadeInUp = makeFadeInTranslation("translateY", 100);
const fadeInLeft = makeFadeInTranslation("translateX", -100);
const fadeInRight = makeFadeInTranslation("translateX", 100);
const fadeInDownBig = makeFadeInTranslation("translateY", -500);
const fadeInUpBig = makeFadeInTranslation("translateY", 500);
const fadeInLeftBig = makeFadeInTranslation("translateX", -500);
const fadeInRightBig = makeFadeInTranslation("translateX", 500);

function makeFadeOutTranslation (translationType, toValue) {
  return {
    from: {
      opacity: 1,
      [translationType]: 0,
    },
    to: {
      opacity: 0,
      [translationType]: toValue,
    },
  };
}
const fadeOut = {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
};
const fadeOutDown = makeFadeOutTranslation("translateY", 100);
const fadeOutUp = makeFadeOutTranslation("translateY", -100);
const fadeOutLeft = makeFadeOutTranslation("translateX", -100);
const fadeOutRight = makeFadeOutTranslation("translateX", 100);
const fadeOutDownBig = makeFadeOutTranslation("translateY", 500);
const fadeOutUpBig = makeFadeOutTranslation("translateY", -500);
const fadeOutLeftBig = makeFadeOutTranslation("translateX", -500);
const fadeOutRightBig = makeFadeOutTranslation("translateX", 500);
const flipInX = {
  easing: "ease-in",
  style: {
    backfaceVisibility: "visible",
    perspective: 400,
  },
  0: {
    opacity: 0,
    rotateX: "90deg",
  },
  0.4: {
    rotateX: "-20deg",
  },
  0.6: {
    opacity: 1,
    rotateX: "10deg",
  },
  0.8: {
    rotateX: "-5deg",
  },
  1: {
    opacity: 1,
    rotateX: "0deg",
  },
};
const flipInY = {
  easing: "ease-in",
  style: {
    backfaceVisibility: "visible",
    perspective: 400,
  },
  0: {
    opacity: 0,
    rotateY: "90deg",
  },
  0.4: {
    rotateY: "-20deg",
  },
  0.6: {
    opacity: 1,
    rotateY: "10deg",
  },
  0.8: {
    rotateY: "-5deg",
  },
  1: {
    opacity: 1,
    rotateY: "0deg",
  },
};
const flipOutX = {
  style: {
    backfaceVisibility: "visible",
    perspective: 400,
  },
  0: {
    opacity: 1,
    rotateX: "0deg",
  },
  0.3: {
    opacity: 1,
    rotateX: "-20deg",
  },
  1: {
    opacity: 0,
    rotateX: "90deg",
  },
};
const flipOutY = {
  style: {
    backfaceVisibility: "visible",
    perspective: 400,
  },
  0: {
    opacity: 1,
    rotateY: "0deg",
  },
  0.3: {
    opacity: 1,
    rotateY: "-20deg",
  },
  1: {
    opacity: 0,
    rotateY: "90deg",
  },
};
const lightSpeedIn = {
  easing: "ease-out",
  0: {
    opacity: 0,
    translateX: 200,
    skewX: "-30deg",
  },
  0.6: {
    opacity: 1,
    translateX: 0,
    skewX: "20deg",
  },
  0.8: {
    skewX: "-5deg",
  },
  1: {
    opacity: 1,
    translateX: 0,
    skewX: "0deg",
  },
};
const lightSpeedOut = {
  easing: "ease-in",
  0: {
    opacity: 1,
    translateX: 0,
    skewX: "0deg",
  },
  1: {
    opacity: 0,
    translateX: 200,
    skewX: "30deg",
  },
};

function makeSlideInTranslation (translationType, fromValue) {
  return {
    from: {
      [translationType]: fromValue,
    },
    to: {
      [translationType]: 0,
    },
  };
}
const slideInDown = makeSlideInTranslation("translateY", -100);
const slideInUp = makeSlideInTranslation("translateY", 100);
const slideInLeft = makeSlideInTranslation("translateX", -100);
const slideInRight = makeSlideInTranslation("translateX", 100);

function makeSlideOutTranslation (translationType, fromValue) {
  return {
    from: {
      [translationType]: 0,
    },
    to: {
      [translationType]: fromValue,
    },
  };
}
const slideOutDown = makeSlideOutTranslation("translateY", 100);
const slideOutUp = makeSlideOutTranslation("translateY", -100);
const slideOutLeft = makeSlideOutTranslation("translateX", -100);
const slideOutRight = makeSlideOutTranslation("translateX", 100);

function makeZoomInTranslation (translationType, pivotPoint) {
  const modifier = Math.min(1, Math.max(-1, pivotPoint));
  return {
    easing: reactNative.Easing.bezier(0.175, 0.885, 0.32, 1),
    0: {
      opacity: 0,
      scale: 0.1,
      [translationType]: modifier * -1000,
    },
    0.6: {
      opacity: 1,
      scale: 0.457,
      [translationType]: pivotPoint,
    },
    1: {
      scale: 1,
      [translationType]: 0,
    },
  };
}
const zoomIn = {
  from: {
    opacity: 0,
    scale: 0.3,
  },
  0.5: {
    opacity: 1,
  },
  to: {
    opacity: 1,
    scale: 1,
  },
};
const zoomInDown = makeZoomInTranslation("translateY", 60);
const zoomInUp = makeZoomInTranslation("translateY", -60);
const zoomInLeft = makeZoomInTranslation("translateX", 10);
const zoomInRight = makeZoomInTranslation("translateX", -10);

function makeZoomOutTranslation (translationType, pivotPoint) {
  const modifier = Math.min(1, Math.max(-1, pivotPoint));
  return {
    easing: reactNative.Easing.bezier(0.175, 0.885, 0.32, 1),
    0: {
      opacity: 1,
      scale: 1,
      [translationType]: 0,
    },
    0.4: {
      opacity: 1,
      scale: 0.457,
      [translationType]: pivotPoint,
    },
    1: {
      opacity: 0,
      scale: 0.1,
      [translationType]: modifier * -1000,
    },
  };
}
const zoomOut = {
  from: {
    opacity: 1,
    scale: 1,
  },
  0.5: {
    opacity: 1,
    scale: 0.3,
  },
  to: {
    opacity: 0,
    scale: 0,
  },
};
const zoomOutDown = makeZoomOutTranslation("translateY", 60);
const zoomOutUp = makeZoomOutTranslation("translateY", -60);
const zoomOutLeft = makeZoomOutTranslation("translateX", 10);
const zoomOutRight = makeZoomOutTranslation("translateX", -10);
exports.bounce = bounce;
exports.bounceIn = bounceIn;
exports.bounceInDown = bounceInDown;
exports.bounceInLeft = bounceInLeft;
exports.bounceInRight = bounceInRight;
exports.bounceInUp = bounceInUp;
exports.bounceOut = bounceOut;
exports.bounceOutDown = bounceOutDown;
exports.bounceOutLeft = bounceOutLeft;
exports.bounceOutRight = bounceOutRight;
exports.bounceOutUp = bounceOutUp;
exports.fadeIn = fadeIn;
exports.fadeInDown = fadeInDown;
exports.fadeInDownBig = fadeInDownBig;
exports.fadeInLeft = fadeInLeft;
exports.fadeInLeftBig = fadeInLeftBig;
exports.fadeInRight = fadeInRight;
exports.fadeInRightBig = fadeInRightBig;
exports.fadeInUp = fadeInUp;
exports.fadeInUpBig = fadeInUpBig;
exports.fadeOut = fadeOut;
exports.fadeOutDown = fadeOutDown;
exports.fadeOutDownBig = fadeOutDownBig;
exports.fadeOutLeft = fadeOutLeft;
exports.fadeOutLeftBig = fadeOutLeftBig;
exports.fadeOutRight = fadeOutRight;
exports.fadeOutRightBig = fadeOutRightBig;
exports.fadeOutUp = fadeOutUp;
exports.fadeOutUpBig = fadeOutUpBig;
exports.flash = flash;
exports.flipInX = flipInX;
exports.flipInY = flipInY;
exports.flipOutX = flipOutX;
exports.flipOutY = flipOutY;
exports.jello = jello;
exports.lightSpeedIn = lightSpeedIn;
exports.lightSpeedOut = lightSpeedOut;
exports.pulse = pulse;
exports.rotate = rotate;
exports.rubberBand = rubberBand;
exports.shake = shake;
exports.slideInDown = slideInDown;
exports.slideInLeft = slideInLeft;
exports.slideInRight = slideInRight;
exports.slideInUp = slideInUp;
exports.slideOutDown = slideOutDown;
exports.slideOutLeft = slideOutLeft;
exports.slideOutRight = slideOutRight;
exports.slideOutUp = slideOutUp;
exports.swing = swing;
exports.tada = tada;
exports.wobble = wobble;
exports.zoomIn = zoomIn;
exports.zoomInDown = zoomInDown;
exports.zoomInLeft = zoomInLeft;
exports.zoomInRight = zoomInRight;
exports.zoomInUp = zoomInUp;
exports.zoomOut = zoomOut;
exports.zoomOutDown = zoomOutDown;
exports.zoomOutLeft = zoomOutLeft;
exports.zoomOutRight = zoomOutRight;
exports.zoomOutUp = zoomOutUp;
