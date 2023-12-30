
/* IMPORT */

import NumberTypedArray from './abstract_number_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _Uint8ClampedArray extends NumberTypedArray<Uint8ClampedArray> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Uint8ClampedArray );

  }

}

/* EXPORT */

export default _Uint8ClampedArray;
