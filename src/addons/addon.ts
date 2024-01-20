
/* IMPORT */

import type {SieroInstance} from '../types';

/* MAIN */

abstract class Addon {

  /* VARIABLES */

  readonly siero: SieroInstance;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    this.siero = siero;

  }

}

/* EXPORT */

export default Addon;
