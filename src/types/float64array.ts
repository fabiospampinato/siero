
/* IMPORT */

import AbstractNumberTypedArray from './abstract_number_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _Float64Array extends AbstractNumberTypedArray<Float64Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Float64Array );

  }

}

/* EXPORT */

export default _Float64Array;
