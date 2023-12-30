
/* IMPORT */

import Type from './type';

/* MAIN */

class _Boolean extends Type<boolean> {

  /* VARIABLES */

  readonly typeof = 'boolean';

  /* API */

  serialize ( value: boolean ): string {

    return value ? '1' : '0';

  }

  deserialize ( value: string ): boolean {

    return value === '1';

  }

}

/* EXPORT */

export default _Boolean;
