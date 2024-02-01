
/* IMPORT */

import Type from './type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Boolean extends Type<boolean> {

  /* VARIABLES */

  readonly typeof = 'boolean';

  /* API */

  serialize ( value: boolean, options: SerializeOptions, context: SerializeContext ): string {

    return value ? '1' : '0';

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): boolean {

    return value === '1';

  }

}

/* EXPORT */

export default _Boolean;
