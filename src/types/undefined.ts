
/* IMPORT */

import Type from './type';

/* MAIN */

class _Undefined extends Type<undefined> {

  /* VARIABLES */

  readonly typeof = 'undefined';

  /* API */

  serialize ( value: undefined ): string {

    return '';

  }

  deserialize ( value: string ): undefined {

    return undefined;

  }

}

/* EXPORT */

export default _Undefined;
