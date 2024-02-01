
/* IMPORT */

import AbstractBigInt from './abstract_bigint';
import type {SieroInstance} from '../../types';

/* MAIN */

class _BigInt64Array extends AbstractBigInt<BigInt64Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, BigInt64Array );

  }

}

/* EXPORT */

export default _BigInt64Array;
