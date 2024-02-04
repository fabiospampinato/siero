
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _DataView extends Type<DataView> {

  /* VARIABLES */

  readonly Constructor = DataView;

  /* API */

  serialize ( value: DataView, options: SerializeOptions, context: SerializeContext ): string {

    const buffer = this.siero.serializer.serialize ( value.buffer, options, context );
    const offset = `${value.byteOffset}`;
    const length = `${value.byteLength}`;
    const packed = this.siero.packer.pack ([ buffer, offset, length ]);

    this.siero.serializer.serialized ( value, context );

    return packed;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): DataView {

    const unpacked = this.siero.packer.unpack ( value );
    const buffer = this.siero.serializer.deserialize ( unpacked[0], options, context ) as ArrayBuffer; //TSC
    const offset = parseInt ( unpacked[1] );
    const length = parseInt ( unpacked[2] );
    const dataView = new DataView ( buffer, offset, length );

    this.siero.serializer.deserialized ( dataView, context );

    return dataView;

  }

}

/* EXPORT */

export default _DataView;
