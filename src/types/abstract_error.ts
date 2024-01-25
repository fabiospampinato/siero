
/* IMPORT */

import Type from './type';
import type {Constructor, DeserializeOptions, SerializeOptions, SieroInstance} from '../types';

/* MAIN */

abstract class AbstractError<T extends Error> extends Type<T> {

  /* VARIABLES */

  readonly Constructor: Constructor<T>;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Constructor<T> ) {

    super ( siero );

    this.Constructor = Constructor;

  }

  /* API */

  serialize ( value: T, options?: SerializeOptions ): string {

    const name = value.name;
    const message = value.message;
    const stack = value.stack || '';
    const cause = value.cause ? this.siero.serialize ( value.cause, options ) : '';
    const packed = this.siero.pack ([ name, message, stack, cause ]);

    return packed;

  }

  deserialize ( value: string, options?: DeserializeOptions ): T {

    const unpacked = this.siero.unpack ( value );
    const [name, message, stack, cause] = unpacked;
    const error = new this.Constructor ();

    error.name = name;
    error.message = message;
    error.stack = stack;
    error.cause = cause ? this.siero.deserialize ( cause, options ) : undefined;

    return error;

  }

}

/* EXPORT */

export default AbstractError;
