
/* IMPORT */

import Abstract from './abstract';
import type {SieroInstance} from '../../types';

/* MAIN */

class _Error extends Abstract<Error> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, Error );

  }

}

/* EXPORT */

export default _Error;
