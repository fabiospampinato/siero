
/* IMPORT */

import AbstractError from './abstract_error';
import type {SieroInstance} from '../types';

/* MAIN */

class _EvalError extends AbstractError<EvalError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, EvalError );

  }

}

/* EXPORT */

export default _EvalError;
