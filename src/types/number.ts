
/* IMPORT */

import Type from './type';

/* MAIN */

class _Number extends Type<number> {

  /* VARIABLES */

  readonly typeof = 'number';

  /* API */

  serialize ( value: number ): string {

    if ( value === Infinity ) return 'I';

    if ( value === -Infinity ) return '-I';

    if ( Object.is ( value, NaN ) ) return 'N';

    if ( Object.is ( value, -0 ) ) return '-0';

    return value.toString ();

  }

  deserialize ( value: string ): number {

    if ( value === 'I' ) return Infinity;

    if ( value === '-I' ) return -Infinity;

    if ( value === 'N' ) return NaN;

    if ( value === '-0' ) return -0;

    return Number ( value );

  }

}

/* EXPORT */

export default _Number;
