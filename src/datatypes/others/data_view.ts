
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _DataView extends Type<DataView> {

  /* VARIABLES */

  readonly Constructor = DataView;

  /* API */

  serialize ( value: DataView, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.serialized ( value, context );

    return this.siero.serializer.serialize ( value.buffer, options, context );

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): DataView {

    const buffer = this.siero.serializer.deserialize ( value, options, context );
    const dataView = new DataView ( buffer );

    this.siero.serializer.deserialized ( dataView, context );

    return dataView;

  }

}

/* EXPORT */

export default _DataView;
