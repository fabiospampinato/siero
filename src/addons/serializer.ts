
/* IMPORT */

import {TYPES} from '../constants';
import Reference from '../datatypes/special/reference';
import Addon from './addon';
import type {ReferenceContext, DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions, TypeInstance, SieroInstance} from '../types';

/* MAIN */

class Serializer extends Addon {

  /* VARIABLES */

  private types: TypeInstance[];
  private type2id: Map<TypeInstance, string>;
  private id2type: Map<string, TypeInstance>;

  private value2type: Map<unknown, TypeInstance>;
  private constructor2type: Map<unknown, TypeInstance>;
  private typeof2type: Map<unknown, TypeInstance>;

  private reference: Reference;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero );

    const alphabet = '@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const types = TYPES;

    if ( types.length >= alphabet.length ) throw new Error ( `More than ${alphabet.length} types are not supported` );

    this.types = types.map ( type => new type ( siero ) );
    this.type2id = new Map ( this.types.map ( ( type, index ) => [type, alphabet[index]] ) );
    this.id2type = new Map ( this.types.map ( ( type, index ) => [alphabet[index], type] ) );

    this.typeof2type = new Map ( this.types.map ( type => [type.typeof, type] ) );
    this.constructor2type = new Map ( this.types.map ( type => [type.Constructor, type] ) );
    this.value2type = new Map ( this.types.map ( type => [type.value, type] ) );

    this.reference = this.types[0] as Reference; //TSC

  }

  /* API */

  infer = ( value: unknown, context: ReferenceContext ): TypeInstance | undefined => {

    if ( value === null ) {

      return this.value2type.get ( value );

    }

    const type = typeof value;
    const Constructor = value?.constructor;

    if ( ( type === 'object' || type === 'function' ) && this.reference.has ( value, context ) ) {

      return this.reference;

    } else if ( type === 'object' && Constructor !== undefined ) {

      return this.constructor2type.get ( Constructor );

    } else {

      return this.typeof2type.get ( type );

    }

  };

  register = ( value: object, context: ReferenceContext ): void => {

    this.reference.register ( value, context );

  };

  serialize = ( value: unknown, options: SerializeOptions, context: SerializeContext ): string => {

    const type = this.infer ( value, context );

    if ( !type ) throw new Error ( 'Unserializable value' );

    const id = this.type2id.get ( type );
    const data = type.serialize ( value, options, context );

    return `${id}${data}`;

  };

  deserialize = ( value: string, options: DeserializeOptions, context: DeserializeContext ): unknown => {

    const id = value[0];
    const data = value.slice ( 1 );
    const type = this.id2type.get ( id );

    if ( !type ) throw new Error ( 'Undeserializable value' );

    return type.deserialize ( data, options, context );

  };

}

/* EXPORT */

export default Serializer;
