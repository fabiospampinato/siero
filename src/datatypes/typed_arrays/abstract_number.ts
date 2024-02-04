
/* IMPORT */

import Abstract from './abstract';
import type {Constructor, SieroInstance, NumberTypedArray} from '../../types';

/* MAIN */

abstract class AbstractNumber<T extends NumberTypedArray> extends Abstract<T, number> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Constructor<T, [ArrayBuffer, number, number]> ) {

    super ( siero, Constructor, Number );

  }

}

/* EXPORT */

export default AbstractNumber;
