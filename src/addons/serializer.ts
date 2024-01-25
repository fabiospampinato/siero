
/* IMPORT */

import {TYPES} from '../constants';
import Addon from './addon';
import type {DeserializeOptions, SerializeOptions, TypeInstance, SieroInstance} from '../types';

/* MAIN */

class Serializer extends Addon {

  /* VARIABLES */

  protected types: TypeInstance[];
  protected type2id: Map<TypeInstance, string>;
  protected id2type: Map<string, TypeInstance>;

  protected value2type: Map<unknown, TypeInstance>;
  protected constructor2type: Map<Function, TypeInstance>;
  protected typeof2type: Map<string, TypeInstance>;

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero );

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const types = TYPES;

    if ( types.length >= alphabet.length ) throw new Error ( `More than ${alphabet.length} types are not supported` );

    this.types = types.map ( type => new type ( siero ) );
    this.type2id = new Map ( this.types.map ( ( type, index ) => [type, alphabet[index]] ) );
    this.id2type = new Map ( this.types.map ( ( type, index ) => [alphabet[index], type] ) );

    this.typeof2type = new Map ( this.types.map ( type => [type.typeof, type] ) );
    this.constructor2type = new Map ( this.types.map ( type => [type.Constructor, type] ) );
    this.value2type = new Map ( this.types.map ( type => [type.value, type] ) );

  }

  /* API */

  infer = ( value: unknown ): TypeInstance | undefined => {

    if ( value === null ) {

      return this.value2type.get ( value );

    }

    const type = typeof value;
    const Constructor = value?.constructor;

    if ( type === 'object' && Constructor !== undefined ) {

      return this.constructor2type.get ( Constructor );

    }

    return this.typeof2type.get ( type );

  };

  serialize = ( value: unknown, options?: SerializeOptions ): string => {

    const type = this.infer ( value );

    if ( !type ) throw new Error ( 'Unserializable value' );

    const id = this.type2id.get ( type );
    const data = type.serialize ( value, options );

    return `${id}${data}`;

  };

  deserialize = ( value: string, options?: DeserializeOptions ): unknown => {

    const id = value[0];
    const data = value.slice ( 1 );
    const type = this.id2type.get ( id );

    if ( !type ) throw new Error ( 'Undeserializable value' );

    return type.deserialize ( data, options );

  };

}

/* EXPORT */

export default Serializer;
