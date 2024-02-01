
/* IMPORT */

import Type from '../type';
import type {Constructor, DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions, SieroInstance} from '../../types';

/* MAIN */

abstract class Abstract<T extends Error> extends Type<T> {

  /* VARIABLES */

  readonly Constructor: Constructor<T>;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Constructor<T> ) {

    super ( siero );

    this.Constructor = Constructor;

  }

  /* API */

  serialize ( value: T, options: SerializeOptions, context: SerializeContext ): string {

    const name = value.name;
    const message = value.message;
    const stack = value.stack || '';
    const cause = value.cause ? this.siero.serializer.serialize ( value.cause, options, context ) : '';
    const packed = this.siero.packer.pack ([ name, message, stack, cause ]);

    return packed;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): T {

    const unpacked = this.siero.packer.unpack ( value );
    const [name, message, stack, cause] = unpacked;
    const error = new this.Constructor ();

    error.name = name;
    error.message = message;
    error.stack = stack;
    error.cause = cause ? this.siero.serializer.deserialize ( cause, options, context ) : undefined;

    return error;

  }

}

/* EXPORT */

export default Abstract;
