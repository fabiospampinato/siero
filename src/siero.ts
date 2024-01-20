
/* IMPORT */

import zeptoid from 'zeptoid';
import Packer from './addons/packer';
import Serializer from './addons/serializer';

/* MAIN */

//TODO: Probably multiple Siero instances within an actual realm should share the same data and realm id

class Siero {

  /* VARIABLES */

  realm: string;
  packer: Packer;
  serializer: Serializer;

  /* CONSTRUCTOR */

  constructor () {

    this.realm = zeptoid ();
    this.packer = new Packer ( this );
    this.serializer = new Serializer ( this );

  }

  /* API */

  pack = ( unpacked: string[] ): string => {

    return this.packer.pack ( unpacked );

  };

  unpack = ( packed: string ): string[] => {

    return this.packer.unpack ( packed );

  };

  serialize = ( value: unknown ): string => {

    return this.serializer.serialize ( value );

  };

  deserialize = ( value: string ): unknown => {

    return this.serializer.deserialize ( value );

  };

}

/* EXPORT */

export default Siero;
