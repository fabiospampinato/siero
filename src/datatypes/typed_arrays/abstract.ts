
/* IMPORT */

import Type from '../type';
import type {Constructor, DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions, SieroInstance, TypedArray} from '../../types';

/* TYPES */

type Parser<T> = ( value: string ) => T;

/* MAIN */

abstract class Abstract<T extends TypedArray, U extends bigint | number> extends Type<T> {

  /* VARIABLES */

  readonly Constructor: Constructor<T, [Iterable<U>, number, number]>;
  readonly Parser: Parser<U>;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance, Constructor: Constructor<T, [Iterable<U>]>, Parser: Parser<U> ) {

    super ( siero );

    this.Constructor = Constructor;
    this.Parser = Parser;

  }

  /* API */

  serialize ( value: T, options: SerializeOptions, context: SerializeContext ): string {

    const buffer = this.siero.serializer.serialize ( value.buffer, options, context );
    const offset = `${value.byteOffset}`;
    const length = `${value.length}`;
    const packed = this.siero.packer.pack ([ buffer, offset, length ]);

    this.siero.serializer.serialized ( value, context );

    return packed;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): T {

    const unpacked = this.siero.packer.unpack ( value );
    const buffer = this.siero.serializer.deserialize ( unpacked[0], options, context );
    const offset = parseInt ( unpacked[1] );
    const length = parseInt ( unpacked[2] );
    const typedArray = new this.Constructor ( buffer, offset, length );

    this.siero.serializer.deserialized ( typedArray, context );

    return typedArray;

  }

}

/* EXPORT */

export default Abstract;
