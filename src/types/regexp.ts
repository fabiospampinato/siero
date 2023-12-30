
/* IMPORT */

import Packer from '../packer';
import Type from './type';

/* MAIN */

class _RegExp extends Type<RegExp> {

  /* VARIABLES */

  readonly Constructor = RegExp;

  /* API */

  serialize ( value: RegExp ): string {

    const {source, flags} = value;
    const packed = Packer.pack ([ source, flags ]);

    return packed;

  }

  deserialize ( value: string ): RegExp {

    const unpacked = Packer.unpack ( value );
    const [source, flags] = unpacked;
    const re = new RegExp ( source, flags );

    return re;

  }

}

/* EXPORT */

export default _RegExp;
