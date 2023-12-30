
/* IMPORT */

import AbstractNumberTypedArray from './abstract_number_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _Int32Array extends AbstractNumberTypedArray<Int32Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Int32Array );

  }

}

/* EXPORT */

export default _Int32Array;
