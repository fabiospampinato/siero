
/* IMPORT */

import Abstract from './abstract';
import type {SieroInstance} from '../../types';

/* MAIN */

class _SyntaxError extends Abstract<SyntaxError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, SyntaxError );

  }

}

/* EXPORT */

export default _SyntaxError;
