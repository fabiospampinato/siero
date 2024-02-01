
/* IMPORT */

import Type from './type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Undefined extends Type<undefined> {

  /* VARIABLES */

  readonly typeof = 'undefined';

  /* API */

  serialize ( value: undefined, options?: SerializeOptions, context?: SerializeContext ): string {

    return '';

  }

  deserialize ( value: string, options?: DeserializeOptions, context?: DeserializeContext ): undefined {

    return undefined;

  }

}

/* EXPORT */

export default _Undefined;
