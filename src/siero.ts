
/* IMPORT */

import zeptoid from 'zeptoid';
import Contexts from './addons/contexts';
import Packer from './addons/packer';
import Serializer from './addons/serializer';
import type {SerializeOptions, DeserializeOptions} from './types';

/* MAIN */

//TODO: Probably multiple Siero instances within an actual realm should share the same data and realm id

class Siero {

  /* VARIABLES */

  realm: string;
  contexts: Contexts;
  packer: Packer;
  serializer: Serializer;

  /* CONSTRUCTOR */

  constructor () {

    this.realm = zeptoid ();
    this.contexts = new Contexts ( this );
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

  serialize = ( value: unknown, options?: SerializeOptions ): string => {

    return this.serializer.serialize ( value, options );

  };

  deserialize = ( value: string, options?: DeserializeOptions ): unknown => {

    return this.serializer.deserialize ( value, options );

  };

}

/* EXPORT */

export default Siero;
