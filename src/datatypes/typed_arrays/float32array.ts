
/* IMPORT */

import AbstractNumber from './abstract_number';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Float32Array extends AbstractNumber<Float32Array> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Float32Array );

  }

}

/* EXPORT */

export default _Float32Array;
