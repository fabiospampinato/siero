
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _Array extends Type<Array<unknown>> {

  /* VARIABLES */

  readonly Constructor = Array;

  /* API */

  serialize ( value: Array<unknown>, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.serialized ( value, context );

    const values = new Array<string> ( value.length );

    for ( let i = 0, l = value.length; i < l; i++ ) {

      if ( i in value ) { // Value

        values[i] = this.siero.serializer.serialize ( value[i], options, context );

      } else { // Hole

        values[i] = '';

      }

    }

    const packed = this.siero.packer.pack ( values );

    return packed;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): Array<unknown> {

    const unpacked = this.siero.packer.unpack ( value );
    const values = new Array<unknown> ( unpacked.length );

    this.siero.serializer.deserialized ( values, context );

    for ( let i = 0, l = unpacked.length; i < l; i++ ) {

      if ( unpacked[i] ) { // Value

        values[i] = this.siero.serializer.deserialize ( unpacked[i], options, context );

      }

    }

    return values;

  }

}

/* EXPORT */

export default _Array;
