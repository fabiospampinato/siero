
/* IMPORT */

import Known from 'known-symbols';
import Type from './type';

/* CONTEXT */

let symbol2id: Partial<Record<symbol, string>> = {};
let realm2id2symbol: Partial<Record<string, Partial<Record<string, symbol>>>> = {};
let counter = 1;

/* MAIN */

//TODO: Use WeakMaps, once support for symbols as their keys is widespread, to not leak any memory

class _Symbol extends Type<symbol> {

  /* VARIABLES */

  readonly typeof = 'symbol';

  /* API */

  serialize ( value: symbol ): string {

    const known = Known.getName ( value );

    if ( known ) return known;

    const realm = this.siero.realm;
    const id = ( symbol2id[value] ||= `${counter++}` );
    const id2symbol = ( realm2id2symbol[realm] ||= {} );
    const symbol = ( id2symbol[id] ||= value );

    return `${realm}-${id}`;

  }

  deserialize ( value: string ): symbol {

    const known = Known.getSymbol ( value );

    if ( known ) return known;

    const [realm, id] = value.split ( '-' );
    const id2symbol = ( realm2id2symbol[realm] ||= {} );
    const symbol = ( id2symbol[id] ||= Symbol () );

    return symbol;

  }

}

/* EXPORT */

export default _Symbol;
