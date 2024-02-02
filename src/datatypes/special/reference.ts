
/* IMPORT */

import Type from '../type';
import type {ReferenceContext, DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _Reference extends Type<unknown> {

  /* API */

  isSerialized ( value: unknown, context: ReferenceContext ): boolean {

    return context.value2reference.has ( value );

  }

  serialized ( value: unknown, context: ReferenceContext ): void {

    context.value2reference.set ( value, context.referenceCounter++ );

  }

  deserialized ( value: unknown, context: ReferenceContext ): void {

    context.reference2value.push ( value );

  }

  serialize ( value: unknown, options: SerializeOptions, context: SerializeContext ): string {

    const reference = context.value2reference.get ( value );

    if ( !reference ) throw new Error ( 'Reference for value not found' );

    return `${reference}`;

  }

  deserialize ( reference: string, options: DeserializeOptions, context: DeserializeContext ): unknown {

    const value = context.reference2value[parseInt ( reference )];

    if ( !value ) throw new Error ( 'Referenced value not found' );

    return value;

  }

}

/* EXPORT */

export default _Reference;
