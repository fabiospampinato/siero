
/* IMPORT */

import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Null extends Type<null> {

  /* VARIABLES */

  readonly value = null;

  /* API */

  serialize ( value: null, options?: SerializeOptions ): string {

    return '';

  }

  deserialize ( value: string, options?: DeserializeOptions ): null {

    return null;

  }

}

/* EXPORT */

export default _Null;
