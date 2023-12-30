
/* IMPORT */

import Type from './type';

/* MAIN */

class _BoxedSymbol extends Type<object> {

  /* VARIABLES */

  readonly Constructor = Symbol;

  /* API */

  serialize ( value: object ): string {

    return this.siero.serialize ( value.valueOf () );

  }

  deserialize ( value: string ): object {

    return Object ( this.siero.deserialize ( value ) );

  }

}

/* EXPORT */

export default _BoxedSymbol;
