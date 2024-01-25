
/* IMPORT */

import {map} from '../utils';
import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Array extends Type<Array<unknown>> {

  /* VARIABLES */

  readonly Constructor = Array;

  /* API */

  serialize ( value: Array<unknown>, options?: SerializeOptions ): string {

    const values = arrayMap ( value, value => this.siero.serialize ( value, options ) );
    const packed = this.siero.pack ( values );

    return packed;

  }

  deserialize ( value: string, options?: DeserializeOptions ): Array<unknown> {

    const unpacked = this.siero.unpack ( value );
    const values = unpacked.map ( value => this.siero.deserialize ( value, options ) );

    return values;

  }

}

/* EXPORT */

export default _Array;
