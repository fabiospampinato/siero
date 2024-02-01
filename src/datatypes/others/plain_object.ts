
/* IMPORT */

import {castArray} from '../../utils';
import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

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

  serialize ( value: Record<number | string | symbol, unknown>, options: SerializeOptions, context: SerializeContext ): string {

    // this.siero.serializer.ref ( value, context );

    const flagProtoless = isProtoless ( value ) ? FLAG_PROTOLESS : 0;
    const flagExtensible = isExtensible ( value ) ? FLAG_EXTENSIBLE : 0;
    const flagFrozen = isFrozen ( value ) ? FLAG_FROZEN : 0;
    const flagSealed = isSealed ( value ) ? FLAG_SEALED : 0;
    const flags = `${flagProtoless | flagExtensible | flagFrozen | flagSealed}`;

    const stringKeys = this.siero.packer.pack ( Object.keys ( value ) );
    const stringValues = this.siero.serializer.serialize ( Object.values ( value ), options, context );

    const symbols = Object.getOwnPropertySymbols ( value );
    const symbolKeys = this.siero.serializer.serialize ( symbols, options, context );
    const symbolValues = this.siero.serializer.serialize ( symbols.map ( symbol => value[symbol] ), options, context );

    const packed = this.siero.packer.pack ([ flags, stringKeys, stringValues, symbolKeys, symbolValues ]);

    return packed;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): Record<number | string | symbol, unknown> {

    const unpacked = this.siero.packer.unpack ( value );

    const flags = parseInt ( unpacked[0] );
    const flagProtoless = flags & FLAG_PROTOLESS;
    const flagExtensible = flags & FLAG_EXTENSIBLE;
    const flagFrozen = flags & FLAG_FROZEN;
    const flagSealed = flags & FLAG_SEALED;

    const object: Record<number | string | symbol, unknown> = flagProtoless ? Object.create ( null ) : {};

    // this.siero.serializer.ref ( object, context );

    const stringKeys = this.siero.packer.unpack ( unpacked[1] );
    const stringValues = castArray ( this.siero.serializer.deserialize ( unpacked[2], options, context ) );

    const symbolKeys = castArray ( this.siero.serializer.deserialize ( unpacked[3], options, context ) );
    const symbolValues = castArray ( this.siero.serializer.deserialize ( unpacked[4], options, context ) );

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
