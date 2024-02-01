
/* IMPORT */

import Type from '../type';
import type {DeserializeContext, SerializeContext, DeserializeOptions, SerializeOptions} from '../../types';

/* MAIN */

class _RegExp extends Type<RegExp> {

  /* VARIABLES */

  readonly Constructor = RegExp;

  /* API */

  serialize ( value: RegExp, options: SerializeOptions, context: SerializeContext ): string {

    this.siero.serializer.ref ( value, context );

    const {source, flags} = value;
    const packed = this.siero.packer.pack ([ source, flags ]);

    return packed;

  }

  deserialize ( value: string, options: DeserializeOptions, context: DeserializeContext ): RegExp {

    const unpacked = this.siero.packer.unpack ( value );
    const [source, flags] = unpacked;
    const re = new RegExp ( source, flags );

    this.siero.serializer.ref ( re, context );

    return re;

  }

}

/* EXPORT */

export default _RegExp;
