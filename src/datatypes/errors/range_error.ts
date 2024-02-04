
/* IMPORT */

import AbstractRegular from './abstract_regular';
import type {SieroInstance} from '../../types';

/* MAIN */

class _RangeError extends AbstractRegular<RangeError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, RangeError );

  }

}

/* EXPORT */

export default _RangeError;
