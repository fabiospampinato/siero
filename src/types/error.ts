
/* IMPORT */

import AbstractError from './abstract_error';
import type {SieroInstance} from '../types';

/* MAIN */

class _Error extends AbstractError<Error> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Error );

  }

}

/* EXPORT */

export default _Error;
