
/* IMPORT */

import Abstract from './abstract';
import type {SieroInstance} from '../../types';

/* MAIN */

class _BigInt extends Abstract {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, BigInt );

  }

}

/* EXPORT */

export default _BigInt;
