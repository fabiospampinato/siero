
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* HELPERS */

class Serialized {
  value: string;
  constructor ( value: string ) {
    this.value = value;
  }
}

/* MAIN */

class _Serialized extends Type<unknown> {

  /* VARIABLES */

  readonly Constructor = Serialized;

  /* API */

  wrap ( value: string ): Serialized {

    return new Serialized ( value );

  }

  serialize ( value: Serialized, options: SerializeOptions, context: SerializeContext ): string {

    return value.value;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): unknown {

    return this.siero.serializer.deserialize ( value, options, context );

  }

}

/* EXPORT */

export default _Serialized;
