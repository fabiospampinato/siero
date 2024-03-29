
/* IMPORT */

import Known from 'known-symbols';
import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

//TODO: Use WeakMaps + FinalizationRegistry, once support for symbols as their keys is widespread, to not hold into memory indefinitely

class _Symbol extends Type<symbol> {

  /* VARIABLES */

  readonly typeof = 'symbol';

  /* API */

  serialize ( value: symbol, options: SerializeOptions, context: SerializeContext ): string {

    const sharedKey = Symbol.keyFor ( value );

    if ( sharedKey ) return `_${sharedKey}`;

    const knownName = Known.getName ( value );

    if ( knownName ) return knownName;

    const id = ( this.siero.contexts.symbol2id[value] ||= `${this.siero.realm}-${this.siero.contexts.symbolCounter++}` );
    const symbol = ( this.siero.contexts.id2symbol[id] ||= value );

    return id;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): symbol {

    const sharedSymbol = value[0] === '_' && Symbol.for ( value.slice ( 1 ) );

    if ( sharedSymbol ) return sharedSymbol;

    const knownSymbol = Known.getSymbol ( value );

    if ( knownSymbol ) return knownSymbol;

    const symbol = ( this.siero.contexts.id2symbol[value] ||= Symbol () );
    const id = ( this.siero.contexts.symbol2id[symbol] ||= value );

    return symbol;

  }

}

/* EXPORT */

export default _Symbol;
