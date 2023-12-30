
/* IMPORT */

import Packer from '../packer';
import {map} from '../utils';
import Type from './type';

/* MAIN */

class _Array extends Type<Array<unknown>> {

  /* VARIABLES */

  readonly Constructor = Array;

  /* API */

  serialize ( value: Array<unknown> ): string {

    const values = map ( value, this.siero.serialize );
    const packed = Packer.pack ( values );

    return packed;

  }

  deserialize ( value: string ): Array<unknown> {

    const unpacked = Packer.unpack ( value );
    const values = unpacked.map ( this.siero.deserialize );

    return values;

  }

}

/* EXPORT */

export default _Array;
