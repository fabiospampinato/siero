
/* IMPORT */

import AbstractRegular from './abstract_regular';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Error extends AbstractRegular<Error> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Error );

  }

}

/* EXPORT */

export default _Error;
