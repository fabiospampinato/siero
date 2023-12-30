
/* IMPORT */

import AbstractNumberTypedArray from './abstract_number_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _Uint16Array extends AbstractNumberTypedArray<Uint16Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Uint16Array );

  }

}

/* EXPORT */

export default _Uint16Array;
