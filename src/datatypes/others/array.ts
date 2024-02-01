
/* IMPORT */

import {arrayMap} from '../../utils';
import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _Array extends Type<Array<unknown>> {

  /* VARIABLES */

  readonly Constructor = Array;

  /* API */

  serialize ( value: Array<unknown>, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.ref ( value, context );

    const values = arrayMap ( value, value => this.siero.serializer.serialize ( value, options, context ) );
    const packed = this.siero.packer.pack ( values );

    return packed;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): Array<unknown> {

    const unpacked = this.siero.packer.unpack ( value );
    const values: unknown[] = new Array ( unpacked.length );

    this.siero.serializer.ref ( values, context );

    for ( let i = 0, l = unpacked.length; i < l; i++ ) {

      values[i] = this.siero.serializer.deserialize ( unpacked[i], options, context );

    }

    return values;

  }

}

/* EXPORT */

export default _Array;
