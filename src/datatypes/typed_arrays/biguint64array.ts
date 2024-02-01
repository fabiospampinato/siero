
/* IMPORT */

import AbstractBigInt from './abstract_bigint';
import type {SieroInstance} from '../../types';

/* MAIN */

class _BigUint64Array extends AbstractBigInt<BigUint64Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, BigUint64Array );

  }

}

/* EXPORT */

export default _BigUint64Array;
