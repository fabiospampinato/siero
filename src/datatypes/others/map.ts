
/* IMPORT */

import {castArray} from '../../utils';
import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _Map extends Type<Map<unknown, unknown>> {

  /* VARIABLES */

  readonly Constructor = Map;

  /* API */

  serialize ( value: Map<unknown, unknown>, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.serialized ( value, context );

    const keys = this.siero.serializer.serialize ( Array.from ( value.keys () ), options, context );
    const values = this.siero.serializer.serialize ( Array.from ( value.values () ), options, context );
    const packed = this.siero.packer.pack ([ keys, values ]);

    return packed;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): Map<unknown, unknown> {

    const map = new Map ();

    this.siero.serializer.deserialized ( map, context );

    const unpacked = this.siero.packer.unpack ( value );
    const keys = castArray ( this.siero.serializer.deserialize ( unpacked[0], options, context ) );
    const values = castArray ( this.siero.serializer.deserialize ( unpacked[1], options, context ) );

    for ( let i = 0, l = keys.length; i < l; i++ ) {

      map.set ( keys[i], values[i] );

    }

    return map;

  }

}

/* EXPORT */

export default _Map;
