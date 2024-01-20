
/* IMPORT */

import Addon from './addon';

/* MAIN */

class Packer extends Addon {

  /* API */

  pack = ( unpacked: string[] ): string => {

    let lengths = '';
    let values = '';

    for ( let i = 0, l = unpacked.length; i < l; i++ ) {

      const value = unpacked[i];
      const length = value.length;

      lengths += ( i ? `,${length}` : length );
      values += value;

    }

    return `${lengths}:${values}`;

  };

  unpack = ( packed: string ): string[] => {

    const separatorIndex = packed.indexOf ( ':' );
    const lengthsRaw = packed.slice ( 0, separatorIndex );
    const valuesRaw = packed.slice ( separatorIndex + 1 );
    const lengths = lengthsRaw.length ? lengthsRaw.split ( ',' ) : [];
    const values: string[] = new Array ( lengths.length );

    let offset = 0;

    for ( let i = 0, l = lengths.length; i < l; i++ ) {

      const length = parseInt ( lengths[i] );
      const start = offset;
      const end = offset + length;
      const value = valuesRaw.slice ( start, end );

      values[i] = value;

      offset = end;

    }

    return values;

  };

}

/* EXPORT */

export default Packer;
