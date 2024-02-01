
/* IMPORT */

import AbstractNumber from './abstract_number';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Int16Array extends AbstractNumber<Int16Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Int16Array );

  }

}

/* EXPORT */

export default _Int16Array;
