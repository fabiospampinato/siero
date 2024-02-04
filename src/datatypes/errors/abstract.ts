
/* IMPORT */

import Type from '../type';
import type {Constructor, DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions, SieroInstance} from '../../types';

/* TYPES */

type Instantiator<T> = () => T;
type WithErrors<T> = T & { errors?: unknown };

/* MAIN */

abstract class Abstract<T extends WithErrors<Error>> extends Type<T> {

  /* VARIABLES */

  readonly Constructor: Constructor<T> | Constructor<T, [unknown[]]>;
  readonly Instantiator: Instantiator<T>;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Constructor<T> | Constructor<T, [unknown[]]>, Instantiator: Instantiator<T> ) {

    super ( siero );

    this.Constructor = Constructor;
    this.Instantiator = Instantiator;

  }

  /* API */

  serialize ( value: T, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.serialized ( value, context );

    const name = value.name;
    const message = value.message;
    const stack = value.stack || '';
    const cause = value.cause ? this.siero.serializer.serialize ( value.cause, options, context ) : '';
    const errors = Array.isArray ( value.errors ) ? this.siero.serializer.serialize ( value.errors, options, context ) : '';
    const packed = this.siero.packer.pack ([ name, message, stack, cause, errors ]);

    return packed;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): T {

    const error: WithErrors<T> = this.Instantiator ();

    this.siero.serializer.deserialized ( error, context );

    const unpacked = this.siero.packer.unpack ( value );
    const [name, message, stack, cause, errors] = unpacked;

    error.name = name;
    error.message = message;
    error.stack = stack;
    error.cause = cause ? this.siero.serializer.deserialize ( cause, options, context ) : undefined;
    error.errors = errors ? this.siero.serializer.deserialize ( errors, options, context ) : undefined;

    return error;

  }

}

/* EXPORT */

export default Abstract;
