
/* IMPORT */

import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _String extends Type<string> {

  /* VARIABLES */

  readonly typeof = 'string';

  /* API */

  serialize ( value: string, options?: SerializeOptions ): string {

    return value;

  }

  deserialize ( value: string, options?: DeserializeOptions ): string {

    return value;

  }

}

/* EXPORT */

export default _String;
