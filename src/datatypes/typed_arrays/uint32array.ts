
/* IMPORT */

import AbstractNumber from './abstract_number';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Uint32Array extends AbstractNumber<Uint32Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Uint32Array );

  }

}

/* EXPORT */

export default _Uint32Array;
