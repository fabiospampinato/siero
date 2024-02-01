
/* IMPORT */

import AbstractNumber from './abstract_number';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Int32Array extends AbstractNumber<Int32Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Int32Array );

  }

}

/* EXPORT */

export default _Int32Array;
