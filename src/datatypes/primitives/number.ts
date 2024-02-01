
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _Number extends Type<number> {

  /* VARIABLES */

  readonly typeof = 'number';

  /* API */

  serialize ( value: number, options: SerializeOptions, context: SerializeContext ): string {

    if ( value === Infinity ) return 'I';

    if ( value === -Infinity ) return '-I';

    if ( Object.is ( value, NaN ) ) return 'N';

    if ( Object.is ( value, -0 ) ) return '-0';

    return value.toString ();

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): number {

    if ( value === 'I' ) return Infinity;

    if ( value === '-I' ) return -Infinity;

    if ( value === 'N' ) return NaN;

    if ( value === '-0' ) return -0;

    return Number ( value );

  }

}

/* EXPORT */

export default _Number;
