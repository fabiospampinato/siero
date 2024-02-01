
/* IMPORT */

import Abstract from './abstract';
import type {SieroInstance} from '../../types';

/* MAIN */

class _TypeError extends Abstract<TypeError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, TypeError );

  }

}

/* EXPORT */

export default _TypeError;
