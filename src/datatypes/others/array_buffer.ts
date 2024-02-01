
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _ArrayBuffer extends Type<ArrayBuffer> {

  /* VARIABLES */

  readonly Constructor = ArrayBuffer;

  /* API */

  serialize ( value: ArrayBuffer, options: SerializeOptions, context: SerializeContext ): string {

    return new Uint8Array ( value ).toString ();

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): ArrayBuffer {

    const values = value ? value.split ( ',' ).map ( Number ) : [];
    const typedArray = new Uint8Array ( values );
    const buffer = typedArray.buffer;

    return buffer;

  }

}

/* EXPORT */

export default _ArrayBuffer;
