
/* IMPORT */

import {castArray} from '../utils';
import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Set extends Type<Set<unknown>> {

  /* VARIABLES */

  readonly Constructor = Set;

  /* API */

  serialize ( value: Set<unknown>, options?: SerializeOptions ): string {

    const values = Array.from ( value.values () );
    const packed = this.siero.serialize ( values, options );

    return packed;

  }

  deserialize ( value: string, options?: DeserializeOptions ): Set<unknown> {

    const values = castArray ( this.siero.deserialize ( value ) );
    const set = new Set ( values );

    return set;

  }

}

/* EXPORT */

export default _Set;
