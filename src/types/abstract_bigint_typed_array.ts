
/* IMPORT */

import AbstractTypedArray from './abstract_typed_array';
import type {Constructor, SieroInstance, BigIntTypedArray} from '../types';

/* MAIN */

abstract class AbstractBigIntTypedArray<T extends BigIntTypedArray> extends AbstractTypedArray<T, bigint> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Constructor<T, [Iterable<bigint>]> ) {

    super ( siero, Constructor, BigInt );

  }

}

/* EXPORT */

export default AbstractBigIntTypedArray;
