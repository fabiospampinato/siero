
/* IMPORT */

import {serialize} from '../dist/index.js';

/* HELPERS */

Error.stackTraceLimit = 0;

/* MAIN */

const SERIALIZABLE = {
  bigint: 123n,
  booleanTrue: true,
  booleanFalse: false,
  number: 123,
  string: 'string',
  stringLong: 'a'.repeat ( 1_000_000 ),
  null: null,
  undefined: undefined,
  date: new Date (),
  map: new Map ([ ['foo', /re/], ['bar', [123]] ]),
  plainObject: { foo: /re/ },
  regexp: /re/,
  set: new Set ([ 'foo', /re/ ]),
  error: new Error ( 'foo' ),
  evalError: new EvalError ( 'foo' ),
  rangeError: new RangeError ( 'foo' ),
  referenceError: new ReferenceError ( 'foo' ),
  syntaxError: new SyntaxError ( 'foo' ),
  typeError: new TypeError ( 'foo' ),
  uriError: new URIError ( 'foo' ),
  array: [0, 1, 2, 3, 4, 5, 6],
  arrayBuffer: new ArrayBuffer ( 6 ),
  bigint64array: new BigInt64Array ([ 0n, 1n, 2n, 3n, 4n, 5n, 6n ]),
  biguint64array: new BigUint64Array ([ 0n, 1n, 2n, 3n, 4n, 5n, 6n ]),
  float32array: new Float32Array ([ 0, 1, 2, 3, 4, 5, 6 ]),
  float64array: new Float64Array ([ 0, 1, 2, 3, 4, 5, 6 ]),
  int8array: new Int8Array ([ 0, 1, 2, 3, 4, 5, 6 ]),
  int16array: new Int16Array ([ 0, 1, 2, 3, 4, 5, 6 ]),
  int32array: new Int32Array ([ 0, 1, 2, 3, 4, 5, 6 ]),
  uint8array: new Uint8Array ([ 0, 1, 2, 3, 4, 5, 6 ]),
  uint16array: new Uint16Array ([ 0, 1, 2, 3, 4, 5, 6 ]),
  uint32array: new Uint32Array ([ 0, 1, 2, 3, 4, 5, 6 ]),
  uint8clampedarray: new Uint8ClampedArray ([ 0, 1, 2, 3, 4, 5, 6 ])
};

const DESERIALIZABLE = serialize ( SERIALIZABLE );

/* EXPORT */

export {SERIALIZABLE, DESERIALIZABLE};
