
/* IMPORT */

import Addon from './addon';
import type {Disposer} from '../types';

/* TYPES */

type Handler = ( command: string, args: string ) => void;

/* MAIN */

//TODO: Improve handling of serialization errors when attempting to make a call

class Realms extends Addon {

  /* VARIABLES */

  private realms: Record<string, Handler> = {};

  /* API */

  call = ( realm: string, command: string, args: unknown[] ): void => {

    const handler = this.realms[realm];

    if ( !handler ) throw new Error ( `Realm not found: "${realm}"` );

    return handler ( command, this.siero.serialize ( args, { realm } ) );

  };

  has = ( realm: string ): boolean => {

    return ( realm in this.realms );

  };

  register = ( realm: string, handler: Handler ): Disposer => {

    if ( this.has ( realm ) ) throw new Error ( `Realm already registered: "${realm}"` );

    this.realms[realm] = handler;

    return (): void => {

      delete this.realms[realm];

    };

  };

}

/* EXPORT */

export default Realms;
