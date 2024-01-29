
/* IMPORT */

import Commands from './addons/commands';
import Contexts from './addons/contexts';
import Packer from './addons/packer';
import Realms from './addons/realms';
import Serializer from './addons/serializer';
import {getRandomId} from './utils';
import type {Disposer, SerializeOptions, DeserializeOptions} from './types';

/* MAIN */

//TODO: Probably multiple Siero instances within an actual realm should share the same data and realm id

class Siero {

  /* VARIABLES */

  readonly realm: string;
  readonly commands: Commands;
  readonly contexts: Contexts;
  readonly packer: Packer;
  readonly realms: Realms;
  readonly serializer: Serializer;

  /* CONSTRUCTOR */

  constructor () {

    this.realm = getRandomId ();
    this.commands = new Commands ( this );
    this.contexts = new Contexts ( this );
    this.packer = new Packer ( this );
    this.realms = new Realms ( this );
    this.serializer = new Serializer ( this );

  }

  /* API */

  call = ( command: string, args: unknown[] ): void => {

    this.commands.call ( command, args );

  };

  register = ( realm: string, handler: ( command: string, args: string ) => void ): Disposer => {

    return this.realms.register ( realm, handler );

  };

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
