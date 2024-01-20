
/* IMPORT */

import {castArray} from '../utils';
import Type from './type';

/* MAIN */

class _Map extends Type<Map<unknown, unknown>> {

  /* VARIABLES */

  readonly Constructor = Map;

  /* API */

  serialize ( value: Map<unknown, unknown> ): string {

    const keys = this.siero.serialize ( Array.from ( value.keys () ) );
    const values = this.siero.serialize ( Array.from ( value.values () ) );
    const packed = this.siero.pack ([ keys, values ]);

    return packed;

  }

  deserialize ( value: string ): Map<unknown, unknown> {

    const unpacked = this.siero.unpack ( value );
    const keys = castArray ( this.siero.deserialize ( unpacked[0] ) );
    const values = castArray ( this.siero.deserialize ( unpacked[1] ) );
    const map = new Map ();

    for ( let i = 0, l = keys.length; i < l; i++ ) {

      map.set ( keys[i], values[i] );

    }

    return map;

  }

}

/* EXPORT */

export default _Map;
