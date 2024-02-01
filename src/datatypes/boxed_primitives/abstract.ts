
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions, SieroInstance} from '../../types';

/* MAIN */

class Absract extends Type<object> {

  /* VARIABLES */

  readonly Constructor: Function;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Function ) {

    super ( siero );

    this.Constructor = Constructor;

  }

  /* API */

  serialize ( value: object, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.ref ( value, context );

    return this.siero.serializer.serialize ( value.valueOf (), options, context );

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): object {

    const boxed = Object ( this.siero.serializer.deserialize ( value, options, context ) );

    this.siero.serializer.ref ( boxed, context );

    return boxed;

  }

}

/* EXPORT */

export default Absract;
