
/* IMPORT */

import AbstractNumber from './abstract_number';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Uint8Array extends AbstractNumber<Uint8Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Uint8Array );

  }

}

/* EXPORT */

export default _Uint8Array;
