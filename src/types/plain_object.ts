
/* IMPORT */

import {castArray} from '../utils';
import Type from './type';

/* HELPERS */

const isProtoless = ( value: object ) => Object.getPrototypeOf ( value ) === null;
const {isExtensible, isFrozen, isSealed} = Object;

const FLAG_PROTOLESS = ( 1 << 0 );
const FLAG_EXTENSIBLE = ( 1 << 1 );
const FLAG_FROZEN = ( 1 << 2 );
const FLAG_SEALED = ( 1 << 3 );

/* MAIN */

class _PlainObject extends Type<Record<string, unknown>> {

  /* VARIABLES */

  readonly Constructor = Object;
  readonly typeof = 'object';

  /* API */

  serialize ( value: Record<number | string | symbol, unknown> ): string {

    const flagProtoless = isProtoless ( value ) ? FLAG_PROTOLESS : 0;
    const flagExtensible = isExtensible ( value ) ? FLAG_EXTENSIBLE : 0;
    const flagFrozen = isFrozen ( value ) ? FLAG_FROZEN : 0;
    const flagSealed = isSealed ( value ) ? FLAG_SEALED : 0;
    const flags = `${flagProtoless | flagExtensible | flagFrozen | flagSealed}`;

    const stringKeys = this.siero.serialize ( Object.keys ( value ) );
    const stringValues = this.siero.serialize ( Object.values ( value ) );

    const symbols = Object.getOwnPropertySymbols ( value );
    const symbolKeys = this.siero.serialize ( symbols );
    const symbolValues = this.siero.serialize ( symbols.map ( symbol => value[symbol] ) );

    const packed = this.siero.pack ([ flags, stringKeys, stringValues, symbolKeys, symbolValues ]);

    return packed;

  }

  deserialize ( value: string ): Record<number | string | symbol, unknown> {

    const unpacked = this.siero.unpack ( value );

    const flags = parseInt ( unpacked[0] );
    const flagProtoless = flags & FLAG_PROTOLESS;
    const flagExtensible = flags & FLAG_EXTENSIBLE;
    const flagFrozen = flags & FLAG_FROZEN;
    const flagSealed = flags & FLAG_SEALED;

    const stringKeys = castArray ( this.siero.deserialize ( unpacked[1] ) );
    const stringValues = castArray ( this.siero.deserialize ( unpacked[2] ) );

    const symbolKeys = castArray ( this.siero.deserialize ( unpacked[3] ) );
    const symbolValues = castArray ( this.siero.deserialize ( unpacked[4] ) );

    const object: Record<number | string | symbol, unknown> = flagProtoless ? Object.create ( null ) : {};

    for ( let i = 0, l = stringKeys.length; i < l; i++ ) {

      object[stringKeys[i] as string] = stringValues[i];

    }

    for ( let i = 0, l = symbolKeys.length; i < l; i++ ) {

      object[symbolKeys[i] as symbol] = symbolValues[i];

    }

    if ( !flagExtensible ) Object.preventExtensions ( object );
    if ( flagFrozen ) Object.freeze ( object );
    if ( flagSealed ) Object.seal ( object );

    return object;

  }

}

/* EXPORT */

export default _PlainObject;
