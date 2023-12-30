
/* IMPORT */

import Packer from '../packer';
import Type from './type';
import type {Constructor, SieroInstance} from '../types';

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

  serialize ( value: T ): string {

    const name = value.name;
    const message = value.message;
    const stack = value.stack || '';
    const cause = value.cause ? this.siero.serialize ( value.cause ) : '';
    const packed = Packer.pack ([ name, message, stack, cause ]);

    return packed;

  }

  deserialize ( value: string ): T {

    const unpacked = Packer.unpack ( value );
    const [name, message, stack, cause] = unpacked;
    const error = new this.Constructor ();

    error.name = name;
    error.message = message;
    error.stack = stack;
    error.cause = cause ? this.siero.deserialize ( cause ) : undefined;

    return error;

  }

}

/* EXPORT */

export default AbstractError;
