
/* IMPORT */

import Abstract from './abstract';
import type {SieroInstance} from '../../types';

/* MAIN */

class _EvalError extends Abstract<EvalError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, EvalError );

  }

}

/* EXPORT */

export default _EvalError;
