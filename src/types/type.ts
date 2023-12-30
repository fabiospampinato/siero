
/* IMPORT */

import type {SieroInstance} from '../types';

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

  abstract serialize ( value: T ): string;
  abstract deserialize ( value: string ): T;

}

/* EXPORT */

export default Type;
