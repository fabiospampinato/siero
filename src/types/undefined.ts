
/* IMPORT */

import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Undefined extends Type<undefined> {

  /* VARIABLES */

  readonly typeof = 'undefined';

  /* API */

  serialize ( value: undefined, options?: SerializeOptions ): string {

    return '';

  }

  deserialize ( value: string, options?: DeserializeOptions ): undefined {

    return undefined;

  }

}

/* EXPORT */

export default _Undefined;
