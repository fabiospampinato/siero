
/* IMPORT */

import Type from './type';
import type {ReferenceContext, DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _Reference extends Type<object> {

  /* API */

  has ( value: object, context?: ReferenceContext ): string | undefined {

    return context?.value2reference.get ( value );

  }

  ref ( value: object, context?: ReferenceContext ): void {

    const reference = `${context!.referenceCounter++}`;

    context?.value2reference.set ( value, reference );
    context?.reference2value.set ( reference, value );

  }

  serialize ( value: object, options?: SerializeOptions, context?: SerializeContext ): string {

    const reference = context?.value2reference.get ( value );

    if ( !reference ) throw new Error ( 'Reference for value not found' );

    return reference;

  }

  deserialize ( reference: string, options?: DeserializeOptions, context?: DeserializeContext ): object {

    const value = context?.reference2value.get ( reference );

    if ( !value ) throw new Error ( 'Referenced value not found' );

    return value;

  }

}

/* EXPORT */

export default _Reference;
