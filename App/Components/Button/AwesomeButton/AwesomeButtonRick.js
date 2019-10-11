import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import { Easing, Animated, StyleSheet, TouchableWithoutFeedback, View, ActivityIndicator, ViewPropTypes } from 'react-native';

function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}

function _extends() {
  return (_extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
      }
    }
    return target;
  }).apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter((function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    }))), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(source, !0).forEach((function(key) {
      _defineProperty(target, key, source[key]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(source).forEach((function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    }));
  }
  return target;
}

var ANIMATED_SPRING_FRICTION = 6.75, ANIMATED_SPRING_TENSION = 100, ANIMATED_ELASTIC_DURATION = 300, ANIMATED_ELASTIC_BOUNCINESS = 1.2, ANIMATED_TIMING_OFF = 100, ANIMATED_TIMING_IN = 200;

function animateTiming(_ref) {
  var {variable, toValue, duration = ANIMATED_TIMING_IN, delay = 0, easing = Easing.easeOut, callback = null} = _ref;
  Animated.timing(variable, {
    toValue,
    duration,
    easing,
    delay,
    useNativeDriver: !0
  }).start(callback);
}

function animateSpring(_ref2) {
  var {variable, toValue, delay = 0, tension = ANIMATED_SPRING_TENSION, friction = ANIMATED_SPRING_FRICTION, callback = null} = _ref2;
  Animated.spring(variable, {
    toValue,
    tension,
    friction,
    delay,
    useNativeDriver: !0
  }).start(callback);
}

function animateElastic(params) {
  animateTiming(_objectSpread2({
    duration: ANIMATED_ELASTIC_DURATION,
    easing: Easing.elastic(ANIMATED_ELASTIC_BOUNCINESS)
  }, params));
}

var memoized = function memoize(fn) {
  var _this = this;
  return memoize.cache = {}, memoize.size = 0, function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var key = JSON.stringify(args);
    if (memoize.cache[key]) {
      return memoize.cache[key];
    }
    var value = fn.apply(_this, args);
    return memoize.size > 1e3 && (memoize.size = 0, memoize.cache = {}), memoize.size += 1, 
    memoize.cache[key] = value, value;
  };
}(_ref => {
  var {backgroundActive, backgroundColor, backgroundDarker, backgroundPlaceholder, backgroundProgress, backgroundShadow, borderColor, borderRadius, borderWidth, height, paddingBottom, paddingHorizontal, paddingTop, raiseLevel, stateWidth, stretch, textColor, textFontFamily, textLineHeight, textSize, width} = _ref, calcHeight = height + paddingBottom + paddingTop, calcWidth = stretch ? '100%' : width || stateWidth || null, dimensionsDiff = {
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
}), getStyles = _ref2 => {
  var {backgroundActive, backgroundColor, backgroundDarker, backgroundPlaceholder, backgroundProgress, backgroundShadow, borderColor, borderRadius, borderWidth, height, paddingBottom, paddingHorizontal, paddingTop, raiseLevel, stateWidth, stretch, textColor, textFontFamily, textLineHeight, textSize, width} = _ref2;
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
}, styles = StyleSheet.create({
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
    super(props), _defineProperty(this, 'pressIn', () => {
      if (!0 === this.props.disabled || !this.props.children || !0 === this.animating) {
        return !1;
      }
      this.pressing = !0, this.props.progress && (this.animating = !0), animateTiming({
        variable: this.animatedValue,
        toValue: 1,
        duration: ANIMATED_TIMING_OFF
      }), animateTiming({
        variable: this.animatedActive,
        toValue: 1,
        duration: ANIMATED_TIMING_OFF
      }), animateTiming({
        variable: this.animatedOpacity,
        toValue: this.props.progress ? 1 : this.props.activeOpacity,
        duration: ANIMATED_TIMING_OFF,
        callback: () => {
          this.pressing = !1;
        }
      });
    }), _defineProperty(this, 'pressOut', () => !(!0 === this.props.disabled || !this.props.children) && (!0 !== this.animating ? !1 === this.pressing ? (this.press(), 
    void this.release()) : void (this.timeout = setTimeout(() => {
      this.press(), this.release();
    }, ANIMATED_TIMING_OFF / 2.5)) : void this.press())), _defineProperty(this, 'press', () => {
      !0 === this.props.progress && (this.animating = !0, this.setState({
        activity: !0
      }, () => {
        this.animateLoadingStart(), animateTiming({
          variable: this.loadingOpacity,
          toValue: 1
        }), animateElastic({
          variable: this.textOpacity,
          toValue: 0
        }), animateElastic({
          variable: this.activityOpacity,
          toValue: 1
        });
      })), this.props.onPress && this.props.onPress(this.end);
    }), _defineProperty(this, 'end', _callback => {
      !0 === this.props.progress && (this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        animateTiming({
          variable: this.animatedLoading,
          toValue: 1,
          callback: () => {
            animateElastic({
              variable: this.textOpacity,
              toValue: 1
            }), animateElastic({
              variable: this.activityOpacity,
              toValue: 0,
              callback: () => {
                _callback && _callback();
              }
            }), animateTiming({
              variable: this.loadingOpacity,
              toValue: 0,
              delay: 100,
              callback: () => {
                this.release(() => {
                  this.animating = !1;
                });
              }
            });
          }
        });
      }, 50));
    }), _defineProperty(this, 'textLayout', event => {
      this.containerWidth = event.nativeEvent.layout.width, this.props.width === null && !this.props.stretch == 1 && (this.state.width !== event.nativeEvent.layout.width && this.state.width < event.nativeEvent.layout.width && this.setState({
        width: event.nativeEvent.layout.width
      }), this.animatedOpacity.setValue(1));
    }), this.loadingOpacity = new Animated.Value(1), this.textOpacity = new Animated.Value(1), 
    this.activityOpacity = new Animated.Value(0), this.animatedActive = new Animated.Value(0), 
    this.animatedValue = new Animated.Value(0), this.animatedLoading = new Animated.Value(0), 
    this.animatedOpacity = new Animated.Value(props.width === null && !0 == !props.stretch ? 0 : 1), 
    this.layouted = null, this.animating = !1, this.timeout = null, this.pressing = !1, 
    this.containerWidth = null, this.state = {
      activity: !1,
      width: null
    };
  }
  getAnimatedValues() {
    var width = this.containerWidth ? -1 * this.containerWidth : 0;
    return {
      animatedContainer: {
        opacity: this.animatedOpacity
      },
      animatedShadow: {
        transform: [ {
          translateY: this.animatedValue.interpolate({
            inputRange: [ 0, 1 ],
            outputRange: [ 0, -this.props.raiseLevel / 2 ]
          })
        } ]
      },
      animatedContent: {
        transform: [ {
          translateY: this.animatedValue.interpolate({
            inputRange: [ 0, 1 ],
            outputRange: [ 0, this.props.raiseLevel ]
          })
        } ]
      },
      animatedActive: {
        opacity: this.animatedActive
      },
      animatedActivity: {
        opacity: this.activityOpacity,
        transform: [ {
          scale: this.activityOpacity
        } ]
      },
      animatedProgress: {
        opacity: this.loadingOpacity,
        transform: [ {
          translateX: this.animatedLoading.interpolate({
            inputRange: [ 0, 1 ],
            outputRange: [ width, 0 ]
          })
        } ]
      }
    };
  }
  release(callback) {
    if (!0 === this.props.springRelease) {
      return animateSpring({
        variable: this.animatedActive,
        toValue: 0
      }), animateSpring({
        variable: this.animatedValue,
        toValue: 0,
        callback
      }), void animateTiming({
        variable: this.animatedOpacity,
        toValue: 1,
        duration: ANIMATED_TIMING_OFF
      });
    }
    animateTiming({
      variable: this.animatedActive,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF
    }), animateTiming({
      variable: this.animatedOpacity,
      toValue: 1,
      duration: ANIMATED_TIMING_OFF
    }), animateTiming({
      variable: this.animatedValue,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF,
      callback
    });
  }
  animateLoadingStart() {
    this.animatedLoading.setValue(0), animateTiming({
      variable: this.animatedLoading,
      toValue: 1,
      duration: this.props.progressLoadingTime
    });
  }
  renderContent(dynamicStyles) {
    var {children} = this.props, animatedStyles = {
      opacity: this.textOpacity,
      transform: [ {
        scale: this.textOpacity
      } ]
    };
    return children ? typeof children === 'string' ? React.createElement(Animated.Text, {
      testID: 'aws-btn-content-text',
      style: [ styles.container__text, dynamicStyles.container__text, animatedStyles ]
    }, children) : React.createElement(Animated.View, {
      style: [ styles.container__view, dynamicStyles.container__view, animatedStyles ]
    }, children) : React.createElement(Animated.View, {
      testID: 'aws-btn-content-placeholder',
      style: [ styles.container__placeholder, dynamicStyles.container__placeholder, animatedStyles ]
    });
  }
  render() {
    var animatedValues = this.getAnimatedValues(), dynamicStyles = getStyles(_objectSpread2({}, this.props, {
      stateWidth: this.state.width
    })), {ExtraContent, style, activityColor} = this.props;
    return React.createElement(TouchableWithoutFeedback, {
      testID: 'aws-btn-content-view',
      onPressIn: this.pressIn,
      onPressOut: this.pressOut
    }, React.createElement(Animated.View, {
      testID: 'aws-btn-content-2',
      style: [ styles.container, dynamicStyles.container, animatedValues.animatedContainer, style ]
    }, React.createElement(Animated.View, {
      testID: 'aws-btn-shadow',
      style: [ styles.shadow, dynamicStyles.shadow, animatedValues.animatedShadow ]
    }), React.createElement(View, {
      testID: 'aws-btn-bottom',
      style: [ styles.bottom, dynamicStyles.bottom ]
    }), React.createElement(Animated.View, {
      testID: 'aws-btn-content',
      style: [ styles.content, dynamicStyles.content, animatedValues.animatedContent ]
    }, React.createElement(View, {
      testID: 'aws-btn-text',
      style: [ styles.text, dynamicStyles.text ],
      onLayout: this.textLayout
    }, ExtraContent, React.createElement(Animated.View, {
      testID: 'aws-btn-active-background',
      style: [ styles.activeBackground, dynamicStyles.activeBackground, animatedValues.animatedActive ]
    }), !0 === this.state.activity && React.createElement(Fragment, null, React.createElement(Animated.View, {
      testID: 'aws-btn-progress',
      style: [ styles.progress, dynamicStyles.progress, animatedValues.animatedProgress ]
    }), React.createElement(Animated.View, {
      testID: 'aws-btn-activity-indicator',
      style: [ styles.container__activity, animatedValues.animatedActivity ]
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
}, Button.defaultProps = {
  activityColor: '#FFFFFF',
  activeOpacity: 1,
  backgroundActive: 'rgba(0, 0, 0, 0.15)',
  backgroundColor: '#c0c0c0',
  backgroundDarker: '#9f9f9f',
  backgroundImage: null,
  backgroundPlaceholder: 'rgba(0, 0, 0, 0.15)',
  backgroundProgress: 'rgba(0, 0, 0, 0.15)',
  backgroundShadow: 'rgba(0, 0, 0, 0.15)',
  borderColor: null,
  borderRadius: 4,
  borderWidth: 0,
  children: null,
  disabled: !1,
  height: 60,
  paddingHorizontal: 12,
  onPress: null,
  progress: !1,
  paddingBottom: 0,
  paddingTop: 0,
  progressLoadingTime: 3e3,
  raiseLevel: 4,
  springRelease: !0,
  stretch: !1,
  style: null,
  textColor: '#FFFFFF',
  textLineHeight: 20,
  textSize: 14,
  textFontFamily: null,
  width: null
};

var COMMON = {
  borderRadius: 25,
  height: 55,
  activityColor: '#FFFFFF',
  raiseLevel: 6
}, BUTTONS = {
  primary: _objectSpread2({}, COMMON, {
    backgroundColor: '#aad3ea',
    backgroundDarker: '#57a9d4',
    backgroundPlaceholder: '#8dbdd9',
    textColor: '#2e84b1',
    backgroundProgress: '#57a9d4'
  }),
  secondary: _objectSpread2({}, COMMON, {
    backgroundColor: '#FAFAFA',
    backgroundDarker: '#67cbc3',
    backgroundActive: '#e7fcfb',
    backgroundPlaceholder: '#b3e5e1',
    textColor: '#349890',
    backgroundProgress: '#c5ece8',
    borderWidth: 2,
    borderColor: '#b3e5e1',
    activityColor: '#349890'
  }),
  anchor: _objectSpread2({}, COMMON, {
    backgroundColor: '#95d44a',
    backgroundDarker: '#489d2b',
    textColor: '#34711f',
    backgroundProgress: '#489d2b',
    borderWidth: 2,
    borderColor: '#5bbd3a'
  }),
  disabled: _objectSpread2({}, COMMON, {
    backgroundColor: '#e8fcda',
    backgroundDarker: '#bde1a2',
    textColor: '#c7f2a9',
    borderWidth: 2,
    borderColor: '#c7e8ae'
  }),
  primaryFlat: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundDarker: 'rgba(0, 0, 0, 0)',
    backgroundShadow: 'rgba(0, 0, 0, 0)',
    raiseLevel: 0,
    borderRadius: 0
  }
}, SIZE = {
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
  var {disabled, type, size} = props, styles = disabled ? BUTTONS.disabled : BUTTONS[type], sizeObj = size ? SIZE[size] : {};
  return React.createElement(Button, _extends({}, styles, sizeObj, props));
}

theme.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string
}, theme.defaultProps = {
  type: 'primary',
  disabled: !1,
  size: null
};

export default theme;
