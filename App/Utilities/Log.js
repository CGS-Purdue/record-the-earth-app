import React, { Component, forwardRef } from 'react';

class Log {
  static _log(message, ...args) {
    if (__DEV__) {
      return console.log( 'LOG', message, args);
    }
  }
  static _data(msg) {
    if (__DEV__) {
      console.log([
        `${msg.title}`,
        `src: ${msg.src}`
      ].join('\n'));
      console.log(msg.data);
    }
  }
  static _info(msg) {
    if (__DEV__) {
      return console.log(msg);
    }
  }

  static _warn(msg, ...args) {
    if (__DEV__) {
    return console.log({
        name: 'WARN',
        preview: msg,
        value: { msg, args },
        important: true,
      });
    }
  }

  static _error(message, ...args) {
    if (__DEV__) {
      return console.log({
        name: 'ERROR',
        preview: message,
        value: { message, args },
        important: true,
      });
    }
  }
}

export { Log }
