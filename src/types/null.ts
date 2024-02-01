
/* IMPORT */

import Type from './type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Null extends Type<null> {

  /* VARIABLES */

  readonly value = null;

  /* API */

  serialize ( value: null, options?: SerializeOptions, context?: SerializeContext ): string {

    return '';

  }

  deserialize ( value: string, options?: DeserializeOptions, context?: DeserializeContext ): null {

    return null;

  }

}

/* EXPORT */

export default _Null;
