
/* IMPORT */

import AbstractRegular from './abstract_regular';
import type {SieroInstance} from '../../types';

/* MAIN */

class _SyntaxError extends AbstractRegular<SyntaxError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, SyntaxError );

  }

}

/* EXPORT */

export default _SyntaxError;
