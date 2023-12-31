
/* IMPORT */

import AbstractBoxed from './abstract_boxed';
import type {SieroInstance} from '../types';

/* MAIN */

class _BoxedBoolean extends AbstractBoxed {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Boolean );

  }

}

/* EXPORT */

export default _BoxedBoolean;
