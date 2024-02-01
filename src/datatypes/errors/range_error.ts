
/* IMPORT */

import Abstract from './abstract';
import type {SieroInstance} from '../../types';

/* MAIN */

class _RangeError extends Abstract<RangeError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, RangeError );

  }

}

/* EXPORT */

export default _RangeError;
