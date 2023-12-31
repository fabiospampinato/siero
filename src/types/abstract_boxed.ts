
/* IMPORT */

import Type from './type';
import type {SieroInstance} from '../types';

/* MAIN */

class AbstractBoxed extends Type<object> {

  /* VARIABLES */

  readonly Constructor: Function;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Function ) {

    super ( siero );

    this.Constructor = Constructor;

  }

  /* API */

  serialize ( value: object ): string {

    return this.siero.serialize ( value.valueOf () );

  }

  deserialize ( value: string ): object {

    return Object ( this.siero.deserialize ( value ) );

  }

}

/* EXPORT */

export default AbstractBoxed;
