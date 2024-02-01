
/* IMPORT */

import Reference from './types/reference';

import BigInt from './types/bigint';
import Boolean from './types/boolean';
import Null from './types/null';
import Number from './types/number';
import String from './types/string';
import Symbol from './types/symbol';
import Undefined from './types/undefined';

import BoxedBigInt from './types/boxed_bigint';
import BoxedBoolean from './types/boxed_boolean';
import BoxedNumber from './types/boxed_number';
import BoxedString from './types/boxed_string';
import BoxedSymbol from './types/boxed_symbol';

import Array from './types/array';
import ArrayBuffer from './types/array_buffer';
import Date from './types/date';
import Function from './types/function';
import Map from './types/map';
import Promise from './types/promise';
import RegExp from './types/regexp';
import Set from './types/set';

import EvalError from './types/eval_error';
import RangeError from './types/range_error';
import ReferenceError from './types/reference_error';
import SyntaxError from './types/syntax_error';
import TypeError from './types/type_error';
import URIError from './types/uri_error';
import Error from './types/error';

import BigInt64Array from './types/bigint64array';
import BigUint64Array from './types/biguint64array';
import Float32Array from './types/float32array';
import Float64Array from './types/float64array';
import Int8Array from './types/int8array';
import Int16Array from './types/int16array';
import Int32Array from './types/int32array';
import Uint8Array from './types/uint8array';
import Uint16Array from './types/uint16array';
import Uint32Array from './types/uint32array';
import Uint8ClampedArray from './types/uint8clampedarray';

import PlainObject from './types/plain_object';

/* MAIN */

const TYPES = [
  Reference,

  BigInt,
  Boolean,
  Null,
  Number,
  String,
  Symbol,
  Undefined,

  BoxedBigInt,
  BoxedBoolean,
  BoxedNumber,
  BoxedString,
  BoxedSymbol,

  Array,
  ArrayBuffer,
  Date,
  Function,
  Map,
  Promise,
  RegExp,
  Set,

  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
  Error,

  BigInt64Array,
  BigUint64Array,
  Float32Array,
  Float64Array,
  Int8Array,
  Int16Array,
  Int32Array,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Uint8ClampedArray,

  PlainObject
];

/* EXPORT */

export {TYPES};
