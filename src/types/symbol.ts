
/* IMPORT */

import {REALM} from '../constants';
import Type from './type';

/* HELPERS */

const descriptors = Object.getOwnPropertyDescriptors ( Symbol );
const known2symbol: Partial<Record<string, symbol>> = {};
const symbol2known: Partial<Record<symbol, string>> = {};

for ( const prop in descriptors ) {
  const value = descriptors[prop].value;
  if ( typeof value !== 'symbol' ) continue;
  known2symbol[prop] = value;
  symbol2known[value] = prop;
}

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

    const known = symbol2known[value];

    if ( known ) return known;

    const id = ( symbol2id[value] ||= `${counter++}` );
    const id2symbol = ( realm2id2symbol[REALM] ||= {} );
    const symbol = ( id2symbol[id] ||= value );

    return `${REALM}-${id}`;

  }

  deserialize ( value: string ): symbol {

    const known = known2symbol[value];

    if ( known ) return known;

    const [realm, id] = value.split ( '-' );
    const id2symbol = ( realm2id2symbol[realm] ||= {} );
    const symbol = ( id2symbol[id] ||= Symbol () );

    return symbol;

  }

}

/* EXPORT */

export default _Symbol;
