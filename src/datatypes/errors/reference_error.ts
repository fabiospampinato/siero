
/* IMPORT */

import AbstractRegular from './abstract_regular';
import type {SieroInstance} from '../../types';

/* MAIN */

class _ReferenceError extends AbstractRegular<ReferenceError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, ReferenceError );

  }

}

/* EXPORT */

export default _ReferenceError;
