
/* IMPORT */

import Type from './type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _BigInt extends Type<bigint> {

  /* VARIABLES */

  readonly typeof = 'bigint';

  /* API */

  serialize ( value: bigint, options: SerializeOptions, context: SerializeContext ): string {

    return value.toString ();

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): bigint {

    return BigInt ( value );

  }

}

/* EXPORT */

export default _BigInt;
