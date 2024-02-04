
/* IMPORT */

import AbstractRegular from './abstract_regular';
import type {SieroInstance} from '../../types';

/* MAIN */

class _TypeError extends AbstractRegular<TypeError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, TypeError );

  }

}

/* EXPORT */

export default _TypeError;
