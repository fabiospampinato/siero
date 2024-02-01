
/* IMPORT */

import AbstractNumber from './abstract_number';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Int8Array extends AbstractNumber<Int8Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Int8Array );

  }

}

/* EXPORT */

export default _Int8Array;
