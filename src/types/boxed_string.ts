
/* IMPORT */

import AbstractBoxed from './abstract_boxed';
import type {SieroInstance} from '../types';

/* MAIN */

class _BoxedString extends AbstractBoxed {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, String );

  }

}

/* EXPORT */

export default _BoxedString;
