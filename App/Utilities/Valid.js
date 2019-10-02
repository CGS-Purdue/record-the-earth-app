
export const isPromise = (__promised) => {
  return typeof __promised.then === 'function';
};

export const isFunction = (__functional) => {
  return typeof __functional === 'function';
};

export const isDefined = (__definined) => {
  return !(typeof __definined === 'undefined');
};

export const isArray = (__arrayed) => {
  return __arrayed instanceof Array;
};

export const isObject = (__objective) => {
  return typeof __objective === 'object';
};

export const isString = (__stringy) => {
  return typeof __stringy === 'string';
};


// // Native  Check to see if an object is a plain object (created using “{}” or “new Object”).
// function isPlainObject (obj) {
//   if (typeof (obj) !== 'object'
//       || obj.nodeType
//       || obj !== null
//       && obj !== undefined
//       && obj === obj.window) {
//     return false;
//   }
//
//   if (obj.constructor &&
//       !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
//     return false;
//   }
//
//   return true;
// }


// Contents of two or more objects together into a new object, without modifying either argument.
export const object_merge = (defaults, ...overides) => {
  let empty = Object.create(null);
  return Object.assign(empty, defaults, ...overides);
};



export const getEmptyObj = () =>{
  return Object.create(null);
};


export const EmtpyObj = (() =>{
  return Object.create(null);
})();


// Check to see if an object is empty (contains no enumerable properties).

// Native
// function isFunction(item) {
//
//   if (typeof item === 'function') {
//     return true;
//   }
//
//   var type = Object.prototype.toString(item);
//     return type === '[object Function]'
//         || type === '[object GeneratorFunction]';
// }


// Native
// function isWindow(obj) {
//  return obj !== null && obj !== undefined && obj === obj.window;
// }


// // Native
// Array.isArray(array);


// // Search for a specified value within an array and return its index (or -1 if not found).
// // Native
// Array.indexOf(item) > -1;
//
// // ES6-way
// Array.includes(item);


// Native
// function isNumeric(value) {
 // return !isNaN(parseFloat(n)) && isFinite(n);
// }

//
//
// function isProperty(prop) {
//   if (this.snapshot[prop]) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// // INSPIRED FROM LODASH
// // IS EMPTY OBJECT
// function isEmptyObject (item) {
//   return ( Object.keys(item).length === 0 );
// }
//
//
// // IS EMPTY ARRAY
// function isEmptyArray (item) {
//   if (Array.isArray(item)) {
//     return ( item.length === 0);
//   } else { return false; }
// }
//
//
// function isEmptyString (item){
//   return (item === '' );
// }
//
// function isFalse (item) {
//   return ( ! item );
// }
//
// function doesNotExist (item) {
//   return (typeof item === 'undefined');
// }
