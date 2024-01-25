
/* IMPORT */

import Type from './type';
import type {DeserializeOptions, SerializeOptions, SieroInstance} from '../types';

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

  serialize ( value: object, options?: SerializeOptions ): string {

    return this.siero.serialize ( value.valueOf (), options );

  }

  deserialize ( value: string, options?: DeserializeOptions ): object {

    return Object ( this.siero.deserialize ( value, options ) );

  }

}

/* EXPORT */

export default AbstractBoxed;
