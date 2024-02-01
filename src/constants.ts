
/* IMPORT */

import Reference from './datatypes/special/reference';

import BigInt from './datatypes/primitives/bigint';
import Boolean from './datatypes/primitives/boolean';
import Null from './datatypes/primitives/null';
import Number from './datatypes/primitives/number';
import String from './datatypes/primitives/string';
import Symbol from './datatypes/primitives/symbol';
import Undefined from './datatypes/primitives/undefined';

import BoxedBigInt from './datatypes/boxed_primitives/bigint';
import BoxedBoolean from './datatypes/boxed_primitives/boolean';
import BoxedNumber from './datatypes/boxed_primitives/number';
import BoxedString from './datatypes/boxed_primitives/string';
import BoxedSymbol from './datatypes/boxed_primitives/symbol';

import Array from './datatypes/others/array';
import ArrayBuffer from './datatypes/others/array_buffer';
import Date from './datatypes/others/date';
import Function from './datatypes/others/function';
import Map from './datatypes/others/map';
import Promise from './datatypes/others/promise';
import RegExp from './datatypes/others/regexp';
import Set from './datatypes/others/set';

import EvalError from './datatypes/errors/eval_error';
import RangeError from './datatypes/errors/range_error';
import ReferenceError from './datatypes/errors/reference_error';
import SyntaxError from './datatypes/errors/syntax_error';
import TypeError from './datatypes/errors/type_error';
import URIError from './datatypes/errors/uri_error';
import Error from './datatypes/errors/error';

import BigInt64Array from './datatypes/typed_arrays/bigint64array';
import BigUint64Array from './datatypes/typed_arrays/biguint64array';
import Float32Array from './datatypes/typed_arrays/float32array';
import Float64Array from './datatypes/typed_arrays/float64array';
import Int8Array from './datatypes/typed_arrays/int8array';
import Int16Array from './datatypes/typed_arrays/int16array';
import Int32Array from './datatypes/typed_arrays/int32array';
import Uint8Array from './datatypes/typed_arrays/uint8array';
import Uint16Array from './datatypes/typed_arrays/uint16array';
import Uint32Array from './datatypes/typed_arrays/uint32array';
import Uint8ClampedArray from './datatypes/typed_arrays/uint8clampedarray';

import PlainObject from './datatypes/others/plain_object';

/* MAIN */

const TYPES = <const> [
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
