
/* IMPORT */

import Packer from '../packer';
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

  serialize ( value: Record<string, unknown> ): string {

    const flagProtoless = isProtoless ( value ) ? FLAG_PROTOLESS : 0;
    const flagExtensible = isExtensible ( value ) ? FLAG_EXTENSIBLE : 0;
    const flagFrozen = isFrozen ( value ) ? FLAG_FROZEN : 0;
    const flagSealed = isSealed ( value ) ? FLAG_SEALED : 0;
    const flags = `${flagProtoless | flagExtensible | flagFrozen | flagSealed}`;

    const keys = this.siero.serialize ( Object.keys ( value ) );
    const values = this.siero.serialize ( Object.values ( value ) );

    const packed = Packer.pack ([ flags, keys, values ]);

    return packed;

  }

  deserialize ( value: string ): Record<string, unknown> {

    const unpacked = Packer.unpack ( value );

    const flags = parseInt ( unpacked[0] );
    const flagProtoless = flags & FLAG_PROTOLESS;
    const flagExtensible = flags & FLAG_EXTENSIBLE;
    const flagFrozen = flags & FLAG_FROZEN;
    const flagSealed = flags & FLAG_SEALED;

    const keys = castArray ( this.siero.deserialize ( unpacked[1] ) );
    const values = castArray ( this.siero.deserialize ( unpacked[2] ) );

    const object: Record<string, unknown> = flagProtoless ? Object.create ( null ) : {};

    for ( let i = 0, l = keys.length; i < l; i++ ) {

      object[`${keys[i]}`] = values[i];

    }

    if ( !flagExtensible ) Object.preventExtensions ( object );
    if ( flagFrozen ) Object.freeze ( object );
    if ( flagSealed ) Object.seal ( object );

    return object;

  }

}

/* EXPORT */

export default _PlainObject;
