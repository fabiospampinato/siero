
/* IMPORT */

import AbstractNumberTypedArray from './abstract_number_typed_array';
import type {SieroInstance} from '../types';

/* MAIN */

class _Uint8Array extends AbstractNumberTypedArray<Uint8Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Uint8Array );

  }

}

/* EXPORT */

export default _Uint8Array;
