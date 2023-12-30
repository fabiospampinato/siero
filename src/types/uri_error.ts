
/* IMPORT */

import AbstractError from './abstract_error';
import type {SieroInstance} from '../types';

/* MAIN */

class _URIError extends AbstractError<URIError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, URIError );

  }

}

/* EXPORT */

export default _URIError;
