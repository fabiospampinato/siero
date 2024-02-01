
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _Date extends Type<Date> {

  /* VARIABLES */

  readonly Constructor = Date;

  /* API */

  serialize ( value: Date, options: SerializeOptions, context: SerializeContext ): string {

    return value.getTime ().toString ();

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): Date {

    return new Date ( parseInt ( value ) );

  }

}

/* EXPORT */

export default _Date;
