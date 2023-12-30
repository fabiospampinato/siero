
/* IMPORT */

import Type from './type';

/* MAIN */

class _BoxedBoolean extends Type<object> {

  /* VARIABLES */

  readonly Constructor = Boolean;

  /* API */

  serialize ( value: object ): string {

    return value.valueOf () ? '1' : '0';

  }

  deserialize ( value: string ): object {

    return Object ( value === '1' );

  }

}

/* EXPORT */

export default _BoxedBoolean;
