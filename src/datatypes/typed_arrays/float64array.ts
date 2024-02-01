
/* IMPORT */

import AbstractNumber from './abstract_number';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Float64Array extends AbstractNumber<Float64Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Float64Array );

  }

}

/* EXPORT */

export default _Float64Array;
