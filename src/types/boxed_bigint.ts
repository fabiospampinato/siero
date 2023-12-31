
/* IMPORT */

import AbstractBoxed from './abstract_boxed';
import type {SieroInstance} from '../types';

/* MAIN */

class _BoxedBigInt extends AbstractBoxed {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, BigInt );

  }

}

/* EXPORT */

export default _BoxedBigInt;
