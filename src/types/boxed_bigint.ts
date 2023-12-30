
/* IMPORT */

import Type from './type';

/* MAIN */

class _BoxedBigInt extends Type<object> {

  /* VARIABLES */

  readonly Constructor = BigInt;

  /* API */

  serialize ( value: object ): string {

    return value.valueOf ().toString ();

  }

  deserialize ( value: string ): object {

    return Object ( BigInt ( value ) );

  }

}

/* EXPORT */

export default _BoxedBigInt;
