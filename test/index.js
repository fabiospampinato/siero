
/* IMPORT */

import {describe, t} from 'fava';
import {serialize, deserialize} from '../bundle/index.js';

/* HELPERS */

const testReferences = value => {
  const clone = deserialize ( serialize ( [value, value] ) );
  t.is ( clone[0], clone[1] );
};

const testSerialization = value => {
  const clone = deserialize ( serialize ( value ) );
  t.deepEqual ( clone, value );
};

/* MAIN */

describe ( 'Siero', () => {

  describe ( 'supports various types', it => {

    it ( 'array', () => {

      testSerialization ( [] );
      testSerialization ( [true, false, 0, -0, NaN, null, undefined, 0n, 123n, 'foo', new Date (), /re/, {}] );
      testSerialization ( [[[[[]]]]] );
      testSerialization ( [undefined, undefined, undefined] );
      testSerialization ( [,,] );

    });

    it ( 'array holes', () => {

      const clone = deserialize ( serialize ( [,,1,,] ) );

      t.false ( 0 in clone );
      t.false ( 1 in clone );
      t.true ( 2 in clone );
      t.false ( 3 in clone );
      t.false ( 4 in clone );

    });

    it ( 'array buffer', () => {

      testSerialization ( new Int8Array ([ 1, 2, 3 ]).buffer );

    });

    it ( 'bigint', () => {

      testSerialization ( 0n );
      testSerialization ( 123n );
      testSerialization ( 90071992547409919007199254740991n );
      testSerialization ( -0n );
      testSerialization ( -123n );
      testSerialization ( -90071992547409919007199254740991n );

    });

    it ( 'boolean', () => {

      testSerialization ( true );
      testSerialization ( false );

    });

    it ( 'dataview', () => {

      testSerialization ( new DataView ( new ArrayBuffer () ) );
      testSerialization ( new DataView ( new ArrayBuffer ( 3 ) ) );

    });

    it ( 'dataview (metadata)', () => {

      const buffer = new Uint8Array ([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]).buffer;
      const dataView = new DataView ( buffer, 1, 3 );
      const clone = deserialize ( serialize ( dataView ) );

      t.deepEqual ( dataView, clone );
      t.is ( dataView.byteOffset, clone.byteOffset );
      t.is ( dataView.byteLength, clone.byteLength );

    });

    it ( 'date', () => {

      testSerialization ( new Date () );
      testSerialization ( new Date ( 1543144020477 ) );
      testSerialization ( new Date ( '2020-01-25T20:53:55.206Z' ) );

    });

    it ( 'function (sync, positive)', async () => {

      const fn = ( a, b ) => a + b;

      const serialized = serialize ( fn );
      const deserialized = deserialize ( serialized );

      await deserialized ( 1, 2 ).then ( res => t.is ( res, 3 ) );

    });

    it ( 'function (async, positive)', async () => {

      const fn = async ( a, b ) => a + b;

      const serialized = serialize ( fn );
      const deserialized = deserialize ( serialized );

      await deserialized ( 1, 2 ).then ( res => t.is ( res, 3 ) );

    });

    it ( 'function (sync, negative)', async () => {

      const fn = ( a, b ) => { throw a + b };

      const serialized = serialize ( fn );
      const deserialized = deserialize ( serialized );

      await deserialized ( 1, 2 ).catch ( err => t.is ( err, 3 ) );

    });

    it ( 'function (async, negative)', async () => {

      const fn = async ( a, b ) => { throw a + b };

      const serialized = serialize ( fn );
      const deserialized = deserialize ( serialized );

      await deserialized ( 1, 2 ).catch ( err => t.is ( err, 3 ) );

    });

    it ( 'map', () => {

      testSerialization ( new Map ( [[ 'foo', /re/], [ 'bar', [123] ]] ) );

    });

    it ( 'null', () => {

      testSerialization ( null );

    });

    it ( 'number', () => {

      testSerialization ( 0 );
      testSerialization ( 123 );
      testSerialization ( 123.123 );
      testSerialization ( 123e12 );
      testSerialization ( 123e-12 );
      testSerialization ( 123.123e12 );
      testSerialization ( 123.123e-12 );
      testSerialization ( Infinity );
      testSerialization ( -0 );
      testSerialization ( -123 );
      testSerialization ( -123.123 );
      testSerialization ( -123e12 );
      testSerialization ( -123e-12 );
      testSerialization ( -123.123e12 );
      testSerialization ( -123.123e-12 );
      testSerialization ( -Infinity );
      testSerialization ( NaN );

    });

    it ( 'plain object', () => {

      testSerialization ( { 1: true, 2: false, 3: 0, 4: -0, 5: NaN, 6: null, 7: undefined, 8: 0n, 9: 123n, 10: 'foo', 11: new Date (), 12: /re/, 13: [] } );
      testSerialization ( { foo: { bar: {}, baz: {} } } );
      testSerialization ( { foo: undefined } );
      testSerialization ( { length: 1 } );

      testSerialization ( { foo: 123, [Symbol ()]: 123 } );
      testSerialization ( { foo: 123, [Symbol ()]: 123, [Symbol ()]: 321 } );

      testSerialization ( { value: 1, get foo () { return this.value; }, set foo ( value ) {} } );

      testSerialization ( Object.create ( null ) );
      testSerialization ( Object.create ( null, { foo: { value: 123 } } ) );

      t.is ( Object.getPrototypeOf ( deserialize ( serialize ( Object.create ( null ) ) ) ), null );

      t.is ( Object.isExtensible ( deserialize ( serialize ( {} ) ) ), true );
      t.is ( Object.isExtensible ( deserialize ( serialize ( Object.preventExtensions ( {} ) ) ) ), false );

      t.is ( Object.isFrozen ( deserialize ( serialize ( {} ) ) ), false );
      t.is ( Object.isFrozen ( deserialize ( serialize ( Object.freeze ( {} ) ) ) ), true );

      t.is ( Object.isSealed ( deserialize ( serialize ( {} ) ) ), false );
      t.is ( Object.isSealed ( deserialize ( serialize ( Object.seal ( {} ) ) ) ), true );

    });

    it ( 'promise (positive)', async () => {

      const promise = new Promise ( resolve => {
        setTimeout ( () => {
          resolve ( 123 );
        }, 500 );
      });

      const serialized = serialize ( promise );
      const deserialized = deserialize ( serialized );

      await promise.then ( res1 => deserialized.then ( res2 => t.is ( res1, res2 ) ) );

    });

    it ( 'promise (negative)', async () => {

      const promise = new Promise ( ( resolve, reject ) => {
        setTimeout ( () => {
          reject ( 123 );
        }, 500 );
      });

      const serialized = serialize ( promise );
      const deserialized = deserialize ( serialized );

      await promise.catch ( err1 => deserialized.catch ( err2 => t.is ( err1, err2 ) ) );

    });

    it ( 'regexp', () => {

      testSerialization ( /a/ );
      testSerialization ( /a/gmi );
      testSerialization ( /a....a/gmi );
      testSerialization ( new RegExp ( 'a' ) );
      testSerialization ( new RegExp ( 'a', 'gmi' ) );
      testSerialization ( new RegExp ( 'a....a', 'gmi' ) );

    });

    it ( 'set', () => {

      testSerialization ( new Set ( ['foo', /re/, [123]] ) );

    });

    it ( 'string', () => {

      testSerialization ( '' );
      testSerialization ( 'foo' );
      testSerialization ( '\0\n' );
      testSerialization ( '\uffef' );

    });

    it ( 'symbol (known)', () => {

      const knowns = ['asyncIterator', 'hasInstance', 'isConcatSpreadable', 'iterator', 'match', 'matchAll', 'replace', 'search', 'species', 'split', 'toPrimitive', 'toStringTag', 'unscopables', 'dispose', 'asyncDispose'];

      for ( const known of knowns ) {

        testSerialization ( Symbol[known] );

      }

    });

    it ( 'symbol (custom)', () => {

      testSerialization ( Symbol () );
      testSerialization ( Symbol () );

      const symbol = Symbol ();

      testSerialization ( symbol );
      testSerialization ( symbol );

    });

    it ( 'undefined', () => {

      testSerialization ( undefined );

    });

    it ( 'boxed bigint', () => {

      testSerialization ( Object ( 123n ) );

    });

    it ( 'boxed boolean', () => {

      testSerialization ( Object ( true ) );
      testSerialization ( Object ( false ) );

    });

    it ( 'boxed number', () => {

      testSerialization ( Object ( 123 ) );

    });

    it ( 'boxed string', () => {

      testSerialization ( Object ( 'foo' ) );

    });

    it ( 'boxed symbol', () => {

      testSerialization ( Object ( Symbol () ) );

    });

    it ( 'error', () => {

      testSerialization ( new Error () );
      testSerialization ( new Error ( 'asd' ) );

    });

    it ( 'aggregate error', () => {

      testSerialization ( new AggregateError ( [] ) );
      testSerialization ( new AggregateError ( [new Error ( 'one' ), new Error ( 'two' )], 'asd' ) );

    });

    it ( 'eval error', () => {

      testSerialization ( new EvalError () );
      testSerialization ( new EvalError ( 'asd' ) );

    });

    it ( 'range error', () => {

      testSerialization ( new RangeError () );
      testSerialization ( new RangeError ( 'asd' ) );

    });

    it ( 'reference error', () => {

      testSerialization ( new ReferenceError () );
      testSerialization ( new ReferenceError ( 'asd' ) );

    });

    it ( 'syntax error', () => {

      testSerialization ( new SyntaxError () );
      testSerialization ( new SyntaxError ( 'asd' ) );

    });

    it ( 'type error', () => {

      testSerialization ( new TypeError () );
      testSerialization ( new TypeError ( 'asd' ) );

    });

    it ( 'uri error', () => {

      testSerialization ( new URIError () );
      testSerialization ( new URIError ( 'asd' ) );

    });

    it ( 'bigint64array', () => {

      testSerialization ( new BigInt64Array () );
      testSerialization ( new BigInt64Array ([ 1n, 2n, 3n, -3n, -2n, -1n ]) );

    });

    it ( 'biguint64array', () => {

      testSerialization ( new BigUint64Array () );
      testSerialization ( new BigUint64Array ([ 1n, 2n, 3n ]) );

    });

    it ( 'float32array', () => {

      testSerialization ( new Float32Array () );
      testSerialization ( new Float32Array ([ 1.1, 2.2, 3.3 ]) );

    });

    it ( 'float64array', () => {

      testSerialization ( new Float64Array () );
      testSerialization ( new Float64Array ([ 1.1, 2.2, 3.3 ]) );

    });

    it ( 'int8array', () => {

      testSerialization ( new Int8Array () );
      testSerialization ( new Int8Array ([ 1, 2, 3, -3, -2, -1 ]) );

    });

    it ( 'int16array', () => {

      testSerialization ( new Int16Array () );
      testSerialization ( new Int16Array ([ 1, 2, 3, -3, -2, -1 ]) );

    });

    it ( 'int32array', () => {

      testSerialization ( new Int32Array () );
      testSerialization ( new Int32Array ([ 1, 2, 3, -3, -2, -1 ]) );

    });

    it ( 'uint8array', () => {

      testSerialization ( new Uint8Array () );
      testSerialization ( new Uint8Array ([ 1, 2, 3 ]) );

      const buffer = new Uint8Array ([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]).buffer;

      testSerialization ( new Uint8Array ( buffer, 0, 3 ) );
      testSerialization ( new Uint8Array ( buffer, 3, 6 ) );

    });

    it ( 'uint8array (metadata)', () => {

      const buffer = new Uint8Array ([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]).buffer;
      const uint8 = new Uint8Array ( buffer, 1, 3 );
      const clone = deserialize ( serialize ( uint8 ) );

      t.deepEqual ( uint8, clone );
      t.is ( uint8.byteOffset, clone.byteOffset );
      t.is ( uint8.byteLength, clone.byteLength );

    });

    it ( 'uint16array', () => {

      testSerialization ( new Uint16Array () );
      testSerialization ( new Uint16Array ([ 1, 2, 3 ]) );

    });

    it ( 'uint32array', () => {

      testSerialization ( new Uint32Array () );
      testSerialization ( new Uint32Array ([ 1, 2, 3 ]) );

    });

    it ( 'uint8clampedarray', () => {

      testSerialization ( new Uint8ClampedArray () );
      testSerialization ( new Uint8ClampedArray ([ 1, 2, 3 ]) );

    });

  });

  describe ( 'supports deduplicating references', it => {

    it ( 'array', () => {

      testReferences ( [] );

    });

    it ( 'array buffer', () => {

      testReferences ( new Int8Array ([ 1, 2, 3 ]).buffer );

    });

    it ( 'dataview', () => {

      testReferences ( new DataView ( new ArrayBuffer ( 3 ) ) );

    });

    it ( 'date', () => {

      testReferences ( new Date () );

    });

    it ( 'function', () => {

      testReferences ( ( a, b ) => a + b );

    });

    it ( 'map', () => {

      testReferences ( new Map () );

    });

    it ( 'plain object', () => {

      testReferences ( {} );

    });

    it ( 'plain object (circular)', () => {

      const cyclic = {};

      cyclic.cyclic = cyclic;

      testReferences ( cyclic );

    });

    it ( 'promise', () => {

      testReferences ( Promise.resolve ( 123 ) );

    });

    it ( 'regexp', () => {

      testReferences ( /a/gmi );

    });

    it ( 'set', () => {

      testReferences ( new Set () );

    });

    it ( 'boxed bigint', () => {

      testReferences ( Object ( 123n ) );

    });

    it ( 'boxed boolean', () => {

      testReferences ( Object ( true ) );
      testReferences ( Object ( false ) );

    });

    it ( 'boxed number', () => {

      testReferences ( Object ( 123 ) );

    });

    it ( 'boxed string', () => {

      testReferences ( Object ( 'foo' ) );

    });

    it ( 'boxed symbol', () => {

      testReferences ( Object ( Symbol () ) );

    });

    it ( 'error', () => {

      testReferences ( new Error () );
      testReferences ( new Error ( 'asd' ) );

    });

    it ( 'aggregate error', () => {

      testReferences ( new AggregateError ( [] ) );
      testReferences ( new AggregateError ( [new Error ( 'one' ), new Error ( 'two' )], 'asd' ) );

    });

    it ( 'eval error', () => {

      testReferences ( new EvalError () );
      testReferences ( new EvalError ( 'asd' ) );

    });

    it ( 'range error', () => {

      testReferences ( new RangeError () );
      testReferences ( new RangeError ( 'asd' ) );

    });

    it ( 'reference error', () => {

      testReferences ( new ReferenceError () );
      testReferences ( new ReferenceError ( 'asd' ) );

    });

    it ( 'syntax error', () => {

      testReferences ( new SyntaxError () );
      testReferences ( new SyntaxError ( 'asd' ) );

    });

    it ( 'type error', () => {

      testReferences ( new TypeError () );
      testReferences ( new TypeError ( 'asd' ) );

    });

    it ( 'uri error', () => {

      testReferences ( new URIError () );
      testReferences ( new URIError ( 'asd' ) );

    });

    it ( 'bigint64array', () => {

      testReferences ( new BigInt64Array () );
      testReferences ( new BigInt64Array ([ 1n, 2n, 3n, -3n, -2n, -1n ]) );

    });

    it ( 'biguint64array', () => {

      testReferences ( new BigUint64Array () );
      testReferences ( new BigUint64Array ([ 1n, 2n, 3n ]) );

    });

    it ( 'float32array', () => {

      testReferences ( new Float32Array () );
      testReferences ( new Float32Array ([ 1.1, 2.2, 3.3 ]) );

    });

    it ( 'float64array', () => {

      testReferences ( new Float64Array () );
      testReferences ( new Float64Array ([ 1.1, 2.2, 3.3 ]) );

    });

    it ( 'int8array', () => {

      testReferences ( new Int8Array () );
      testReferences ( new Int8Array ([ 1, 2, 3, -3, -2, -1 ]) );

    });

    it ( 'int16array', () => {

      testReferences ( new Int16Array () );
      testReferences ( new Int16Array ([ 1, 2, 3, -3, -2, -1 ]) );

    });

    it ( 'int32array', () => {

      testReferences ( new Int32Array () );
      testReferences ( new Int32Array ([ 1, 2, 3, -3, -2, -1 ]) );

    });

    it ( 'uint8array', () => {

      testReferences ( new Uint8Array () );
      testReferences ( new Uint8Array ([ 1, 2, 3 ]) );

      const buffer = new Uint8Array ([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]).buffer;

      testReferences ( new Uint8Array ( buffer, 0, 3 ) );
      testReferences ( new Uint8Array ( buffer, 3, 6 ) );

    });

    it ( 'uint16array', () => {

      testReferences ( new Uint16Array () );
      testReferences ( new Uint16Array ([ 1, 2, 3 ]) );

    });

    it ( 'uint32array', () => {

      testReferences ( new Uint32Array () );
      testReferences ( new Uint32Array ([ 1, 2, 3 ]) );

    });

    it ( 'uint8clampedarray', () => {

      testReferences ( new Uint8ClampedArray () );
      testReferences ( new Uint8ClampedArray ([ 1, 2, 3 ]) );

    });

  });

  describe ( 'throws on unsupported types', it => {

    it ( 'custom class', t => {

      t.throws ( () => testSerialization ( new class {} ) );

    });

    it ( 'generator', t => {

      t.throws ( () => testSerialization ( function* () {} ) );

    });

    it ( 'async generator', t => {

      t.throws ( () => testSerialization ( async function* () {} ) );

    });

  });

});
