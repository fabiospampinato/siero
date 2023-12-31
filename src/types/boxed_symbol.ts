
/* IMPORT */

import AbstractBoxed from './abstract_boxed';
import type {SieroInstance} from '../types';

/* MAIN */

class _BoxedSymbol extends AbstractBoxed {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Symbol );

  }

}

/* EXPORT */

export default _BoxedSymbol;
