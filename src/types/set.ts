
/* IMPORT */

import {castArray} from '../utils';
import Type from './type';

/* MAIN */

class _Set extends Type<Set<unknown>> {

  /* VARIABLES */

  readonly Constructor = Set;

  /* API */

  serialize ( value: Set<unknown> ): string {

    const values = Array.from ( value.values () );
    const packed = this.siero.serialize ( values );

    return packed;

  }

  deserialize ( value: string ): Set<unknown> {

    const values = castArray ( this.siero.deserialize ( value ) );
    const set = new Set ( values );

    return set;

  }

}

/* EXPORT */

export default _Set;
