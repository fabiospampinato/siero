
/* IMPORT */

import AbstractNumberTypedArray from './abstract_number_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _Int16Array extends AbstractNumberTypedArray<Int16Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Int16Array );

  }

}

/* EXPORT */

export default _Int16Array;
