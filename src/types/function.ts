
/* IMPORT */

import {mapGetOrSet, promiseWithResolvers} from '../utils';
import Type from './type';
import type {DeserializeOptions, SerializeOptions, SieroInstance} from '../types';

/* MAIN */

//TODO: Throw on classes, and maybe generators also, though
//TODO: Handle .call, .apply and .bind too
//TODO: Handle .name and .length too
//TODO: Use WeakMaps + FinalizationRegistry, to handle the case where the function is just garbage-collected without settling

class _Function extends Type<Function> {

  /* VARIABLES */

  readonly typeof = 'function';

  /* CONSTRUCTOR */

  constructor ( siero: SieroInstance ) {

    super ( siero );

    this.siero.commands.register ( 'function.call', this.call.bind ( this ) );
    this.siero.commands.register ( 'function.settle', this.settle.bind ( this ) );

  }

  /* API */

  call ( id: string, ...args: unknown[] ) : void {

    const [realm, fnId, resultId] = id.split ( '-' );
    const fn = this.siero.contexts.id2function[fnId];

    if ( !fn ) {

      this.siero.realms.call ( realm, 'function.settle', [id, false, new ReferenceError ( 'Function not found' )] );

    } else {

      try {

        const result = fn ( ...args );

        if ( result instanceof Promise ) {

          const onResolve = ( value: unknown ) => this.siero.realms.call ( realm, 'function.settle', [id, true, value] );
          const onReject = ( error: unknown ) => this.siero.realms.call ( realm, 'function.settle', [id, false, error] );

          result.then ( onResolve, onReject );

        } else {

          this.siero.realms.call ( realm, 'function.settle', [id, true, result] );

        }

      } catch ( error: unknown ) {

        this.siero.realms.call ( realm, 'function.settle', [id, false, error] );

      }

    }

  }

  settle ( id: string, positive: boolean, value: unknown ): void {

    const promise = this.siero.contexts.id2functionResult[id];

    if ( !promise ) return;

    delete this.siero.contexts.id2functionResult[id];

    if ( positive ) {

      promise.resolve ( value );

    } else {

      promise.reject ( value );

    }

  }

  serialize ( value: Function, options?: SerializeOptions ): string {

    const id = mapGetOrSet ( this.siero.contexts.function2id, value, () => `${this.siero.realm}-${this.siero.contexts.functionCounter++}` );
    const fn = ( this.siero.contexts.id2function[id] ||= value );

    return id;

  }

  deserialize ( value: string, options?: DeserializeOptions ): Function {

    const [source, fnId] = value.split ( '-' );

    const fn = ( this.siero.contexts.id2function[value] ||= ( ...args: unknown[] ) => {
      const id = `${value}-${this.siero.contexts.functionResultCounter++}`;
      const promise = promiseWithResolvers ();
      this.siero.contexts.id2functionResult[id] = promise;
      this.siero.realms.call ( source, 'function.call', [id, ...args] );
      return promise.promise;
    });

    const id = mapGetOrSet ( this.siero.contexts.function2id, fn, () => value );

    return fn;

  }

}

/* EXPORT */

export default _Function;
