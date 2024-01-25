
/* IMPORT */

import Type from './type';
import type {DeserializeOptions, SerializeOptions} from '../types';

/* MAIN */

class _RegExp extends Type<RegExp> {

  /* VARIABLES */

  readonly Constructor = RegExp;

  /* API */

  serialize ( value: RegExp, options?: SerializeOptions ): string {

    const {source, flags} = value;
    const packed = this.siero.pack ([ source, flags ]);

    return packed;

  }

  deserialize ( value: string, options?: DeserializeOptions ): RegExp {

    const unpacked = this.siero.unpack ( value );
    const [source, flags] = unpacked;
    const re = new RegExp ( source, flags );

    return re;

  }

}

/* EXPORT */

export default _RegExp;
