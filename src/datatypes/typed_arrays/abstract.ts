
/* IMPORT */

import Type from '../type';
import type {Constructor, DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions, SieroInstance, TypedArray} from '../../types';

/* TYPES */

type Parser<T> = ( value: string ) => T;

/* MAIN */

//TODO: Maybe serialize the buffer to Base64, for smaller outputs (https://github.com/tc39/proposal-arraybuffer-base64)
//TODO: Maybe build this on top of the ArrayBuffer type

abstract class Abstract<T extends TypedArray, U extends bigint | number> extends Type<T> {

  /* VARIABLES */

  readonly Constructor: Constructor<T, [Iterable<U>]>;
  readonly Parser: Parser<U>;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Constructor<T, [Iterable<U>]>, Parser: Parser<U> ) {

    super ( siero );

    this.Constructor = Constructor;
    this.Parser = Parser;

  }

  /* API */

  serialize ( value: T, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.serialized ( value, context );

    return value.toString ();

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): T {

    const values = value ? value.split ( ',' ).map ( this.Parser ) : [];
    const typedArray = new this.Constructor ( values );

    this.siero.serializer.deserialized ( typedArray, context );

    return typedArray;

  }

}

/* EXPORT */

export default Abstract;
