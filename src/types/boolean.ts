
/* IMPORT */

import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Boolean extends Type<boolean> {

  /* VARIABLES */

  readonly typeof = 'boolean';

  /* API */

  serialize ( value: boolean, options?: SerializeOptions ): string {

    return value ? '1' : '0';

  }

  deserialize ( value: string, options?: DeserializeOptions ): boolean {

    return value === '1';

  }

}

/* EXPORT */

export default _Boolean;
