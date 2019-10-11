import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Easing, Animated, StyleSheet, TouchableWithoutFeedback, View, ActivityIndicator, ViewPropTypes } from 'react-native';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });}
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var ANIMATED_SPRING_FRICTION = 6.75;
var ANIMATED_SPRING_TENSION = 100;
var ANIMATED_ELASTIC_DURATION = 300;
var ANIMATED_ELASTIC_BOUNCINESS = 1.2;
var ANIMATED_TIMING_OFF = 100;
var ANIMATED_TIMING_IN = 200;
var ANIMATED_TIMING_LOADING = 3000;
var DEFAULT_RAISE_LEVEL = 4;
var DEFAULT_ACTIVE_OPACITY = 1;
var DEFAULT_HEIGHT = 60;
var DEFAULT_WIDTH = null;
var DEFAULT_BORDER_RADIUS = 4;
var DEFAULT_BORDER_WIDTH = 0;
var DEFAULT_HORIZONTAL_PADDING = 12;
var DEFAULT_TEXT_COLOR = '#FFFFFF';
var DEFAULT_ACTIVITY_COLOR = '#FFFFFF';
var DEFAULT_BACKGROUND_COLOR = '#c0c0c0';
var DEFAULT_BACKGROUND_DARKER = '#9f9f9f';
var DEFAULT_BACKGROUND_SHADOW = 'rgba(0, 0, 0, 0.15)';
var DEFAULT_BACKGROUND_ACTIVE = 'rgba(0, 0, 0, 0.15)';
var DEFAULT_LINE_HEIGHT = 20;
var DEFAULT_TEXT_SIZE = 14;

function memoize(fn) {
  var _this = this;

  memoize.cache = {};
  memoize.size = 0;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = JSON.stringify(args);

    if (memoize.cache[key]) {
      return memoize.cache[key];
    }

    var value = fn.apply(_this, args);

    if (memoize.size > 1000) {
      memoize.size = 0;
      memoize.cache = {};
    }

    memoize.size += 1;
    memoize.cache[key] = value;
    return value;
  };
}
function animateTiming(_ref) {
  var {
    variable,
    toValue,
    duration = ANIMATED_TIMING_IN,
    delay = 0,
    easing = Easing.easeOut,
    callback = null
  } = _ref;
  Animated.timing(variable, {
    toValue,
    duration,
    easing,
    delay,
    useNativeDriver: true
  }).start(callback);
}
function animateSpring(_ref2) {
  var {
    variable,
    toValue,
    delay = 0,
    tension = ANIMATED_SPRING_TENSION,
    friction = ANIMATED_SPRING_FRICTION,
    callback = null
  } = _ref2;
  Animated.spring(variable, {
    toValue,
    tension,
    friction,
    delay,
    useNativeDriver: true
  }).start(callback);
}
function animateElastic(params) {
  animateTiming(_objectSpread2({
    duration: ANIMATED_ELASTIC_DURATION,
    easing: Easing.elastic(ANIMATED_ELASTIC_BOUNCINESS)
  }, params));
}

var memoized = memoize((_ref) => {
  var {
    backgroundActive,
    backgroundColor,
    backgroundDarker,
    backgroundPlaceholder,
    backgroundProgress,
    backgroundShadow,
    borderColor,
    borderRadius,
    borderWidth,
    height,
    paddingBottom,
    paddingHorizontal,
    paddingTop,
    raiseLevel,
    stateWidth,
    stretch,
    textColor,
    textFontFamily,
    textLineHeight,
    textSize,
    width
  } = _ref;
  var calcHeight = height + paddingBottom + paddingTop;
  var calcWidth = stretch ? '100%' : width || stateWidth || null;
  var dimensionsDiff = {
    width: calcWidth,
    height: calcHeight - raiseLevel
  };
  return StyleSheet.create({
    container: {
      height: calcHeight,
      width: calcWidth
    },
    container__text: {
      color: textColor,
      fontSize: textSize,
      fontFamily: textFontFamily,
      paddingBottom,
      paddingTop,
      paddingHorizontal
    },
    container__placeholder: {
      height: textLineHeight,
      backgroundColor: backgroundPlaceholder
    },
    shadow: {
      bottom: -raiseLevel / 2,
      height: height - raiseLevel,
      borderRadius,
      backgroundColor: backgroundShadow
    },
    bottom: _objectSpread2({
      borderRadius,
      backgroundColor: backgroundDarker
    }, dimensionsDiff),
    progress: _objectSpread2({}, dimensionsDiff, {
      backgroundColor: backgroundProgress
    }),
    content: _objectSpread2({}, dimensionsDiff, {
      borderRadius
    }),
    activeBackground: _objectSpread2({}, dimensionsDiff, {
      backgroundColor: backgroundActive
    }),
    text: {
      borderColor,
      borderWidth,
      borderRadius,
      backgroundColor
    }
  });
});
var getStyles = (_ref2) => {
  var {
    backgroundActive,
    backgroundColor,
    backgroundDarker,
    backgroundPlaceholder,
    backgroundProgress,
    backgroundShadow,
    borderColor,
    borderRadius,
    borderWidth,
    height,
    paddingBottom,
    paddingHorizontal,
    paddingTop,
    raiseLevel,
    stateWidth,
    stretch,
    textColor,
    textFontFamily,
    textLineHeight,
    textSize,
    width
  } = _ref2;
  return memoized({
    backgroundActive,
    backgroundColor,
    backgroundDarker,
    backgroundPlaceholder,
    backgroundProgress,
    backgroundShadow,
    borderColor,
    borderRadius,
    borderWidth,
    height,
    paddingBottom,
    paddingHorizontal,
    paddingTop,
    raiseLevel,
    stateWidth,
    stretch,
    textColor,
    textFontFamily,
    textLineHeight,
    textSize,
    width
  });
};
var styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    zIndex: 10
  },
  container__text: {
    width: '100%',
    fontWeight: 'bold',
    zIndex: 10,
    textAlign: 'center'
  },
  container__view: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container__placeholder: {
    width: '55%'
  },
  container__activity: {
    position: 'absolute',
    zIndex: 5
  },
  shadow: {
    width: '98%',
    position: 'absolute',
    left: '1%'
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  progress: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  activeBackground: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    overflow: 'hidden'
  }
});

class Button extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, 'pressIn', () => {
      if (this.props.disabled === true || !this.props.children || this.animating === true) {
        return false;
      }

      this.pressing = true;

      if (this.props.progress) {
        this.animating = true;
      }

      animateTiming({
        variable: this.animatedValue,
        toValue: 1,
        duration: ANIMATED_TIMING_OFF
      });
      animateTiming({
        variable: this.animatedActive,
        toValue: 1,
        duration: ANIMATED_TIMING_OFF
      });
      animateTiming({
        variable: this.animatedOpacity,
        toValue: this.props.progress ? 1 : this.props.activeOpacity,
        duration: ANIMATED_TIMING_OFF,
        callback: () => {
          this.pressing = false;
        }
      });
    });

    _defineProperty(this, 'pressOut', () => {
      if (this.props.disabled === true || !this.props.children) {
        return false;
      }

      if (this.animating === true) {
        this.press();
        return;
      }

      if (this.pressing === false) {
        this.press();
        this.release();
        return;
      }

      this.timeout = setTimeout(() => {
        this.press();
        this.release();
      }, ANIMATED_TIMING_OFF / 2.5);
    });

    _defineProperty(this, 'press', () => {
      if (this.props.progress === true) {
        this.animating = true;
        this.setState({
          activity: true
        }, () => {
          this.animateLoadingStart();
          animateTiming({
            variable: this.loadingOpacity,
            toValue: 1
          });
          animateElastic({
            variable: this.textOpacity,
            toValue: 0
          });
          animateElastic({
            variable: this.activityOpacity,
            toValue: 1
          });
        });
      }

      if (this.props.onPress) {
        this.props.onPress(this.end);
      }
    });

    _defineProperty(this, 'end', _callback => {
      if (this.props.progress === true) {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
          animateTiming({
            variable: this.animatedLoading,
            toValue: 1,
            callback: () => {
              animateElastic({
                variable: this.textOpacity,
                toValue: 1
              });
              animateElastic({
                variable: this.activityOpacity,
                toValue: 0,
                callback: () => {
                  _callback && _callback();
                }
              });
              animateTiming({
                variable: this.loadingOpacity,
                toValue: 0,
                delay: 100,
                callback: () => {
                  this.release(() => {
                    this.animating = false;
                  });
                }
              });
            }
          });
        }, 50);
      }
    });

    _defineProperty(this, 'textLayout', event => {
      this.containerWidth = event.nativeEvent.layout.width;

      if (this.props.width === null && !this.props.stretch == true) {
        if (this.state.width !== event.nativeEvent.layout.width && this.state.width < event.nativeEvent.layout.width) {
          this.setState({
            width: event.nativeEvent.layout.width
          });
        }

        this.animatedOpacity.setValue(1);
      }
    });

    this.loadingOpacity = new Animated.Value(1);
    this.textOpacity = new Animated.Value(1);
    this.activityOpacity = new Animated.Value(0);
    this.animatedActive = new Animated.Value(0);
    this.animatedValue = new Animated.Value(0);
    this.animatedLoading = new Animated.Value(0);
    this.animatedOpacity = new Animated.Value(props.width === null && !props.stretch === true ? 0 : 1);
    this.layouted = null;
    this.animating = false;
    this.timeout = null;
    this.pressing = false;
    this.containerWidth = null;
    this.state = {
      activity: false,
      width: null
    };
  }

  getAnimatedValues() {
    var width = this.containerWidth ? this.containerWidth * -1 : 0;
    return {
      animatedContainer: {
        opacity: this.animatedOpacity
      },
      animatedShadow: {
        transform: [{
          translateY: this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -this.props.raiseLevel / 2]
          })
        }]
      },
      animatedContent: {
        transform: [{
          translateY: this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, this.props.raiseLevel]
          })
        }]
      },
      animatedActive: {
        opacity: this.animatedActive
      },
      animatedActivity: {
        opacity: this.activityOpacity,
        transform: [{
          scale: this.activityOpacity
        }]
      },
      animatedProgress: {
        opacity: this.loadingOpacity,
        transform: [{
          translateX: this.animatedLoading.interpolate({
            inputRange: [0, 1],
            outputRange: [width, 0]
          })
        }]
      }
    };
  }

  release(callback) {
    if (this.props.springRelease === true) {
      animateSpring({
        variable: this.animatedActive,
        toValue: 0
      });
      animateSpring({
        variable: this.animatedValue,
        toValue: 0,
        callback
      });
      animateTiming({
        variable: this.animatedOpacity,
        toValue: 1,
        duration: ANIMATED_TIMING_OFF
      });
      return;
    }

    animateTiming({
      variable: this.animatedActive,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF
    });
    animateTiming({
      variable: this.animatedOpacity,
      toValue: 1,
      duration: ANIMATED_TIMING_OFF
    });
    animateTiming({
      variable: this.animatedValue,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF,
      callback
    });
  }

  animateLoadingStart() {
    this.animatedLoading.setValue(0);
    animateTiming({
      variable: this.animatedLoading,
      toValue: 1,
      duration: this.props.progressLoadingTime
    });
  }

  renderContent(dynamicStyles) {
    var {
      children
    } = this.props;
    var animatedStyles = {
      opacity: this.textOpacity,
      transform: [{
        scale: this.textOpacity
      }]
    };

    if (!children) {
      return React.createElement(Animated.View, {
        testID: 'aws-btn-content-placeholder',
        style: [styles.container__placeholder, dynamicStyles.container__placeholder, animatedStyles]
      });
    }

    if (typeof children === 'string') {
      return React.createElement(Animated.Text, {
        testID: 'aws-btn-content-text',
        style: [styles.container__text, dynamicStyles.container__text, animatedStyles]
      }, children);
    }

    return React.createElement(Animated.View, {
      style: [styles.container__view, dynamicStyles.container__view, animatedStyles]
    }, children);
  }

  render() {
    var animatedValues = this.getAnimatedValues();
    var dynamicStyles = getStyles(_objectSpread2({}, this.props, {
      stateWidth: this.state.width
    }));
    var {
      ExtraContent,
      style,
      activityColor
    } = this.props;
    return React.createElement(TouchableWithoutFeedback, {
      testID: 'aws-btn-content-view',
      onPressIn: this.pressIn,
      onPressOut: this.pressOut
    }, React.createElement(Animated.View, {
      testID: 'aws-btn-content-2',
      style: [styles.container, dynamicStyles.container, animatedValues.animatedContainer, style]
    }, React.createElement(Animated.View, {
      testID: 'aws-btn-shadow',
      style: [styles.shadow, dynamicStyles.shadow, animatedValues.animatedShadow]
    }), React.createElement(View, {
      testID: 'aws-btn-bottom',
      style: [styles.bottom, dynamicStyles.bottom]
    }), React.createElement(Animated.View, {
      testID: 'aws-btn-content',
      style: [styles.content, dynamicStyles.content, animatedValues.animatedContent]
    }, React.createElement(View, {
      testID: 'aws-btn-text',
      style: [styles.text, dynamicStyles.text],
      onLayout: this.textLayout
    }, ExtraContent, React.createElement(Animated.View, {
      testID: 'aws-btn-active-background',
      style: [styles.activeBackground, dynamicStyles.activeBackground, animatedValues.animatedActive]
    }), this.state.activity === true && React.createElement(Fragment, null, React.createElement(Animated.View, {
      testID: 'aws-btn-progress',
      style: [styles.progress, dynamicStyles.progress, animatedValues.animatedProgress]
    }), React.createElement(Animated.View, {
      testID: 'aws-btn-activity-indicator',
      style: [styles.container__activity, animatedValues.animatedActivity]
    }, React.createElement(ActivityIndicator, {
      color: activityColor
    }))), this.renderContent(dynamicStyles)))));
  }

}
Button.propTypes = {
  activityColor: PropTypes.string,
  backgroundActive: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundDarker: PropTypes.string,
  backgroundPlaceholder: PropTypes.string,
  backgroundProgress: PropTypes.string,
  backgroundShadow: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  children: PropTypes.node,
  ExtraContent: PropTypes.node,
  disabled: PropTypes.bool,
  height: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  onPress: PropTypes.func,
  progress: PropTypes.bool,
  paddingBottom: PropTypes.number,
  raiseLevel: PropTypes.number,
  springRelease: PropTypes.bool,
  stretch: PropTypes.bool,
  style: ViewPropTypes.style,
  textColor: PropTypes.string,
  textLineHeight: PropTypes.number,
  textSize: PropTypes.number,
  textFamily: PropTypes.string,
  width: PropTypes.number
};
Button.defaultProps = {
  activityColor: DEFAULT_ACTIVITY_COLOR,
  activeOpacity: DEFAULT_ACTIVE_OPACITY,
  backgroundActive: DEFAULT_BACKGROUND_ACTIVE,
  backgroundColor: DEFAULT_BACKGROUND_COLOR,
  backgroundDarker: DEFAULT_BACKGROUND_DARKER,
  backgroundImage: null,
  backgroundPlaceholder: DEFAULT_BACKGROUND_SHADOW,
  backgroundProgress: DEFAULT_BACKGROUND_SHADOW,
  backgroundShadow: DEFAULT_BACKGROUND_SHADOW,
  borderColor: null,
  borderRadius: DEFAULT_BORDER_RADIUS,
  borderWidth: DEFAULT_BORDER_WIDTH,
  children: null,
  disabled: false,
  height: DEFAULT_HEIGHT,
  paddingHorizontal: DEFAULT_HORIZONTAL_PADDING,
  onPress: null,
  progress: false,
  paddingBottom: 0,
  paddingTop: 0,
  progressLoadingTime: ANIMATED_TIMING_LOADING,
  raiseLevel: DEFAULT_RAISE_LEVEL,
  springRelease: true,
  stretch: false,
  style: null,
  textColor: DEFAULT_TEXT_COLOR,
  textLineHeight: DEFAULT_LINE_HEIGHT,
  textSize: DEFAULT_TEXT_SIZE,
  textFontFamily: null,
  width: DEFAULT_WIDTH
};

var COMMON = {
  borderRadius: 4,
  height: 55,
  raiseLevel: 6
}; // const SOCIAL_TYPES = SocialTypes(COMMON);

var BUTTONS = {
  primary: _objectSpread2({}, COMMON, {
    backgroundColor: '#1775c8',
    backgroundDarker: '#125a9a',
    backgroundProgress: '#125a9a',
    textColor: '#FFF',
    activityColor: '#b3e5e1'
  }),
  secondary: _objectSpread2({}, COMMON, {
    backgroundColor: '#e9f0f5',
    backgroundDarker: '#0e71c8',
    backgroundActive: '#dae8f3',
    backgroundProgress: '#c8e3f5',
    backgroundPlaceholder: '#1e88e5',
    textColor: '#1e88e5',
    borderWidth: 1,
    borderColor: '#1e88e5',
    activityColor: '#1e88e5'
  }),
  anchor: _objectSpread2({}, COMMON, {
    backgroundColor: '#0e4f88',
    backgroundDarker: '#083156',
    backgroundProgress: '#083156',
    textColor: '#FFF',
    activityColor: '#FFF'
  }),
  disabled: _objectSpread2({}, COMMON, {
    backgroundColor: '#DFDFDF',
    backgroundDarker: '#CACACA',
    textColor: '#B6B6B6'
  }),
  primaryFlat: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundDarker: 'rgba(0, 0, 0, 0)',
    backgroundShadow: 'rgba(0, 0, 0, 0)',
    raiseLevel: 0,
    borderRadius: 0
  } // ...SOCIAL_TYPES,

};
var SIZE = {
  small: {
    width: 120,
    height: 42,
    textSize: 12
  },
  medium: {
    width: 200,
    height: 55
  },
  large: {
    width: 250,
    height: 60,
    textSize: 16
  }
};

function theme(props) {
  var {
    disabled,
    type,
    size
  } = props;
  var styles = disabled ? BUTTONS.disabled : BUTTONS[type];
  var sizeObj = size ? SIZE[size] : {};
  return React.createElement(Button, _extends({}, styles, sizeObj, props));
}

theme.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string
};
theme.defaultProps = {
  type: 'primary',
  disabled: false,
  size: null
};

export default theme;
