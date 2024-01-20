
/* IMPORT */

import Type from './type';

/* MAIN */

class _RegExp extends Type<RegExp> {

  /* VARIABLES */

  readonly Constructor = RegExp;

  /* API */

  serialize ( value: RegExp ): string {

    const {source, flags} = value;
    const packed = this.siero.pack ([ source, flags ]);

    return packed;

  }

  deserialize ( value: string ): RegExp {

    const unpacked = this.siero.unpack ( value );
    const [source, flags] = unpacked;
    const re = new RegExp ( source, flags );

    return re;

  }

}

/* EXPORT */

export default _RegExp;
