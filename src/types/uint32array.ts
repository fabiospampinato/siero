
/* IMPORT */

import AbstractNumberTypedArray from './abstract_number_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _Uint32Array extends AbstractNumberTypedArray<Uint32Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Uint32Array );

  }

}

/* EXPORT */

export default _Uint32Array;
