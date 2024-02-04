
/* IMPORT */

import Abstract from './abstract';
import type {SieroInstance} from '../../types';

/* MAIN */

class _AggregateError extends Abstract<AggregateError> {

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero, AggregateError, () => new AggregateError ([]) );

  }

}

/* EXPORT */

export default _AggregateError;
