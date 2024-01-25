
/* IMPORT */

import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _BigInt extends Type<bigint> {

  /* VARIABLES */

  readonly typeof = 'bigint';

  /* API */

  serialize ( value: bigint, options?: SerializeOptions ): string {

    return value.toString ();

  }

  deserialize ( value: string, options?: DeserializeOptions ): bigint {

    return BigInt ( value );

  }

}

/* EXPORT */

export default _BigInt;
