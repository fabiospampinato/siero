
/* IMPORT */

import {arrayMap} from '../utils';
import Type from './type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Array extends Type<Array<unknown>> {

  /* VARIABLES */

  readonly Constructor = Array;

  /* API */

  serialize ( value: Array<unknown>, options?: SerializeOptions, context?: SerializeContext ): string {

    const values = arrayMap ( value, value => this.siero.serializer.serialize ( value, options, context ) );
    const packed = this.siero.packer.pack ( values );

    return packed;

  }

  deserialize ( value: string, options?: DeserializeOptions, context?: DeserializeContext ): Array<unknown> {

    const unpacked = this.siero.packer.unpack ( value );
    const values = unpacked.map ( value => this.siero.serializer.deserialize ( value, options, context ) );

    return values;

  }

}

/* EXPORT */

export default _Array;
