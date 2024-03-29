
/* IMPORT */

import Abstract from './abstract';
import type {Constructor, SieroInstance, BigIntTypedArray} from '../../types';

/* MAIN */

abstract class AbstractBigInt<T extends BigIntTypedArray> extends Abstract<T, bigint> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Constructor<T, [ArrayBuffer, number, number]> ) {

    super ( siero, Constructor, BigInt );

  }

}

/* EXPORT */

export default AbstractBigInt;
