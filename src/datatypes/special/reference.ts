
/* IMPORT */

import Type from '../type';
import type {ReferenceContext, DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _Reference extends Type<unknown> {

  /* API */

  has ( value: unknown, context: ReferenceContext ): boolean {

    return context.value2reference.has ( value );

  }

  register ( value: unknown, context: ReferenceContext ): void { //TODO: Optimize this, we only need to fill one map at a time

    const reference = `${context.referenceCounter++}`;

    context.value2reference.set ( value, reference );
    context.reference2value.set ( reference, value );

  }

  serialize ( value: unknown, options: SerializeOptions, context: SerializeContext ): string {

    const reference = context.value2reference.get ( value );

    if ( !reference ) throw new Error ( 'Reference for value not found' );

    return reference;

  }

  deserialize ( reference: string, options: DeserializeOptions, context: DeserializeContext ): unknown {

    const value = context.reference2value.get ( reference );

    if ( !value ) throw new Error ( 'Referenced value not found' );

    return value;

  }

}

/* EXPORT */

export default _Reference;
