
/* IMPORT */

import Type from './type';

/* MAIN */

class _BoxedNumber extends Type<object> {

  /* VARIABLES */

  readonly Constructor = Number;

  /* API */

  serialize ( value: object ): string {

    return this.siero.serialize ( value.valueOf () );

  }

  deserialize ( value: string ): object {

    return Object ( this.siero.deserialize ( value ) );

  }

}

/* EXPORT */

export default _BoxedNumber;
