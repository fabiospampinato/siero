
/* IMPORT */

import AbstractTypedArray from './abstract_typed_array';
import type {Constructor, SieroInstance, NumberTypedArray} from '../types';

/* MAIN */

abstract class AbstractNumberTypedArray<T extends NumberTypedArray> extends AbstractTypedArray<T, number> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Constructor<T, [Iterable<number>]> ) {

    super ( siero, Constructor, Number );

  }

}

/* EXPORT */

export default AbstractNumberTypedArray;
