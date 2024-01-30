
/* IMPORT */

import {mapGetOrSet, promiseWithResolvers} from '../utils';
import Type from './type';
import type {DeserializeOptions, SerializeOptions, SieroInstance} from '../types';

/* MAIN */

//TODO: Throw on classes, and maybe generators also, though
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

    const [targetRealm, sourceRealm, fnId, resultId] = id.split ( '-' );
    const fn = this.siero.contexts.id2function[`${sourceRealm}-${fnId}`];

    if ( !fn ) {

      this.siero.realms.call ( targetRealm, 'function.settle', [id, false, new ReferenceError ( 'Function not found' )] );

    } else {

      try {

        const result = fn ( ...args );

        if ( result instanceof Promise ) {

          const onResolve = ( value: unknown ) => this.siero.realms.call ( targetRealm, 'function.settle', [id, true, value] );
          const onReject = ( error: unknown ) => this.siero.realms.call ( targetRealm, 'function.settle', [id, false, error] );

          result.then ( onResolve, onReject );

        } else {

          this.siero.realms.call ( targetRealm, 'function.settle', [id, true, result] );

        }

      } catch ( error: unknown ) {

        this.siero.realms.call ( targetRealm, 'function.settle', [id, false, error] );

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
    const afn = ( this.siero.contexts.id2function[id] ||= (async ( ...args: unknown[] ) => value ( ...args )) );
    const aid = mapGetOrSet ( this.siero.contexts.function2id, afn, () => id );
    const packed = this.siero.pack ([ value.name, `${value.length}`, id ]);

    return packed;

  }

  deserialize ( value: string, options?: DeserializeOptions ): Function {

    const [name, length, comboId] = this.siero.unpack ( value );
    const [sourceRealm, fnId] = comboId.split ( '-' );

    const existing = this.siero.contexts.id2function[comboId];

    if ( existing ) return existing;

    const fn = ( this.siero.contexts.id2function[comboId] = ( ...args: unknown[] ) => {

      const targetRealm = this.siero.realm;
      const resultId = this.siero.contexts.functionResultCounter++;
      const id = `${targetRealm}-${sourceRealm}-${fnId}-${resultId}`;
      const promise = promiseWithResolvers ();

      this.siero.contexts.id2functionResult[id] = promise;
      this.siero.realms.call ( sourceRealm, 'function.call', [id, ...args] );

      return promise.promise;

    });

    Object.defineProperty ( fn, 'name', { value: name } );
    Object.defineProperty ( fn, 'length', { value: parseInt ( length ) } );

    const id = mapGetOrSet ( this.siero.contexts.function2id, fn, () => comboId );

    return fn;

  }

}

/* EXPORT */

export default _Function;
