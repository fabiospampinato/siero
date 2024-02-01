
/* IMPORT */

import type {SieroInstance} from '../types';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

abstract class Type<T> {

  /* VARIABLES */

  readonly siero: SieroInstance;
  readonly value?: unknown; // Priority 1
  readonly Constructor?: Function; // Priority 2
  readonly typeof?: 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined'; // Priority 3

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    this.siero = siero;

  }

  /* API */

  abstract serialize ( value: T, options?: SerializeOptions, context?: DeserializeContext ): string;
  abstract deserialize ( value: string, options?: DeserializeOptions, context?: DeserializeContext ): T;

}

/* EXPORT */

export default Type;
