
/* IMPORT */

import Known from 'known-symbols';
import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

//TODO: Use WeakMaps + FinalizationRegistry, once support for symbols as their keys is widespread, to not hold into memory indefinitely

class _Symbol extends Type<symbol> {

  /* VARIABLES */

  readonly typeof = 'symbol';

  /* API */

  serialize ( value: symbol, options?: SerializeOptions ): string {

    const known = Known.getName ( value );

    if ( known ) return known;

    const id = ( this.siero.contexts.symbol2id[value] ||= `${this.siero.realm}-${this.siero.contexts.symbolCounter++}` );
    const symbol = ( this.siero.contexts.id2symbol[id] ||= value );

    return id;

  }

  deserialize ( value: string, options?: DeserializeOptions ): symbol {

    const known = Known.getSymbol ( value );

    if ( known ) return known;

    const symbol = ( this.siero.contexts.id2symbol[value] ||= Symbol () );
    const id = ( this.siero.contexts.symbol2id[symbol] ||= value );

    return symbol;

  }

}

/* EXPORT */

export default _Symbol;
