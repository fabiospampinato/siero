
/* IMPORT */

import Abstract from './abstract';
import type {Constructor, SieroInstance} from '../../types';

/* MAIN */

abstract class AbstractRegular<T extends Error> extends Abstract<T> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Constructor<T> ) {

    super ( siero, Constructor, () => new Constructor () );

  }

}

/* EXPORT */

export default AbstractRegular;
