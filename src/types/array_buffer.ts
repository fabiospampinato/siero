
/* IMPORT */

import Type from './type';

/* MAIN */

class _ArrayBuffer extends Type<ArrayBuffer> {

  /* VARIABLES */

  readonly Constructor = ArrayBuffer;

  /* API */

  serialize ( value: ArrayBuffer ): string {

    return new Uint8Array ( value ).toString ();

  }

  deserialize ( value: string ): ArrayBuffer {

    const values = value ? value.split ( ',' ).map ( Number ) : [];
    const typedArray = new Uint8Array ( values );
    const buffer = typedArray.buffer;

    return buffer;

  }

}

/* EXPORT */

export default _ArrayBuffer;
