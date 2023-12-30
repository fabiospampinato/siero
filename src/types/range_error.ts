
/* IMPORT */

import AbstractError from './abstract_error';
import type {SieroInstance} from '../types';

/* MAIN */

class _RangeError extends AbstractError<RangeError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, RangeError );

  }

}

/* EXPORT */

export default _RangeError;
