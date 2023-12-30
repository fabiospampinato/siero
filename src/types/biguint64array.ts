
/* IMPORT */

import AbstractBigIntTypedArray from './abstract_bigint_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _BigUint64Array extends AbstractBigIntTypedArray<BigUint64Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, BigUint64Array );

  }

}

/* EXPORT */

export default _BigUint64Array;
