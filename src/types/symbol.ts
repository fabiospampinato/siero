
/* IMPORT */

import Known from 'known-symbols';
import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

//TODO: Use WeakMaps, once support for symbols as their keys is widespread, to not leak any memory
//TODO: Preserve external symbols as such, so serialize ABC-123 to ABC-123 if we are serializing for ABC

class _Symbol extends Type<symbol> {

  /* VARIABLES */

  readonly typeof = 'symbol';

  /* API */

  serialize ( value: symbol, options?: SerializeOptions ): string {

    const known = Known.getName ( value );

    if ( known ) return known;

    const realm = this.siero.realm;
    const symbol2id = ( this.siero.contexts.realm2symbol2id[realm] ||= {} );
    const id2symbol = ( this.siero.contexts.realm2id2symbol[realm] ||= {} );
    const id = ( symbol2id[value] ||= `${this.siero.contexts.symbolCounter++}` );
    const symbol = ( id2symbol[id] ||= value );

    return `${realm}-${id}`;

  }

  deserialize ( value: string, options?: DeserializeOptions ): symbol {

    const known = Known.getSymbol ( value );

    if ( known ) return known;

    const [realm, id] = value.split ( '-' );
    const id2symbol = ( this.siero.contexts.realm2id2symbol[realm] ||= {} );
    const symbol = ( id2symbol[id] ||= Symbol () );

    return symbol;

  }

}

/* EXPORT */

export default _Symbol;
