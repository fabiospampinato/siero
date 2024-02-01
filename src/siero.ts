
/* IMPORT */

import Commands from './addons/commands';
import Contexts from './addons/contexts';
import Packer from './addons/packer';
import Realms from './addons/realms';
import Serializer from './addons/serializer';
import ReferenceContext from './datatypes/special/reference.context';
import {getRandomId} from './utils';
import type {Disposer, Options, SerializeOptions, DeserializeOptions} from './types';

/* MAIN */

//TODO: Probably multiple Siero instances within an actual realm should get deduplicated

class Siero {

  /* VARIABLES */

  readonly realm: string;
  readonly commands: Commands;
  readonly contexts: Contexts;
  readonly packer: Packer;
  readonly realms: Realms;
  readonly serializer: Serializer;

  /* CONSTRUCTOR */

  constructor ( options: Options = {} ) {

    this.realm = options.realm ?? getRandomId ();
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

  serialize = ( value: unknown, options: SerializeOptions = {} ): string => {

    return this.serializer.serialize ( value, options, new ReferenceContext () );

  };

  deserialize = ( value: string, options: DeserializeOptions = {} ): unknown => {

    return this.serializer.deserialize ( value, options, new ReferenceContext () );

  };

}

/* EXPORT */

export default Siero;
