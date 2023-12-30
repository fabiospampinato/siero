
/* IMPORT */

import Type from './type';

/* MAIN */

class _Null extends Type<null> {

  /* VARIABLES */

  readonly value = null;

  /* API */

  serialize ( value: null ): string {

    return '';

  }

  deserialize ( value: string ): null {

    return null;

  }

}

/* EXPORT */

export default _Null;
