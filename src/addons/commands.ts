
/* IMPORT */

import Addon from './addon';
import type {Disposer} from '../types';

/* TYPES */

type Handler = Function;

/* MAIN */

class Commands extends Addon {

  /* VARIABLES */

  private commands: Record<string, Handler> = {};

  /* API */

  call = ( command: string, args: unknown[] ): unknown => {

    const handler = this.commands[command];

    if ( !handler ) throw new Error ( `Command not found: "${command}"` );

    return handler ( ...args );

  };

  has = ( command: string ): boolean => {

    return ( command in this.commands );

  };

  register = ( command: string, handler: Handler ): Disposer => {

    if ( this.has ( command ) ) throw new Error ( `Command already registered: "${command}"` );

    this.commands[command] = handler;

    return (): void => {

      delete this.commands[command];

    };

  };

}

/* EXPORT */

export default Commands;
