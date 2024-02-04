
/* IMPORT */

import AbstractRegular from './abstract_regular';
import type {SieroInstance} from '../../types';

/* MAIN */

class _EvalError extends AbstractRegular<EvalError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, EvalError );

  }

}

/* EXPORT */

export default _EvalError;
