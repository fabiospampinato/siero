
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

//TODO: Maybe serialize the buffer to Base64, for smaller outputs (https://github.com/tc39/proposal-arraybuffer-base64)

class _ArrayBuffer extends Type<ArrayBuffer> {

  /* VARIABLES */

  readonly Constructor = ArrayBuffer;

  /* API */

  serialize ( value: ArrayBuffer, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.serialized ( value, context );

    return new Uint8Array ( value ).toString ();

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): ArrayBuffer {

    const values = value ? value.split ( ',' ).map ( Number ) : [];
    const typedArray = new Uint8Array ( values );
    const buffer = typedArray.buffer;

    this.siero.serializer.deserialized ( buffer, context );

    return buffer;

  }

}

/* EXPORT */

export default _ArrayBuffer;
