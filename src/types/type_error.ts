
/* IMPORT */

import AbstractError from './abstract_error';
import type {SieroInstance} from '../types';

/* MAIN */

class _TypeError extends AbstractError<TypeError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, TypeError );

  }

}

/* EXPORT */

export default _TypeError;
