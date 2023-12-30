
/* IMPORT */

import Type from './type';

/* MAIN */

class _String extends Type<string> {

  /* VARIABLES */

  readonly typeof = 'string';

  /* API */

  serialize ( value: string ): string {

    return value;

  }

  deserialize ( value: string ): string {

    return value;

  }

}

/* EXPORT */

export default _String;
