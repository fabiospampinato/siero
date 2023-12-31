
/* IMPORT */

import AbstractBoxed from './abstract_boxed';
import type {SieroInstance} from '../types';

/* MAIN */

class _BoxedNumber extends AbstractBoxed {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Number );

  }

}

/* EXPORT */

export default _BoxedNumber;
