
/* IMPORT */

import Abstract from './abstract';
import type {SieroInstance} from '../../types';

/* MAIN */

class _ReferenceError extends Abstract<ReferenceError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, ReferenceError );

  }

}

/* EXPORT */

export default _ReferenceError;
