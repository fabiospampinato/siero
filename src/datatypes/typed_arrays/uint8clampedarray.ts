
/* IMPORT */

import AbstractNumber from './abstract_number';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Uint8ClampedArray extends AbstractNumber<Uint8ClampedArray> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Uint8ClampedArray );

  }

}

/* EXPORT */

export default _Uint8ClampedArray;
