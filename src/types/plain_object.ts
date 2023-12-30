
/* IMPORT */

import Packer from '../packer';
import {castArray} from '../utils';
import Type from './type';

/* MAIN */

class _PlainObject extends Type<Record<string, unknown>> {

  /* VARIABLES */

  readonly Constructor = Object;
  readonly typeof = 'object';

  /* API */

  serialize ( value: Record<string, unknown> ): string {

    const keys = this.siero.serialize ( Object.keys ( value ) );
    const values = this.siero.serialize ( Object.values ( value ) );
    const packed = Packer.pack ([ keys, values ]);

    return packed;

  }

  deserialize ( value: string ): Record<string, unknown> {

    const unpacked = Packer.unpack ( value );
    const keys = castArray ( this.siero.deserialize ( unpacked[0] ) );
    const values = castArray ( this.siero.deserialize ( unpacked[1] ) );
    const object: Record<string, unknown> = {};

    for ( let i = 0, l = keys.length; i < l; i++ ) {

      object[`${keys[i]}`] = values[i];

    }

    return object;

  }

}

/* EXPORT */

export default _PlainObject;
