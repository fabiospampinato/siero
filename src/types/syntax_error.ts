
/* IMPORT */

import AbstractError from './abstract_error';
import type {SieroInstance} from '../types';

/* MAIN */

class _SyntaxError extends AbstractError<SyntaxError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, SyntaxError );

  }

}

/* EXPORT */

export default _SyntaxError;
