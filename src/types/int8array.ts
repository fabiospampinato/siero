
/* IMPORT */

import AbstractNumberTypedArray from './abstract_number_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _Int8Array extends AbstractNumberTypedArray<Int8Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Int8Array );

  }

}

/* EXPORT */

export default _Int8Array;
