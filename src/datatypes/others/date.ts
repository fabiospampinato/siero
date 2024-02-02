
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _Date extends Type<Date> {

  /* VARIABLES */

  readonly Constructor = Date;

  /* API */

  serialize ( value: Date, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.serialized ( value, context );

    return value.getTime ().toString ();

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): Date {

    const date = new Date ( parseInt ( value ) );

    this.siero.serializer.deserialized ( date, context );

    return date;

  }

}

/* EXPORT */

export default _Date;
