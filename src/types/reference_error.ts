
/* IMPORT */

import AbstractError from './abstract_error';
import type {SieroInstance} from '../types';

/* MAIN */

class _ReferenceError extends AbstractError<ReferenceError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, ReferenceError );

  }

}

/* EXPORT */

export default _ReferenceError;
