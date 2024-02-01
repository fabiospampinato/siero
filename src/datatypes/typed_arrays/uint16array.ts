
/* IMPORT */

import AbstractNumber from './abstract_number';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Uint16Array extends AbstractNumber<Uint16Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Uint16Array );

  }

}

/* EXPORT */

export default _Uint16Array;
