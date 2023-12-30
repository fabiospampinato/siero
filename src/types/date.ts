
/* IMPORT */

import Type from './type';

/* MAIN */

class _Date extends Type<Date> {

  /* VARIABLES */

  readonly Constructor = Date;

  /* API */

  serialize ( value: Date ): string {

    return value.getTime ().toString ();

  }

  deserialize ( value: string ): Date {

    return new Date ( parseInt ( value ) );

  }

}

/* EXPORT */

export default _Date;
