
/* IMPORT */

import {TYPES} from './constants';
import type {TypeInstance} from './types';

/* MAIN */

class Siero {

  /* VARIABLES */

  protected types: TypeInstance[];
  protected type2id: Map<TypeInstance, string>;
  protected id2type: Map<string, TypeInstance>;

  protected typeof2type: Map<string, TypeInstance>;
  protected constructor2type: Map<Function, TypeInstance>;
  protected value2type: Map<unknown, TypeInstance>;

  /* CONSTRUCTOR */

  constructor () {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const types = TYPES;

    if ( types.length >= alphabet.length ) throw new Error ( `More than ${alphabet.length} types are not supported` );

    this.types = types.map ( type => new type ( this ) );
    this.type2id = new Map ( this.types.map ( ( type, index ) => [type, alphabet[index]] ) );
    this.id2type = new Map ( this.types.map ( ( type, index ) => [alphabet[index], type] ) );

    this.typeof2type = new Map ( this.types.map ( type => [type.typeof, type] ) );
    this.constructor2type = new Map ( this.types.map ( type => [type.Constructor, type] ) );
    this.value2type = new Map ( this.types.map ( type => [type.value, type] ) );

  }

  /* API */

  serialize = ( value: unknown ): string => {

    if ( value === null ) {
      const a = this.value2type.get ( value );
      if ( a ) {
        const id = this.type2id.get ( a );
        const data = a.serialize ( value );
        return `${id}${data}`;
      }
    }

    const Constructor = value?.constructor;
    if ( Constructor !== undefined ) {
      const a = this.constructor2type.get ( Constructor );
      if ( a ) {
        const id = this.type2id.get ( a );
        const data = a.serialize ( value );
        return `${id}${data}`;
      }
    }

    const type = typeof value;
    if ( type !== undefined ) {
      const a = this.typeof2type.get ( type );
      if ( a ) {
        const id = this.type2id.get ( a );
        const data = a.serialize ( value );
        return `${id}${data}`;
      }
    }

    throw new Error ( 'Unserializable value' );

  };

  deserialize = ( value: string ): unknown => {

    const id = value[0];
    const data = value.slice ( 1 );
    const type = this.id2type.get ( id );

    if ( !type ) throw new Error ( 'Undeserializable value' );

    return type.deserialize ( data );

  };

}

/* EXPORT */

export default Siero;
