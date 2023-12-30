
/* IMPORT */

import Type from './type';

/* MAIN */

class _BigInt extends Type<bigint> {

  /* VARIABLES */

  readonly typeof = 'bigint';

  /* API */

  serialize ( value: bigint ): string {

    return value.toString ();

  }

  deserialize ( value: string ): bigint {

    return BigInt ( value );

  }

}

/* EXPORT */

export default _BigInt;
