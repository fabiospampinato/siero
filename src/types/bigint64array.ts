
/* IMPORT */

import AbstractBigIntTypedArray from './abstract_bigint_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _BigInt64Array extends AbstractBigIntTypedArray<BigInt64Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, BigInt64Array );

  }

}

/* EXPORT */

export default _BigInt64Array;
