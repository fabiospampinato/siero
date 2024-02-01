
/* IMPORT */

import Type from './type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _String extends Type<string> {

  /* VARIABLES */

  readonly typeof = 'string';

  /* API */

  serialize ( value: string, options: SerializeOptions, context: SerializeContext ): string {

    return value;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): string {

    return value;

  }

}

/* EXPORT */

export default _String;
