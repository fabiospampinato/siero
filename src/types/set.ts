
/* IMPORT */

import {castArray} from '../utils';
import Type from './type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Set extends Type<Set<unknown>> {

  /* VARIABLES */

  readonly Constructor = Set;

  /* API */

  serialize ( value: Set<unknown>, options?: SerializeOptions, context?: SerializeContext ): string {

    const values = Array.from ( value.values () );
    const packed = this.siero.serializer.serialize ( values, options, context );

    return packed;

  }

  deserialize ( value: string, options?: DeserializeOptions, context?: DeserializeContext ): Set<unknown> {

    const values = castArray ( this.siero.serializer.deserialize ( value, options, context ) );
    const set = new Set ( values );

    return set;

  }

}

/* EXPORT */

export default _Set;
