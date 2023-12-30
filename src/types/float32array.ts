
/* IMPORT */

import AbstractNumberTypedArray from './abstract_number_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _Float32Array extends AbstractNumberTypedArray<Float32Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Float32Array );

  }

}

/* EXPORT */

export default _Float32Array;
