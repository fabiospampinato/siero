
/* IMPORT */

import {castArray} from '../../utils';
import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _Set extends Type<Set<unknown>> {

  /* VARIABLES */

  readonly Constructor = Set;

  /* API */

  serialize ( value: Set<unknown>, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.serialized ( value, context );

    const values = Array.from ( value.values () );
    const packed = this.siero.serializer.serialize ( values, options, context );

    return packed;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): Set<unknown> {

    const set = new Set ();

    this.siero.serializer.deserialized ( set, context );

    const values = castArray ( this.siero.serializer.deserialize ( value, options, context ) );

    for ( let i = 0, l = values.length; i < l; i++ ) {

      set.add ( values[i] );

    }

    return set;

  }

}

/* EXPORT */

export default _Set;
