
/* IMPORT */

import Type from './type';

/* MAIN */

class _BoxedString extends Type<object> {

  /* VARIABLES */

  readonly Constructor = String;

  /* API */

  serialize ( value: object ): string {

    return value.valueOf ().toString ();

  }

  deserialize ( value: string ): object {

    return Object ( value );

  }

}

/* EXPORT */

export default _BoxedString;
