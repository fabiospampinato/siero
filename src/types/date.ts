
/* IMPORT */

import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Date extends Type<Date> {

  /* VARIABLES */

  readonly Constructor = Date;

  /* API */

  serialize ( value: Date, options?: SerializeOptions ): string {

    return value.getTime ().toString ();

  }

  deserialize ( value: string, options?: DeserializeOptions ): Date {

    return new Date ( parseInt ( value ) );

  }

}

/* EXPORT */

export default _Date;
